# Pension-Plan Article — Editorial QA Checklist

**Purpose:** This is the required editorial quality gate for **every pension-plan-specific commuted value guide** (OMERS, HOOPP, PSPP, LAPP, OPTrust, UPP, Federal Public Service, and others) **before** HTML implementation.

**How to use:** Copy this checklist into the review for each new article. Every box must be checked, or an explicit waiver noted in the sign-off, before the markdown draft is approved for HTML conversion. The reference implementation is `drafts/ontario-teachers-commuted-value.md`.

> Scope note: passing this checklist approves the **markdown draft only**. HTML conversion, structured data, and sitemap updates are a separate, later step and have their own line items under "Implementation Readiness."

---

## Source Validation

- [ ] **Public facts verified** — every plan-specific claim traces to a public, authoritative source (the plan's own website, CRA, or CIA).
- [ ] **No invented statistics** — no membership counts, asset sizes, or figures stated unless sourced; prefer omission over an unverifiable number.
- [ ] **Current rules checked against official plan sources** — eligibility, age thresholds, indexation, and transfer rules confirmed against the live plan site at review time (not from memory or training data).
- [ ] **Signature rule quoted from source** — the plan's defining eligibility rule (e.g. an age cutoff) uses the plan's own wording, with any conditions/exceptions noted; certainty is not overstated.
- [ ] **Time-sensitive information identified** — rates, indexation percentages, dollar thresholds, and "as of [year]" facts are flagged so they can be reviewed on a refresh cycle.
- [ ] **External references reviewed** — every cited reference resolves, is authoritative, and actually supports the claim it backs; no orphaned references (cited but unused).

## Technical Accuracy

- [ ] **Plan-specific rules correctly described** — eligibility, thresholds, transfer agreements, indexation, and refund/small-pension rules are accurate for *this* plan and not borrowed from another plan's guide.
- [ ] **Generic pension concepts accurate** — commuted value, present value, CIA §3500, mortality assumptions, and the inverse rate relationship are correct.
- [ ] **Tax and LIRA explanations consistent with existing CVCalculator guidance** — ITA §8517 transfer limit, taxable excess, PAR, and LIRA/LIF treatment match the site's LIRA and tax articles.
- [ ] **No legal or financial advice** — the article informs and explains; it never recommends a course of action or tells the reader what they should do.
- [ ] **Member-specific situations clearly distinguished** — where outcomes depend on individual circumstances, that is stated and the reader is pointed to the administrator/advisor (without over-repeating).

## Editorial Quality

- [ ] **Neutral educational tone** — informational, not promotional or sensational; no urgency manufacturing.
- [ ] **No implied affiliation** — the article never reads as if it represents or is endorsed by the plan; third-party framing ("the plan states", "according to [plan]") is used for plan claims.
- [ ] **No personal author voice** — no "I", no individual author, no personal anecdotes or former-employment references; Organization voice only.
- [ ] **Minimal disclaimer repetition** — one intro educational + non-affiliation disclaimer, and one prominent "confirm with the administrator" reminder where eligibility becomes member-specific; redundant repeats removed. Authority over defensiveness.
- [ ] **Clear explanations for non-experts** — actuarial and tax concepts are explained in plain language; jargon is defined on first use.
- [ ] **Reading flow reviewed** — heading hierarchy is logical, sections progress naturally, and the draft has been read end-to-end for coherence.

## SEO

- [ ] **Primary keyword naturally used** — the plan's primary commuted-value keyword appears in the H1, intro, and FAQ Q1 without stuffing.
- [ ] **Supporting keywords naturally included** — secondary/transfer/LIRA/tax variants appear where they read naturally.
- [ ] **Heading hierarchy correct** — single H1, logical H2s; matches the reference template section order.
- [ ] **Internal links validated** — every internal link points to a real, live page; anchor text matches destination intent and is not misleading (esp. age-threshold cross-links to plans with different cutoffs).
- [ ] **External links appropriate** — authoritative, relevant, `rel="noopener"` planned, and not presented in a way that implies affiliation.
- [ ] **FAQ concise and schema-ready** — 5–7 Q/As, plain text (no embedded links/HTML), each answer concise enough for FAQPage rich results; primary keyword in Q1.
- [ ] **Meta title and description reviewed** — title under 60 characters, description 145–160 characters, both carry the primary keyword and read naturally.

## Product Positioning

- [ ] **Educational before promotional** — the value to the reader comes first; the app is introduced only after the education is delivered.
- [ ] **App presented as an estimation tool** — CVCalculator is framed as a way to produce a directional estimate for understanding, never as a replacement for the plan's official calculation or professional advice.
- [ ] **No exaggerated claims** — no guarantees of accuracy, savings, or outcomes.
- [ ] **CTA consistent with current CVCalculator messaging** — uses the "understand your pension value" positioning (not "calculate"-led, not pushy), consistent with the site's current narrative.

## Implementation Readiness

- [ ] **Markdown approved** — this checklist passed and the draft is editorially signed off.
- [ ] **HTML conversion approved** — conversion to the production page template is authorized.
- [ ] **Images (if any) approved** — any imagery has alt text, correct dimensions, and licensing cleared.
- [ ] **Structured data reviewed** — Article + FAQPage (+ BreadcrumbList) JSON-LD planned, with Organization author (never a personal name) and a `dateModified`.
- [ ] **Sitemap update planned** — new URL slated for `sitemap.xml`, kept in sync with `robots.txt`; canonical URL defined.
- [ ] **Ready for publication** — all of the above complete; deployment can proceed per the GitHub Pages workflow.

## Knowledge Freshness

Purpose: prevent technically accurate articles from becoming gradually outdated.

- [ ] **Time-sensitive rules identified** — anything that can change (rates, thresholds, indexation, age rules) is flagged in the draft.
- [ ] **Official plan references reviewed against current public sources** — re-checked against the live plan site at review time, not from memory or a prior draft.
- [ ] **Dates reviewed for continued accuracy** — "as of [year]", effective dates, and any year references still hold.
- [ ] **Age thresholds reviewed** — eligibility/transfer/retirement ages confirmed current for this plan.
- [ ] **CRA limits reviewed where applicable** — ITA §8517 transfer factors and related limits checked.
- [ ] **YMPE references reviewed where applicable** — Year's Maximum Pensionable Earnings figures/thresholds current.
- [ ] **Pension-plan-specific thresholds reviewed** — small-pension, excess-contribution, and similar plan thresholds current.
- [ ] **Statistics intentionally omitted OR verified with current official sources** — no figure appears unless sourced now; otherwise omitted on purpose.
- [ ] **Future review date assigned** — a concrete next-review date is recorded in the sign-off / Content Maintenance block.

## Canonical Article Pattern

The default editorial architecture for every pension-plan guide. Follow this order unless there is a compelling, documented reason to deviate.

1. Introduction
2. What is a commuted value?
3. Can members elect a commuted value?
4. Plan-specific eligibility rules
5. How commuted values are estimated
6. Why interest rates matter
7. Tax and LIRA considerations
8. Questions members should consider
9. Common misconceptions
10. Estimate before making decisions
11. Related educational resources
12. FAQ

- [ ] **Structure follows the canonical pattern** — sections present and in order; any deviation is justified in the revision notes.

## Plan-Specific Differentiator

Every pension-plan article must answer one question clearly: **"What makes this plan different from every other plan?"**

Look for the genuine differentiator(s), for example:

- eligibility timing (e.g. an earlier-than-usual transfer cutoff)
- retirement rules (e.g. factor formulas, unreduced/reduced ages)
- transfer options (e.g. reciprocal/interprovincial agreements)
- indexing structure (e.g. tiered or conditional inflation protection)
- unique administrative processes

- [ ] **Differentiator clearly identified and explained** — the article makes plain what is distinctive about this plan.
- [ ] **Not a renamed generic article** — the page would not read identically if the plan name were swapped out; do not publish a generic commuted value article with a new title.

## Editorial Principles

Permanent principles for every guide:

- [ ] **Explain before warning** — lead with understanding; cautions come after the explanation, not instead of it.
- [ ] **Educate before promoting** — deliver the education first; introduce the app only afterward.
- [ ] **Quote official wording when a plan-specific rule is central** — use the plan's own language for the defining rule, with conditions noted.
- [ ] **Prefer removing uncertain facts over weakening the article with excessive disclaimers** — cut what can't be sourced rather than hedging the whole page.
- [ ] **Use plan-specific facts only where supported by official public sources** — no inferred or assumed plan rules.
- [ ] **Demonstrate expertise through clarity rather than author identity** — depth and precision, never a personal byline.
- [ ] **Prefer timeless educational content over news-style content** — write for durability, not for the moment.

## Content Maintenance

Track the review lifecycle for each published article.

| Field | Entry |
|-------|-------|
| **Last technical review** | _(YYYY-MM-DD)_ |
| **Next scheduled review** | _(YYYY-MM-DD — default: within 12 months)_ |
| **Trigger events for early review** | _(see list below)_ |

Trigger events that require an early review regardless of the scheduled date:

- CRA rule changes (e.g. ITA §8517 transfer-limit changes)
- CIA methodology changes (e.g. updates to the §3500 commuted value standard or mortality tables)
- Pension-plan rule changes (eligibility, indexation, transfer agreements, thresholds)
- Major legislative updates (provincial or federal pension/tax legislation)

- [ ] **Maintenance fields completed** — last review, next review, and trigger events recorded.

---

## Sign-off

| Field | Entry |
|-------|-------|
| **Article** | _(slug / title)_ |
| **Reviewed by** | _(name or role — not published anywhere on the site)_ |
| **Review date** | _(YYYY-MM-DD)_ |
| **Revision notes** | _(summary of changes requested / made during review)_ |
| **Approval status** | ☐ Approved · ☐ Approved with conditions · ☐ Changes required · ☐ Rejected |

> Sign-off is an internal editorial record only. Reviewer names recorded here must **never** appear on the public site or in any page's author schema — site author is always the CVCalculator Organization.
