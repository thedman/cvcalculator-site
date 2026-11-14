// Offline regression only. Run: node docs/security-closeout-regression.cjs
// Requires the sibling private Worker repositories; never opens network sockets.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
class Budget {
  constructor(limits, ledgerPath) {
    this.limits = limits; this.ledgerPath=ledgerPath;
    const previous=ledgerPath&&fs.existsSync(ledgerPath)?JSON.parse(fs.readFileSync(ledgerPath,'utf8')):null;
    this.used = previous?.used || Object.fromEntries(Object.keys(limits).map(k => [k, 0])); this.ledger = previous?.ledger || [];
  }
  reserve(kind, provider, label, units=1) {
    const keys = [kind, `${kind}:${provider}`];
    assert.ok(Number.isSafeInteger(units)&&units>0);
    for (const key of keys) assert.ok(key in this.limits && this.used[key]+units <= this.limits[key], `Budget exhausted: ${key}`);
    for (const key of keys) this.used[key]+=units;
    this.ledger.push({kind, provider, label}); // Reserve before dispatch; never refund failures.
    if(this.ledgerPath) fs.writeFileSync(this.ledgerPath,JSON.stringify({limits:this.limits,used:this.used,ledger:this.ledger},null,2));
  }
  async attempt(kind, provider, label, dispatch) { this.reserve(kind, provider, label); return dispatch(); }
}
async function main() {
  const staticOnly = process.argv.includes('--static-only');
  const leadOnly = process.argv.includes('--lead-only');
  const ledgerPath=process.env.CVC_SECURITY_LEDGER;
  assert.ok(staticOnly||ledgerPath,'Set CVC_SECURITY_LEDGER to a durable private ledger path before handler tests. Reuse it across retries.');
  if(!staticOnly) {
    const lock=ledgerPath+'.lock'; const fd=fs.openSync(lock,'wx');
    process.on('exit',()=>{fs.closeSync(fd);fs.unlinkSync(lock);}); // Refuse concurrent processes.
  }
  // This is a NEW bounded local closeout phase, not an extension of the exhausted old phase.
  const budget = new Budget({handler: 96, 'handler:google-stub': 88, 'handler:lead-stub': 8,
    http: 8, 'http:stub': 8, 'http:live': 0},ledgerPath);
  assert.ok(staticOnly||budget.used.handler+(leadOnly?8:88)<=96,'Insufficient phase budget for complete requested batch');
  const root = path.resolve(__dirname, '..');
  const leadRoot = path.resolve(root, '../shared-lead-registry-worker');
  const chatRoot = path.resolve(root, '../cvcalculator-ai-chat-worker');
  const source = fs.readFileSync(path.join(leadRoot, 'apps-script/Code.gs'), 'utf8');
  let appends = [], opens = 0;
  const ctx = vm.createContext({
    PropertiesService: {getScriptProperties: () => ({getProperty: k => ({LEAD_REGISTRY_SHARED_SECRET_V2:'NEW-FAKE', LEAD_REGISTRY_SHARED_SECRET:'OLD-FAKE', LEAD_SHEET_ID:'FIXTURE', LEAD_SHEET_TAB:'leads'})[k]})},
    SpreadsheetApp: {openById: id => { opens++; assert.equal(id, 'FIXTURE'); return {getSheetByName: () => ({getRange: () => ({getValues: () => [vm.runInContext('LEAD_HEADERS',ctx)]}), appendRow: row => appends.push(Array.from(row))})}; }},
    ContentService: {MimeType:{JSON:'json'}, createTextOutput: text => ({setMimeType: () => JSON.parse(text)})}
  });
  vm.runInContext(source, ctx);
  const headers = Array.from(vm.runInContext('LEAD_HEADERS',ctx));
  const base = Object.fromEntries(headers.map(k => [k,'fixture']));
  base.email = 'synthetic@example.invalid'; base.submitted_at_epoch_ms = 1794571200000;
  for (const field of staticOnly||leadOnly ? [] : headers) for (const value of ['=1+1', '+1', '-1', '@SUM(1,1)', '\t=1+1', '\u00a0=1+1']) {
    const record = {...base,[field]:value};
    const body = JSON.stringify({secret:'NEW-FAKE',record});
    const result = await budget.attempt('handler','google-stub',`${field}:${JSON.stringify(value)}`,() => ctx.doPost({postData:{contents:body}}));
    assert.equal(result.success,true); assert.equal(appends.at(-1)[headers.indexOf(field)],"'"+value);
  }
  for (const secret of staticOnly||leadOnly ? [] : ['OLD-FAKE', '']) {
    const before = opens;
    const result = await budget.attempt('handler','google-stub','retired/missing-key',() => ctx.doPost({postData:{contents:JSON.stringify({secret,record:base})}}));
    assert.equal(result.error,'Unauthorized.'); assert.equal(opens,before);
  }
  if(!staticOnly) {
    const esbuild=require(path.join(leadRoot,'node_modules/esbuild'));
    const built=await esbuild.build({entryPoints:[path.join(leadRoot,'src/index.ts')],bundle:true,platform:'node',format:'esm',write:false});
    const {handleRequest}=await import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].text).toString('base64'));
    const originalFetch=globalThis.fetch; let acknowledgement=true, sent=[];
    globalThis.fetch=async(url,init)=>budget.attempt('http','stub','mock registry',()=>{
      assert.equal(url,'https://registry.invalid/exec'); sent.push(JSON.parse(init.body));
      return new Response(JSON.stringify({success:acknowledgement}));
    });
    const env={LEAD_ALLOWED_ORIGINS:'https://cvcalculator.ca',LEAD_REGISTRY_SCRIPT_URL:'https://registry.invalid/exec',LEAD_REGISTRY_SHARED_SECRET:'FAKE',LEAD_NOTIFICATIONS_ENABLED:'false'};
    const payload={email:'SYNTHETIC@example.invalid',source_site:'cvcalculator.ca',source_page:'/',cta_location:'closeout',product_interest:'cvcalculator'};
    try {
      for(const [body,status,ack] of [[null,400,true],[{...payload,email:'bad'},400,true],[payload,200,true],[{...payload,product_interest:'renewaliq'},200,true],[payload,500,'false'],[payload,500,1],[payload,500,false],[payload,200,true]]) {
        acknowledgement=ack;
        const response=await budget.attempt('handler','lead-stub','validation/attribution/ack',()=>handleRequest(new Request('https://local.invalid/lead',{method:'POST',headers:{Origin:'https://cvcalculator.ca'},body:JSON.stringify(body)}),env));
        assert.equal(response.status,status);assert.equal(response.headers.get('Cache-Control'),'no-store');
        assert.doesNotMatch(await response.text(),/FAKE|synthetic@example.invalid/i);
      }
      assert.equal(sent.length,6);assert.equal(sent[0].record.email,'synthetic@example.invalid');assert.equal(sent[1].record.product_interest,'renewaliq');
      assert.ok(sent.every(x=>x.record.notification_status==='disabled'));
    } finally {globalThis.fetch=originalFetch;}
  }
  // Budget boundary, retries, redirect hops and failures are distinct dispatch attempts.
  const b = new Budget({http:3,'http:stub':3}); let dispatches=0;
  for (const label of ['failed-initial','retry','redirect-hop']) {
    try { await b.attempt('http','stub',label,() => {dispatches++;throw Error('synthetic transport failure');}); } catch {}
  }
  await assert.rejects(() => b.attempt('http','stub','over-limit',() => {dispatches++;}));
  assert.equal(dispatches,3); assert.equal(b.used.http,3);
  const providerBoundary=new Budget({http:3,'http:a':1,'http:b':2});
  providerBoundary.reserve('http','a','first');
  assert.throws(()=>providerBoundary.reserve('http','a','provider exhausted'));
  providerBoundary.reserve('http','b','other provider remains available');assert.equal(providerBoundary.used.http,2);
  const costs=new Budget({microUSD:50000,'microUSD:ai':50000,tokens:400,'tokens:ai':400});
  costs.reserve('microUSD','ai','maximum spend reservation',50000);assert.throws(()=>costs.reserve('microUSD','ai','over spend'));
  costs.reserve('tokens','ai','maximum output',400);assert.throws(()=>costs.reserve('tokens','ai','over tokens'));
  await assert.rejects(() => budget.attempt('http','live','forbidden',() => {throw Error('must not dispatch');}));
  const config = fs.readFileSync(path.join(root,'_config.yml'),'utf8');
  for (const item of ['AGENTS.md','CLAUDE.md','README.md','CHANGELOG.md','docs','drafts']) assert.match(config,new RegExp(`^  - ${item.replaceAll('.','\\.')}\\r?$`,'m'));
  const home = fs.readFileSync(path.join(root,'index.html'),'utf8');
  const privacy = fs.readFileSync(path.join(root,'privacy.html'),'utf8');
  assert.match(home,/textContent/); assert.match(privacy,/successful chat request/i);
  assert.match(privacy,/longer|beyond|guaranteed/i);
  for (const file of fs.readdirSync(root).filter(x=>x.endsWith('.html'))) {
    const html = fs.readFileSync(path.join(root,file),'utf8');
    if (!/<html\b/i.test(html)) continue; // Search Console verification token is plain text.
    assert.match(html,/Content-Security-Policy/); assert.doesNotMatch(html,/\bonclick\s*=/i);
  }
  const chat=fs.readFileSync(path.join(chatRoot,'src/index.ts'),'utf8');
  const lead=fs.readFileSync(path.join(leadRoot,'src/index.ts'),'utf8');assert.doesNotMatch(lead,/console\.(log|error|warn)/);
  assert.match(chat,/RETENTION_DAYS = 30/); assert.match(chat,/ctx.waitUntil/); assert.match(chat,/DELETE FROM chat_interactions WHERE expires_at < \?/);
  assert.doesNotMatch(chat,/error\.message|err\.message/); assert.match(chat,/'Cache-Control': 'no-store'/);
  console.log(JSON.stringify({passed:true,staticOnly,leadOnly,currentGoogleVectors:staticOnly||leadOnly?0:78,currentRetiredKeyRejects:staticOnly||leadOnly?0:2,cumulativeHandlerInvocations:budget.used.handler,actualHttpRequests:0,mockedFetchAttempts:budget.used.http,liveAI:0,email:0,spendUSD:0,budget:budget.used,budgetBoundaryDispatches:dispatches,ledger:budget.ledger},null,2));
}
main().catch(e=>{console.error(e);process.exitCode=1;});
