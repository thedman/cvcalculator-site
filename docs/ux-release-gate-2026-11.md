# Focused UX release gate

November 15, 2026. **GO for a controlled release following explicit owner authorization.** No commit, merge, push or deployment was performed. This gate found no new release-blocking defect; it does not certify full accessibility conformance.

| Gate | Result | Evidence |
|---|---|---|
| Accessibility spot-check | PASS using the browser accessibility API | Invoked the FAQ's exposed Expand and Collapse actions: state changed correctly and the answer entered/left the accessible tree. Main navigation exposed named links; activating Plan guides reached its section and exposed CAAT. Both homepage and article email fields were named “Email address (required).” Malformed input exposed the error text, `aria-invalid=true`, and input focus. Chat exposed its named region, conversation and input; opening focused the input, Escape removed the panel and returned focus to the collapsed toggle. |
| Change isolation | PASS | Branch remains `feat/ux-readability-navigation-2026-11`; HEAD is the production baseline `29d2e27ee03780701646ce4ebac2de08200caeca`, with no new commits or merges. Remote main and the separate security branch retain their previously verified revisions. The UX patch changes neither the existing security regression script nor its branch. That regression change is already part of the common production baseline. |
| CAAT and Federal preservation | PASS | CAAT's main article, introductory paragraph and JSON-LD match the baseline after newline normalization; its navigation edits are intentional. Federal Public Service HTML and its complete sitemap entry remain unchanged. CNAME, robots, Pages configuration and the shared store-attribution script remain unchanged. |
| Production-readiness regression | PASS within stated coverage | `node docs/ux-regression.cjs`: 20 HTML documents, 447 internal links, 22 executable inline-script hashes, nine labeled email fields and five mocked signup cases. Financial illustration identities and prescribed-factor products pass; scoped unsupported claims remain absent. Canonicals, store destinations, attribution/form contracts and CSP restrictions are preserved. `node docs/security-closeout-regression.cjs --static-only` and `git diff --check` pass. No live provider calls, submissions, messages or subscriber operations. |
| Responsive evidence | Prior PASS retained; fresh repeat limited | The sprint's 18/18 changed-page checks at 320 CSS pixels, representative desktop checks and doubled-root-text fixtures remain applicable: no site source changed during this gate. A browser extension UI blocked the attempted fresh responsive repeat, so this gate does not claim a new complete viewport run. |

## Accessibility limitations

The browser accessibility API and actual keyboard/focus behavior were exercised, rather than relying solely on source inspection. An additional native-app accessibility connection timed out awaiting access. No spoken NVDA, JAWS or Narrator session was completed. Live-region speech timing, real screen-reader browsing modes and cross-browser/assistive-technology differences remain untested. Browser API exposure is useful evidence but is not a full WCAG conformance determination.

The form's invalid-input action encountered transient stale accessibility references; keyboard targeting through the browser locator completed the check, and the accessibility API subsequently confirmed the exposed error and retained input focus. No valid address was submitted. The temporary preview removed the analytics loader and blocked external connections through an additional local-only policy; production policy/configuration was not changed.

## Release scope and next action

Release only the enumerated UX patch, shared CSS, form-accessibility changes, revised content/sitemap and UX validation documents. Do not stage the three pre-existing unrelated files: `docs/newsletter-gate-a.md`, `docs/newsletter-gate-b-october-2026.md`, or `drafts/ontario-teachers-commuted-value.md`.

Owner authorization is still required before committing, merging or publishing. Re-run the regression check if the patch changes. After an authorized deployment, perform the normal cache-busted production smoke check of navigation, FAQ, form labels, app destinations and CSP; this local gate is not evidence that unpublished changes are already live.
