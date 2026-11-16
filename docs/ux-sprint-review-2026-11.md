# Focused UX remediation — implementation and QA

Prepared November 15, 2026. Local implementation only; nothing committed, pushed or deployed.

## Isolation and baseline

- Branch: `feat/ux-readability-navigation-2026-11`, created from verified production commit `29d2e27ee03780701646ce4ebac2de08200caeca`.
- `git ls-remote` confirmed remote main at that revision. Live homepage and CAAT HTML matched the baseline after newline normalization.
- CAAT release `89d2e15` is present. GitHub PR [#2](https://github.com/thedman/cvcalculator-site/pull/2), the security regression change, was already merged November 14 UTC; it was not outstanding. The old branch still exists and was not modified or merged by this sprint. The only open PR found was the unrelated Sentinel audit PR #1.
- Original untracked newsletter notes and Teachers' draft remain untouched. No resets, stashes, deletion or unrelated incorporation.
- Federal Public Service HTML, CNAME, robots, Pages configuration and shared store-attribution script remain unchanged. The Federal sitemap entry, canonical and indexing behavior remain unchanged; ordinary existing inbound links were retained.

## Implemented scope

| Assessment finding | Implementation |
|---|---|
| UX01 | Replaced the generic age-55/90-day premise with plan-dependent eligibility, election and quote dates; corrected OMERS federal classification; reconciled older plan-window text and comparison FAQ. Retained the established deadline URL. |
| UX02 | Independently reconciled the investment example, defined withdrawal timing and excluded costs explicitly; distinguished depletion from cumulative payments. Removed unsupported winning ages in related examples and the homepage. |
| Additional numerical contradictions found during reconciliation | Corrected section 8517 factors in the LIRA, tax, OMERS and HOOPP examples; removed the incorrect factor and unsupported decision conclusion from the Sarah illustration. Examples explicitly assume normalized benefits and no other prescribed-amount adjustments. |
| UX03/04 | Reconciled the ten-year boundary to the valuation date and distinguished it from pension commencement. Qualified claims of exact results, near-official accuracy and universal plan support. Historical rate table is labeled as a snapshot. |
| UX06/07/13/14 | Shorter homepage explanation before imagery on mobile; three compact header routes; direct plan-directory anchor; newer breadcrumbs target that anchor; footer learning, walkthrough, terms and contact routes. Both stores remain available, including the two older exceptions. Added a leaving-guide comparison route and short contents lists to HOOPP/Teachers'. |
| UX05/08/09/10/12/16 | Shared static CSS; table-only horizontal scrolling with captions and headers; darker text and buttons; visible focus; persistent required email labels and status/error focus; native details/summary FAQs; chat label/state/log and Escape/focus return; main/skip landmarks; reduced motion and visible-by-default reveal content. |
| UX18, limited | Corrected the broken sitemap-discovery hint. Updated actual material-content review dates in existing Article schema and sitemap entries, without changing URL membership. |

The deadline article's SEO title/description were changed because the old ones repeated its inaccurate premise and artificial urgency. Other existing SEO titles/descriptions and all canonical/robots tags were preserved. FAQ schema text follows the revised visible answers. Executable inline-script CSP hashes were recalculated; policy directives and allowed origins were not broadened.

`cv-ux.css` is a local stylesheet, not a framework, build step or external dependency. Shared `cv-lead-capture.js` retains the endpoint, request fields, campaign context, success acknowledgement condition and `email_signup_completed` event. Changes concern invalid-input prevention, announcements and focus. Chat provider, payload, identifiers, storage and retention disclosure are unchanged. No new analytics events were introduced.

## Primary-source record

Sources checked November 15, 2026. Existing CAAT, PSPP and OPTrust scope/eligibility explanations were retained; their article review dates were not artificially advanced for navigation edits.

| Source | Use |
|---|---|
| [FSRA commuted-value member guide](https://www.fsrao.ca/consumers/pensions/member-guide-you-terminated-employment-what-commuted-value) and [life events](https://www.fsrao.ca/consumers/pensions/events-may-affect-your-pension) | Transfer eligibility depends on applicable rules, early-retirement entitlement and plan terms; not a universal birthday or election window. |
| [OMERS leaving guidance](https://members.omers.com/leaving-your-employer) | NRA 65/60 early-retirement birthdays, one-time ordinary CV option and its expiry, separate small-pension/other routes. |
| [Teachers' pension benefit options](https://www.otpp.com/en-ca/members/life-events/quitting-teaching/pension-benefit-options/) | Ordinary transfer request before immediate-pension eligibility; earlier of month before 50/disability approval; older employment histories differ. |
| [HOOPP leaving guidance](https://hoopp.com/members/employment-change-and-list-of-hoopp-employers/how-to-transfer-your-pension) | Under-55 ordinary LIRA/DC route and distinct conditions for transfer to another DB plan. |
| [CIA current pension standards](https://www.cia-ica.ca/publications/226006e/), effective April 1, 2026 | Paragraph 3540.03 measures interest tiers from valuation; 3520.07 defines that date; 3530.06 provides conditional retirement-age assumptions. No claim that the apps implement every current provision. |
| [Income Tax Regulations section 8517](https://laws-lois.justice.gc.ca/eng/regulations/C.R.C.,_c._945/section-8517.html) | Transfer-age table factors, normalized lifetime benefits, applicable adjustments. Under 50: 9.0; exactly 52: 9.8; 55: 10.4; 60: 11.5. |
| [Federal public service overview](https://www.canada.ca/en/treasury-board-secretariat/services/pension-plan/plan-information/public-service-pension-glance.html) | Distinguish its statute from private-sector federal pension standards, without editing the separate experiment page. |

Read-only product inspection covered the local Swift `Engine/CVEngine.swift`, `Model/Models.swift`, and Android Dart `lib/engine/annuity_engine.dart` and `cv_engine.dart`. These contain user-input scenario engines and historical-standard comments; neither establishes independently verified settlement compatibility for every named plan, CAAT design, or released app version. The website now makes qualified educational-model claims. No mobile source or algorithm changed. Released-build compatibility certification remains outside this sprint.

## Numerical review

- Starting investment assumption: $396,000, 15 years without contributions or withdrawals. `396000 × 1.04^15 = 713173.628...`; `396000 × 1.06^15 = 949037.044...`.
- Post-retirement model: constant return then $36,000 withdrawn at each year-end. Iterative and closed-form calculations agree. At 4%, the 40th withdrawal is fully funded and the 41st is not (around age 101). At 6%, initial growth exceeds withdrawals; no depletion under that fixed-return model.
- The alternative illustration uses `352000 × 1.06^12 = 708293.158...`. Again, a $32,000 year-end withdrawal is below initial 6% growth. No winning pension-election conclusion follows.
- Simple transfer products independently checked: $20,000×9=$180,000; $28,000×9=$252,000; $28,500×9=$256,500; $25,000×9=$225,000; $38,000×9.8=$372,400. The related excesses are recomputed. These products are explicitly conditional examples, not administrator calculations or revised app algorithms.

## Validation

Run `node docs/ux-regression.cjs` from the repository root. Dependency-free and offline:

- 20 HTML documents checked, including the existing 404; 447 internal links resolved with fragments.
- 22 executable inline scripts parse and match their CSP hashes; JSON-LD parses.
- Canonicals/robots retained; titles/descriptions retained except the documented deadline correction; sitemap URL membership retained; separate experiment and hosting/config files unchanged.
- Nine email inputs have explicit labels and descriptions; form contracts and existing store destinations retained.
- Five mocked signup cases cover success, server failure, network failure, blank and malformed email. Success alone emits the existing success event; errors restore interaction and focus. Zero live provider requests.
- Cash-flow identities, age-factor products and shared color ratios checked.
- `node docs/security-closeout-regression.cjs --static-only` also passes. It made zero handler/provider invocations, live requests, AI calls or email sends. The security test itself was not changed.
- `git diff --check` passes.

Browser QA used the loopback-only preview, not a deployment. A separate review pass after implementation checked:

- All 18 changed HTML pages at measured 320 CSS pixels: no whole-page horizontal overflow, one main landmark, and no unnamed inputs in the DOM scan. A custom rendered contrast scan found no failures in its sampled visible text selectors; it skips gradient backgrounds and is not a full axe/WCAG audit.
- Homepage and methodology at 1,280 CSS pixels, plus a local-only fixture with root text doubled to 32px, at 1,280 and 320 widths. Enlarged-text checking caught additional homepage grid/button overflow, which was corrected and retested. This is a doubled-root-text fixture, not a claim of a verified browser-menu zoom percentage.
- Enter reaches the homepage plan group; CAAT remains accessible through it. Native FAQ Enter opens and Space closes; the Chrome accessibility tree reports expanded/collapsed and omits closed answers. Chat opens with input focus; Escape closes and returns focus to the toggle.
- Malformed email exposes the existing error region with an accessible message, `aria-invalid=true` and input focus. Valid-email/network/success testing used mocks, not live submissions.
- The methodology table is about 512px wide inside a roughly 271px scroll region at 320 viewport width, while the document scroll width stays equal to its roughly 303px client width.
- No site-script or CSP error was identified in the sampled consoles. A later log contained an error from the installed browser autofill extension; that extension is outside the site and was not changed.

Screenshots and rendered-check JSON are in the accompanying private assessment artifact directory, named `ux-after-mobile.jpg`, `ux-after-desktop.jpg`, and `ux-rendered-checks.json`.

This was a separate critical self-review, not a claim of participant research or a second human reviewer. No installed screen reader, real touch device, formal axe run or complete WCAG conformance evaluation was performed. Accessibility-tree checks supplement the source and keyboard tests; they do not replace NVDA/VoiceOver testing.

## Deliberate holds

- No URL migration, new hub page, search, CMS, framework, web calculator, account or extra data capture.
- Privacy disclosure text and newsletter consent/offer wording remain intact. Android policy expansion, video caption/transcript review, 404 recovery changes, media analytics semantics and new navigation measurement remain separate work; none is needed to ship the scoped template fixes.
- No national deadline table is guessed for jurisdictions not directly verified. The revised general article directs members to their governing plan and administrator.
- The Federal page is a strict unchanged-file carve-out. This sprint does not certify its pre-existing claims or alter the indexing experiment.
- GO for owner review of the local patch. Publishing is not authorized or performed. A final released-build/product review remains appropriate before making any stronger plan-compatibility claim.
