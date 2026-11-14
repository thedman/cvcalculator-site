# CAAT guide — editorial and local implementation review

Review date: 2026-11-13. Status: local preparation only; owner publication approval outstanding.

## Source verification

All substantive assertions are paraphrased. No administrator examples or marketing narratives were copied.

| Claim | Primary source and verification |
|---|---|
| DBprime earnings/service formula; DBplus contribution-based DB formula and conditional AIW enhancements | CAAT retirement planning guide, page 7: https://www.caatpension.ca/documents/members%28new%29/member-resources/Retirement-planning-guide-en.pdf |
| Mixed-design pension portions and different features | CAAT Continuing your pension, pages 3–5: https://www.caatpension.ca/content/dam/caatwebsite/documentprocessed/members%28new%29/member-resources/Inter-design-transfer-booklet-en.pdf |
| Extension, DBplus under 50, DBprime under 55, valuation at extension end, six-month election | CAAT leaving guidance: https://www.caatpension.ca/members/leaving-your-job ; DBplus handbook pages 16–17: https://www.caatpension.ca/content/dam/caatwebsite/documentprocessed/members%28new%29/member-resources/member-handbook-dbplus-gp-d2-en.pdf |
| DBprime early retirement affects ordinary portability; exactly 20 years included; factor 85 | Plan sections 7.01 and 10.02. Clean PDF printed pages 55, 69–70; blacklined PDF pages labelled 53, 67–69. Section 7.01 includes age 50 with 20 years, age 55, or age plus service 85. The leaving webpage's 'more than 20' wording is not used as the boundary. |
| DBplus age 50 and application of portability provisions | Appendix G sections 7.01 and 10.02; clean PDF printed pages 505 and 509–510; blacklined printed pages 626, 630–631. |
| Six-month window does not override early-pension restrictions; distinct accepting-plan route | Section 10.02(1)(b) and following notwithstanding paragraph. Do not promise eligibility persists through the entire six months. |
| Membership date is distinct from employment date | Plan definitions 2.46–2.47, including exceptions. Article gives general extension explanation and requires CAAT's actual dates, not an automatic personal deadline calculation. |
| Retained income and conditional increases | https://www.caatpension.ca/members/starting-your-deferred-pension . No fixed return, future increase percentage or universal pension reduction asserted. |
| CV definition, benefits surrendered, rate sensitivity, taxable cash and RRSP-room caveat | https://www.fsrao.ca/consumers/pensions/member-guide-you-terminated-employment-what-commuted-value |
| Prescribed transfer amount differs from CV; DB-to-DB tax distinction | https://laws-lois.justice.gc.ca/eng/regulations/C.R.C.,_c._945/section-8517.html ; https://www.canada.ca/en/revenue-agency/services/tax/registered-plans-administrators/newsletters-technical-manual/no-04-1.html |
| Applicable pension jurisdiction, spouse and small-pension differences | https://www.caatpension.ca/members/member-resources/jurisdictional-differences ; leaving guidance also identifies federal spousal consent. No universal provincial unlocking age, threshold or dollar amount asserted. Federal pension jurisdiction is distinct from the Federal Public Service plan. |
| Merger, supplementary and refund components | Plan appendices and CAAT member-resource scope; article asks for identification and does not assert component-specific entitlements or tax treatment. |

Plan sources: https://www.caatpension.ca/about-us/member-policies.html . Authenticated-free live browser inspection resolved the actual PDF links:

- Clean: https://www.caatpension.ca/content/dam/caatwebsite/documentprocessed/members%28new%29/member-policies/member-policies/plan-text/CAAT-Pension-Plan-Text-clean.pdf
- Blacklined: https://www.caatpension.ca/documents/members%28new%29/member-policies/member-policies/plan-text/CAAT-Pension-Plan-Text-blacklined.pdf

Freshness discrepancy: policy page and blacklined PDF state October 30, 2026; web retrieval of clean PDF carries July 1, 2025. Relevant provisions agree in the two retrieved versions. Do not label the clean retrieval as an October 2026 document. The article links the policy landing page for current documents. Older indexed handbook URLs redirected to CAAT's error page and were replaced with links resolved from the live resource page.

## Product compatibility assessment

Read-only inspection of iOS `CVCalculator/Engine/CVEngine.swift` and Android engine searches found general CIA-based modeling, not a documented CAAT-specific implementation. This is not a proof that every CAAT benefit is incompatible, nor validation of any CAAT design. No plan-specific estimate is promoted. App copy explicitly says compatibility has not been established, identifies mixed/merged-benefit limits and points to official CAAT information. No engine or mobile files changed.

## Editorial checklist disposition

Applied `docs/editorial/pension-plan-article-qa-checklist.md` before HTML conversion. Agent editorial review approves conversion within the user's local implementation authorization; this is not owner publication sign-off.

- Source facts, current rule checks, exceptions, tax destinations and date distinctions: reviewed as mapped above.
- Statistics, thresholds, reduction rates and calculation assumptions not needed for this guide: deliberately omitted.
- Neutral tone, non-affiliation, Organization author, original explanations, no personalized recommendation: reviewed.
- Differentiator: two plan designs plus membership-end versus employment-end and election versus valuation timing.
- Primary keyword in H1, introduction topic and FAQ Q1; supporting terms appear naturally. No generic calculator landing page created.
- Canonical pattern retained in substance. Documented variation: introduce plan design before eligibility so readers can identify mixed benefits; place the questions checklist before FAQ; related resources remain in the existing accessible aside after the article.
- Signature-rule quotation requirement waived: user requested original language and previously prohibited copying administrator language. Specific sections are linked; rules paraphrased with conditions.
- Six complete questions comply with the 5–7 FAQ range. FAQ rich-result eligibility is not promised.
- Metadata uses a shortened title; visible H1 preserves owner title. Description target 145–160 characters.
- Educational model scope before store links; no plan-specific calculation guarantee.
- Draft/schema status remains Draft, no publication date. Release must set actual publication metadata after approval.

Maintenance: last technical review 2026-11-13; next review by 2027-05-13 or earlier on CAAT plan/merger/jurisdiction changes, CRA transfer-rule changes, CIA standard changes, or app capability changes.

## Scope preservation

Do not edit the Federal article, existing leaving-employer source page or Federal link experiment. Its observation gate remains independently governed; this task does not inspect or request indexing. Existing unrelated untracked drafts/newsletter records are preserved.

## Local technical and rendered checks

Completed 2026-11-13:

| Check | Result |
|---|---|
| Independent factual review | Separate research reviewer checked final draft against plan 7.01/10.02, Appendix G, CAAT guidance, CRA and 8517. No material blocker. Suggested AIW extension explanation and checklist correction incorporated. No claim that a birthday during the election window automatically ends eligibility. |
| Route ownership | No existing same-slug directory, competing canonical or routing configuration. Prior live attempt at proposed slug reached homepage; existing 404.html redirects missing URLs there. New root HTML follows existing extensionless GitHub Pages convention. Preview uses .html; production extensionless behavior must be confirmed after an authorized release. No routing settings changed. |
| Markup | Python stdlib HTMLParser: balanced nesting, one H1, unique IDs, sequential heading levels. All article local links and fragment targets resolve to existing repository files. |
| Metadata | SEO title 53 characters; description 153 characters; canonical and social URL agree at https://cvcalculator.ca/caat-commuted-value. Index/follow; Organization author. Draft Article has dateModified 2026-11-13 and no datePublished. |
| Structured data | Article, BreadcrumbList and FAQPage JSON parse. All six FAQ question/answer pairs equal visible text. Changed existing-page JSON-LD parses too. |
| Independent implementation review | Separate reviewer confirmed canonical, FAQs, hashes, sitemap and Federal isolation. Its breadcrumb consistency finding was fixed: JSON-LD now matches Home → Pension Plan Guides → CAAT. Final schema/FAQ/CSP checks repeated successfully; visible layout unchanged. |
| Discovery | Sitemap parses with 19 unique URLs including CAAT. OMERS lastmod and Article dateModified updated; homepage lastmod already 2026-11-13. Robots still allows crawling and references sitemap. Homepage tile and contextual OMERS link resolve to new file. |
| CSP | New page retains template restrictions; exact inline GA and JSON-LD SHA-256 hashes verified. OMERS JSON-LD hash refreshed for dateModified change. No relaxed script policy or dependency introduced. |
| Attribution regression | Offline Node VM: six CAAT cases (iOS/Android × extensionless/.html/trailing slash), one cta_clicked per click, caat topic/content metadata and distinct store campaign IDs. All 32 existing page/platform cases match pre-change script output. No store navigation or live GA ingestion assertion. |
| Available regression | `node --check cv-store-cta-attribution.js`; `node docs/security-closeout-regression.cjs --static-only`; `git diff --check`: PASS. Static-only regression made no handler/network/AI/email calls. No build system or build step exists. |
| Rendered desktop | Actual Chrome 1440×1000: readable title, line length, navigation and spacing; scrollWidth 1425 with 1440 viewport (scrollbar), no horizontal overflow. |
| Rendered mobile | Actual Chrome 390×844 and 320×740: scrollWidth 375 and 305 respectively; no horizontal overflow. Narrow CTA buttons stack, measure approximately 168/223px wide and 50px high. FAQ and source/related sections fit. Homepage CAAT tile fits at 320px (273×71px) with visible focus. |
| Keyboard and contrast | Skip link activates main#article; Tab reaches first source link with visible focus outline. Reused palette contrast: body 9.67:1, links 6.42:1, metadata 5.61:1, CTA 7.28:1. Landmark/heading/link-name inspection passed; not a full screen-reader certification. |
| Originality | Article-body 8-word-shingle comparison, excluding common template: maximum existing-article overlap 0.24% (PSPP), then 0.18% (OPTrust). No copied administrator story or numerical example. This lexical check does not establish future ranking outcomes. |
| Cannibalization | CAAT-specific leaving/eligibility intent is distinct from generic calculator pages and existing plan guides. Homepage retains generic calculator ownership. Prior GSC DBplus discovery on homepage is an opportunity, not proof of harmful cannibalization. Reassess query-to-page allocation after publication. |
| Protected files | HEAD content comparison confirms Federal article, leaving-employer experiment source page, CNAME, robots and publishing config unchanged. Existing Federal anchors and sitemap date preserved. |

Screenshots retained outside the publishing repository: desktop, mobile, narrow CTA/FAQ and homepage directory captures.

Browser viewport override reset; owned preview server stopped after review. Initial sandbox-only server could not be reached by Chrome; a loopback-only approved server supplied the actual preview. No hosting/build infrastructure added.

Source-link verification used primary-source web retrieval and live CAAT resource/policy-page link resolution. Plan-document cache/version discrepancy remains documented above; no unsupported entitlement is inferred from it. Official CAAT determination remains necessary for individual cases, not a publication prerequisite for this general guide.

## Publication gate

Not authorized: commit, push, deployment, production publication, indexing requests. Owner review of completed article and evidence is required. Set datePublished, visible publication date and Published status only at an authorized release; preserve the source-review date.

Recommendation: **GO for owner publication review.** No material factual or local implementation blocker identified within the stated scope. Owner approval and release-date metadata remain outstanding; live routing, GA delivery and indexing cannot be certified before an authorized release. The Federal observation gate continues independently and is not reset or closed here.


## Authorized release — November 13, 2026

Owner approved commit, push, publication and CAAT-only indexing after final production verification. Release based on origin/main; unrelated unpublished security-test commit excluded. Explicit file staging excludes unrelated newsletter records and Teachers draft. Publication metadata set consistently to 2026-11-13; final markup, links, canonical, schema, FAQ, CSP, sitemap and protected-file comparisons PASS. No build step exists.

Observation start: 2026-11-13. Day 28 checkpoint: 2026-12-11. Day 90 checkpoint: 2027-02-11. Use settled GSC windows and preserve the independent Federal gate.
