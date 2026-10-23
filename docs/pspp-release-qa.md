# PSPP Ontario guide — release handoff

Initial local review completed October 23, 2026. The sections below record the preparation gate; the controlled release addendum records the final release gate.

## Evidence and editorial scope

- `pspp-source-verification.md` records primary sources, document dates, provisions, claim mapping and reconciliation of older RCA wording with the newer termination guide.
- `pspp-editorial-qa.md` records the Markdown editorial gate and documented variations. This is agent review, not human approval.
- New article identifies Ontario PSPP administered by OPB. Ordinary deferred-pension/CV eligibility is distinguished from immediate unreduced pensions, grow-in rights, legacy service, special payments and direct OPSEU transfers.
- Package response dates, later conversion, quote validity, transfer-agreement limits and buyback deadlines are distinct. No universal election window is invented.
- Pension valuation, tax-deferred transfer limits, contribution refunds and RCA benefits are distinct. The app remains an educational estimate.

## Files

Created: `drafts/pspp-ontario-commuted-value.md`, `pspp-ontario-commuted-value.html`, `docs/pspp-source-verification.md`, `docs/pspp-editorial-qa.md`, this handoff.

Modified: homepage directory; leaving-employer and deferred-comparison related links; OPTrust contextual cross-reference; their applicable Article modification dates; sitemap; one metadata entry in the shared CTA attribution script. Existing Ontario Teachers draft preserved. CNAME, robots, dependencies and deployment configuration unchanged.

## Technical checks — passed

- New HTML: balanced nesting, one H1, unique IDs, no skipped heading levels; local link targets and fragment IDs resolve against repository files.
- Title 48 characters; description 157 characters. Extensionless canonical and social URL agree. Index/follow present; robots permits crawling and references sitemap.
- JSON-LD parses: Organization-authored Article, ordered BreadcrumbList, seven FAQ questions and answers exactly matching visible FAQ copy. Draft status and absence of datePublished reflect the unpublished state.
- Sitemap XML parses, contains 17 unique URLs and includes the new canonical. Lastmod updated for the four linked existing pages and new guide.
- Existing changed-page JSON-LD parses. Four new inbound links resolve to the new article.
- Offline Node VM CTA checks: both stores across extensionless, .html and trailing-slash URL forms; exactly one cta_clicked event per simulated click; normalized PSPP article metadata, platform, property, entry point and distinct campaign IDs. No live store clicks or GA delivery assertions.
- Shared-script syntax and final git diff whitespace check pass. Tracked diff reviewed: six existing files, 18 insertions and eight deletions; no unrelated changes.
- No build system is present or required. Checks used existing bundled Python/Node; no dependency added.

## Rendered visual QA — passed

Actual Chrome rendering from a loopback-only local HTTP server, not a source-only review:

| Surface | Viewport | Result |
|---|---|---|
| Guide desktop | 1440 × 1000 | Readable line length, title, hierarchy, spacing and navigation |
| Guide mobile | 390 × 844 | Intro, body/date list and stacked CTA buttons readable |
| Guide narrow mobile | 320 × 740 | Title wraps; CTA, FAQ, sources, related links and footer fit |
| Homepage directory | Desktop and 320px | PSPP tile fits existing grid; keyboard focus remains visible |

DOM measurements show no horizontal overflow: guide scrollWidth 1425/375/305 at viewport widths 1440/390/320; narrow guide has no element extending beyond the viewport. Homepage narrow scrollWidth 305 at width 320. Temporary viewport override reset.

Screenshot evidence is retained outside the repository in the local QA artifacts. No machine-local paths or screenshots are included in the release.

The first sandboxed server was inaccessible to Chrome. An approved loopback-only server resolved local QA access. Homepage smooth scrolling/reveal animations required observing the settled frame; the final directory rendered normally. Accessibility inspection covered semantics, focus styling and responsive readability, not a full assistive-technology audit.

## Limits and pre-existing concerns

- Ontario e-Laws returned 403 during source review. No unsupported statutory day-count is asserted; material article claims are corroborated by OPB documents and other accessible primary authorities. OPB's linked consolidated plan text is expressly unofficial.
- Pre-existing generic age/deferred content contains broader eligibility/timing statements that merit a separate factual audit. The new article does not rely on or link outward to those two pages. Their substantive copy was not changed.
- Live GA ingestion, GitHub Pages routing and post-deployment indexing remain untested because this task authorizes local preparation only. Local static preview used .html paths; production canonicals follow established extensionless conventions.
- No unresolved material claim in the new guide's stated scope. Sources and member-specific entitlements can change; maintenance triggers and next review are recorded in the editorial record.

## Exact recommended release sequence — requires separate authorization

1. Review the article, source matrix and final diff; confirm explicit authorization for publication, commit and push.
2. On the actual release date, add Article datePublished with that date; change creativeWorkStatus from Draft to Published; add the visible publication date while retaining the October 23, 2026 source-review date. Remove/update the local-preparation HTML comment. Do not backdate.
3. If released after October 23, reconcile dateModified and the five relevant sitemap lastmod values to the actual release changes. Recheck source currency if release is delayed or a rule changes.
4. Re-run markup/schema/FAQ/link/CTA checks and git diff --check after metadata changes. Stage only the five created PSPP files and six modified integration files; exclude the pre-existing Ontario Teachers draft and local screenshot files.
5. Commit the reviewed scope and push to origin/main only under the separate explicit authorization. GitHub Pages is the existing publishing path; do not alter CNAME, DNS or Pages settings.
6. After Pages propagation, inspect the new extensionless production URL with a cache-busting query and the four inbound links. Confirm canonical, published schema, sitemap, robots, fonts/layout and store destinations. Verify the expected PSPP cta_clicked parameters in the authorized analytics workflow. Request indexing only if separately authorized.

## Controlled release addendum — October 23, 2026

The user explicitly authorized controlled commit, push and production release after final validation. Toronto-local release date confirmed as October 23, 2026. Final source-matrix/article comparison passes: ordinary under-55 eligibility is conditional, immediate unreduced entitlement is excluded, grow-in and transfer arrangements are qualified, and tax limits are separate from valuation. OPB termination-options and termination-membership guidance were rechecked on release day. No unresolved material factual claim was identified. Inbound anchors explicitly describe plan-specific options; the guide does not rely on the pre-existing generic age/deferred claims.

Publication metadata now includes visible Published October 23, 2026, datePublished/dateModified 2026-10-23 and Published status. The new sitemap lastmod is the same date. Original source dates and existing historical publication dates are preserved.

Approved files (explicit staging only):

- pspp-ontario-commuted-value.html
- drafts/pspp-ontario-commuted-value.md
- docs/pspp-source-verification.md
- docs/pspp-editorial-qa.md
- docs/pspp-release-qa.md
- cv-store-cta-attribution.js
- index.html
- optrust-commuted-value.html
- deferred-pension-vs-commuted-value-canada.html
- what-happens-to-db-pension-when-you-leave-employer-canada.html
- sitemap.xml

The pre-existing Ontario Teachers draft is excluded. No CNAME, DNS, Pages configuration or global Git configuration changes are authorized or needed. No indexing submission is authorized.

Final release validation repeated after metadata changes: balanced HTML, heading order/IDs, internal links/fragments, canonical/social URL, index/follow, 17 unique sitemap URLs, publication-date synchronization, JSON-LD, seven exact FAQ pairs, four discovery links, JavaScript syntax and offline CTA attribution across both stores and three URL forms all PASS. Actual Chrome rendering at 1440, 390 and 320px PASS; no horizontal overflow (1425/375/305px scroll widths). Published date wraps readably on mobile; CTA keyboard focus remains visible. origin/main fetched; local main matched it before release commit.
