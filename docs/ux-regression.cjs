// Dependency-free, offline UX regression checks. No live provider calls.
// Run: node docs/ux-regression.cjs
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const {execFileSync} = require('node:child_process');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const baseline = '29d2e27ee03780701646ce4ebac2de08200caeca';
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const before = f => execFileSync('git', ['show', `${baseline}:${f}`], {cwd:root, encoding:'utf8'});
const normalize = s => s.replace(/\r\n/g, '\n');
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1],m[2]]));
const htmlFiles = fs.readdirSync(root).filter(f => f.endsWith('.html') && !f.startsWith('google'));
let links = 0, scripts = 0, forms = 0;

// Preserve the separate experiment, publishing configuration, privacy text and attribution.
for (const f of ['federal-public-service-pension-transfer-value.html','CNAME','robots.txt','_config.yml','cv-store-cta-attribution.js']) {
  assert.equal(normalize(read(f)), normalize(before(f)), `${f} must remain unchanged`);
}
const privacyBody = s => s.slice(s.indexOf('<h1>Privacy Policy'), s.indexOf('<footer>')).replace(/<\/main>\s*$/, '').trim();
assert.equal(privacyBody(read('privacy.html')),privacyBody(before('privacy.html')));
for (const f of htmlFiles) {
  const s = read(f), old = before(f);
  const storeUrls = text => new Set([...text.matchAll(/href="(https:\/\/(?:apps\.apple\.com|play\.google\.com)[^"]+)"/g)].map(m=>m[1]));
  for (const url of storeUrls(old)) assert.ok(storeUrls(s).has(url),`${f}: existing store destination`);
  const tag = (text, re) => text.match(re)?.[0];
  assert.equal(tag(s, /<link rel="canonical"[^>]*>/), tag(old, /<link rel="canonical"[^>]*>/),`${f}: canonical`);
  assert.equal(tag(s, /<meta name="robots"[^>]*>/), tag(old, /<meta name="robots"[^>]*>/),`${f}: robots`);
  if (f !== 'commuted-value-age-55-deadline-canada.html') {
    assert.equal(tag(s, /<title>.*?<\/title>/),tag(old, /<title>.*?<\/title>/),`${f}: title`);
    assert.equal(tag(s, /<meta name="description"[^>]*>/),tag(old, /<meta name="description"[^>]*>/),`${f}: description`);
  }
  const csp = attrs(s.match(/<meta http-equiv="Content-Security-Policy"[^>]*>/)[0]).content;
  const oldCsp = attrs(old.match(/<meta http-equiv="Content-Security-Policy"[^>]*>/)[0]).content;
  const withoutHashes = v => v.replace(/ 'sha256-[^']+'/g,'');
  assert.equal(withoutHashes(csp),withoutHashes(oldCsp),`${f}: CSP directives`);
  for (const m of s.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (attrs(m[1]).src) continue;
    if (attrs(m[1]).type === 'application/ld+json') { JSON.parse(m[2]); continue; }
    scripts++;
    const hash = crypto.createHash('sha256').update(normalize(m[2])).digest('base64');
    assert.ok(csp.includes(`'sha256-${hash}'`),`${f}: stale executable-script CSP hash`);
    new vm.Script(m[2],{filename:f});
  }
  assert.doesNotMatch(s,/\bonclick\s*=/i);
  if (!['404.html','federal-public-service-pension-transfer-value.html'].includes(f)) {
    assert.equal((s.match(/<main\b/g)||[]).length,1,`${f}: main landmark`);
    assert.equal((s.match(/<\/main>/g)||[]).length,1,`${f}: main close`);
    assert.match(s, /Skip to (?:content|article)/);
    assert.match(s,/href="\/#plan-guides"/);
    assert.match(s,/href="\/cv-ux.css"/);
  }
  const oldForms = [...old.matchAll(/<form\b[^>]*data-lead-capture[^>]*>/g)].map(m => attrs(m[0]));
  const newForms = [...s.matchAll(/<form\b[^>]*data-lead-capture[^>]*>/g)].map(m => attrs(m[0]));
  assert.equal(newForms.length,oldForms.length);
  for(let i=0;i<newForms.length;i++) for(const [key,value] of Object.entries(oldForms[i])) {
    assert.equal(newForms[i][key],value,`${f}: form contract ${key}`);
  }
  for (const m of s.matchAll(/<input\b[^>]*type="email"[^>]*>/g)) {
    forms++; const a=attrs(m[0]);
    assert.ok(a.id && s.includes(`for="${a.id}"`),`${f}: explicit email label`);
    assert.ok(a['aria-describedby'],`${f}: field instructions/errors`);
  }
  for (const m of s.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const u=new URL(m[1],`https://cvcalculator.ca/${f==='index.html'?'':f.replace(/\.html$/,'')}`);
    if(u.hostname!=='cvcalculator.ca') continue;
    links++;
    const local=u.pathname==='/'?'index.html':decodeURIComponent(u.pathname.slice(1));
    const file=fs.existsSync(path.join(root,local))?local:local+'.html';
    assert.ok(fs.existsSync(path.join(root,file)),`${f}: missing target ${u.pathname}`);
    if(u.hash) assert.ok(read(file).includes(`id="${decodeURIComponent(u.hash.slice(1))}"`),`${f}: fragment ${u.hash}`);
  }
}
const sitemapLocations = s => [...s.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
assert.deepEqual(sitemapLocations(read('sitemap.xml')),sitemapLocations(before('sitemap.xml')));
const home=read('index.html');
assert.equal((home.match(/<details class="faq-item/g)||[]).length,7);
assert.doesNotMatch(home,/toggleFAQ|data-cv-action="faq"/);
assert.match(home,/aria-controls="cv-chat-window" aria-expanded="false"/);
assert.match(home,/role="log" aria-live="polite"/);
assert.match(home,/e.key === 'Escape'/);
assert.match(read('cv-ux.css'),/\.hero-visual \{ order: 0 !important;/);
assert.ok(home.indexOf('id="plan-guides"')<home.indexOf('<!-- EMAIL UPDATES -->'));
for(const plan of ['caat','pspp-ontario','optrust','omers','ontario-teachers','hoopp']) assert.ok(home.includes(`href="/${plan}-commuted-value"`));

// Independent cash-flow identities: closed form and iterative model must agree.
const principal=396000, withdrawal=36000, years=15;
const retirement4=principal*1.04**years, retirement6=principal*1.06**years;
assert.equal(Math.round(retirement4),713174); assert.equal(Math.round(retirement6),949037);
const after=(b,r,n)=>b*(1+r)**n-withdrawal*((1+r)**n-1)/r;
let b=retirement4;
for(let n=1;n<=41;n++) {b=b*1.04-withdrawal;assert.ok(Math.abs(b-after(retirement4,.04,n))<0.001);}
assert.ok(after(retirement4,.04,40)>0 && after(retirement4,.04,41)<0);
assert.ok(retirement6*.06>withdrawal);
assert.equal(Math.round(352000*1.06**12),708293);
for (const [pension,factor,expected] of [[20000,9,180000],[28000,9,252000],[28500,9,256500],[25000,9,225000],[38000,9.8,372400]]) assert.equal(Math.round(pension*factor),expected);
const comparison=read('deferred-pension-vs-commuted-value-canada.html');
for(const n of ['713,174','949,037','41 years','age 101']) assert.ok(comparison.includes(n));
assert.doesNotMatch(comparison,/age 87|age 82|age 80â€“82|typically 2 years|binary choice/);
assert.doesNotMatch(read('commuted-value-age-55-deadline-canada.html'),/Federal plans \(OMERS|You typically have 90 days|no exceptions for missed deadlines/);
assert.doesNotMatch(read('how-cia-3500-interest-rates-affect-commuted-value.html'),/first 10 years after your <strong>earliest unreduced/);
for(const f of htmlFiles.filter(f=>f!=='federal-public-service-pension-transfer-value.html')) {
  assert.doesNotMatch(read(f),/implements this standard exactly|will produce results very close|CVCalculator supports any Canadian|exact CV results|Exact CV and full analysis/);
}

// Color ratios for shared text, button and focus tokens (not an axe substitute).
function luminance(h) {return [0,2,4].map(i=>parseInt(h.slice(i,i+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);}
function ratio(a,b) {let x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);}
for(const bg of ['f5f0e8','ede8df','e4ddd2','d9d0c3']) assert.ok(ratio('475469',bg)>=4.5);
assert.ok(ratio('ffffff','6b5320')>=4.5);
assert.ok(ratio('1e3a5f','f5f0e8')>=3);

async function testForm(outcome, value='synthetic@example.invalid', valid=true) {
  let handler, requests=[], events=[],focused='';
  const fields={};
  const email={value,validity:{valid},setAttribute:(k,v)=>fields[k]=v,removeAttribute:k=>delete fields[k],focus:()=>focused='email',addEventListener:()=>{}};
  const button={disabled:false};
  const success={style:{},focus:()=>focused='success'};
  const error={style:{},textContent:''};
  const data={'data-success-target':'success','data-error-target':'error','data-cta-location':'fixture','data-page-type':'article','data-cta-id':'fixture','data-entry-point':'rate_updates_section'};
  const form={style:{},getAttribute:k=>data[k],querySelector:q=>q.includes('email')?email:button,addEventListener:(type,f)=>handler=f};
  const document={readyState:'complete',getElementById:id=>({success,error})[id],querySelectorAll:()=>[form]};
  const window={location:{search:'?utm_source=fixture',pathname:'/fixture'},gtag:(...args)=>events.push(args)};
  const fetch=async(url,init)=>{requests.push({url,payload:JSON.parse(init.body)});if(outcome==='network')throw Error('fixture');return {ok:outcome==='success',json:async()=>({success:outcome==='success'})};};
  vm.runInNewContext(read('cv-lead-capture.js'),{document,window,fetch,URLSearchParams});
  handler({preventDefault(){}});await new Promise(resolve=>setImmediate(resolve));
  if(!value||!valid) {assert.equal(requests.length,0);assert.equal(fields['aria-invalid'],'true');assert.equal(focused,'email');}
  else if(outcome==='success') {
    assert.equal(requests.length,1);assert.equal(requests[0].url,'https://shared-lead-registry-worker.dmccrory.workers.dev/lead');
    assert.deepEqual(requests[0].payload,{email:value,source_site:'cvcalculator.ca',source_page:'/fixture',cta_location:'fixture',product_interest:'cvcalculator',utm_source:'fixture'});
    assert.equal(form.style.display,'none');assert.equal(focused,'success');assert.equal(events[0][1],'email_signup_completed');
  } else {assert.equal(events.length,0);assert.equal(button.disabled,false);assert.equal(focused,'email');assert.ok(error.textContent);}
}
Promise.all([testForm('success'),testForm('error'),testForm('network'),testForm('success','',false),testForm('success','bad',false)]).then(()=>console.log(JSON.stringify({passed:true,htmlPages:htmlFiles.length,internalLinks:links,executableScripts:scripts,emailFields:forms,offlineFormCases:5,liveRequests:0}))).catch(e=>{console.error(e);process.exitCode=1;});
