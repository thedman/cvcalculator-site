# Website Narrative Alignment Assessment

**Project:** cvcalculator.ca
**Trigger:** CVCalculator iOS 1.5.2 release — narrative evolution from "commuted-value calculator" to "your pension is a dynamic financial asset; understand what it's worth."
**Sprint type:** Assessment & strategy only. No production files changed.
**Date:** 2026-06-20

---

## Source-of-truth narrative (restated for grading)

**Core thesis:** A DB pension is a financial asset with a present-day value that changes over time; interest rates drive that value; understanding it is educational; the product informs, it does not recommend.

**Tagline:** *Your pension is more than a monthly payment. Understand what it's worth.*

**Use:** pension value · pension asset value · dynamic value · changing conditions · understanding · education · informed decisions.

**Avoid:** maximize/optimize your pension · best time to leave · take the CV / keep the pension (as instruction) · advisory or recommendation language.

> **Important context for grading:** The site already completed a *prior* positioning sprint that pushed it partway toward this narrative — a "Track It Month to Month" hero eyebrow, "monitor one of your largest financial assets" hero copy, the rate-change subscribe block, and "Monitoring between statements" sections on the OMERS/HOOPP pages. So the site is **not** starting from pure calculator framing. The remaining gap is narrower: the new **thesis line and asset-first framing are not yet the organizing narrative** — the site still leads with the tool and the one-time decision event, with the asset-monitoring story layered second.

---

## Phase 1 — Narrative Alignment Inventory

Legend: 🟢 Aligned · 🟡 Partially Aligned · 🔴 Misaligned

| # | Area | Location | Status | Evidence |
|---|------|----------|--------|----------|
| 1 | **Product tagline** | *site-wide* | 🔴 | The 1.5.2 tagline ("Your pension is more than a monthly payment. Understand what it's worth.") appears **nowhere** on the site. This is the single biggest gap. |
| 2 | Homepage `<title>` | index.html:27 | 🟡 | "Commuted Value of Pension Calculator Canada" — calculator-first (SEO-driven; see Phase 4). |
| 3 | Homepage meta description | index.html:28 | 🟡 | "Estimate your…commuted value…**then track how it moves month to month**." Asset/dynamic clause present; calculator verb leads. |
| 4 | Homepage OG description | index.html:31 | 🟢 | "Know your commuted value and **track how it moves with interest rates between annual pension statements**." Monitoring framing. |
| 5 | Hero eyebrow | index.html:996 | 🟡 | "Commuted Value of Pension Calculator · **Track It Month to Month** · Canada" — monitoring clause good, "Calculator" leads. |
| 6 | Hero H1 | index.html:997 | 🔴 | "Commuted value of pension calculator for Canadian DB plans." — pure tool framing; the most prominent narrative line on the site. (SEO-sensitive — carries primary keyword.) |
| 7 | Hero description | index.html:998–1002 | 🟡 | "**monitor one of your largest financial assets**" + "track how it changes as CIA rates move each month" (asset/dynamic, good) alongside "Estimate the lump sum value" + "compare the commuted value against keeping the deferred pension" (tool/comparison). |
| 8 | Hero phone mockup verdict | index.html:1046 | 🟡 | "✓ CV EXCEEDS PENSION VALUE" — frames CV vs pension as a verdict; borders on a recommendation cue. |
| 9 | Stats bar | index.html:1055–1075 | 🟢 | §3500 / CPM2014 / §8517 / Free — trust & credibility, narrative-neutral. |
| 10 | Features section header | index.html:1083 | 🟢 | "Everything you need to make an **informed decision**." |
| 11 | Features intro | index.html:1084 | 🟢 | "not just your commuted value today, but **how it changes over time**… CIA interest rates… republished every month." Strong dynamic-asset framing. |
| 12 | Feature cards | index.html:1087–1122 | 🟢 | History, Sensitivity, Break-Even all express dynamic value. "Accurate CV Calculation" (1089) is tool-named but factual. |
| 13 | How-it-works | index.html:1132–1150 | 🟡 | "Three steps to clarity" good; **step 3 "the optimal month to leave"** (1149) is timing/advisory language to avoid. |
| 14 | Break-even explainer | index.html:1168 | 🟢 | "At what age does the pension actually win?" — educational decision framing, illustrative-only disclaimer present (1171). |
| 15 | FAQ block | index.html:1209–1271 | 🟢 | "Why does my CV change from month to month?" (1256) strongly on-thesis; answers are informational, not advisory. |
| 16 | Resources section header | index.html:1281 | 🟢 | "Understand your options before you decide." |
| 17 | Subscribe block | index.html:1370–1371 | 🟢 | "Get notified when CIA rates change… rates move monthly and directly affect your commuted value." Dynamic-asset narrative, conversion-aligned. |
| 18 | Final CTA | index.html:1389 | 🟡 | "Make the most important financial decision **of your career**" — one-time-event framing, not ongoing-asset. |
| 19 | Nav CTA | index.html:986 | 🟡 | "Download Free" — conversion-direct, no narrative carrier (acceptable for a nav button). |
| 20 | Disclaimer | index.html:1406 | 🟢 | "estimates only… not financial, legal, or actuarial advice." Correct informs-not-advises posture. |
| 21 | App-walkthrough hero | app-walkthrough.html:439–440 | 🟡 | "See how the app works — before you download." Tool-tour framing; neutral. |
| 22 | Walkthrough video 1 copy | app-walkthrough.html:455 | 🟡 | "why knowing your commuted value matters **before you walk away**" — event framing. |
| 23 | Walkthrough CTA | app-walkthrough.html:536 | 🟡 | "Ready to **run your own numbers**?" — calculator framing. |
| 24 | should-i-take article | should-i-take-my-commuted-value.html:139,151 | 🟢 | H1 decision framing; body names CV as "the **largest single financial asset** they'll ever receive" (151). CTA (272) "See your commuted value and break-even age" is tool-framed. |
| 25 | how-cia-3500 article | how-cia-3500-…:147,157 | 🟢 | "their commuted value is **not a static figure. It changes monthly**." On-thesis. |
| 26 | commuted-value-calculator-canada | …:194,304 | 🟡 | Calculator explainer by design; "Check the **optimal month**" (304) is timing language to soften. |
| 27 | what-happens-…-leave | …:148,247 | 🟡 | CTA "**Calculate your commuted value before you decide**" (247) — tool + event framing. |
| 28 | age-55-deadline article | commuted-value-age-55-…:127,159,170 | 🟡 | Inherently event/deadline; strong asset line (159); CTA "**Calculate your commuted value before the window closes**" (170) — tool + urgency. |
| 29 | OMERS / HOOPP guides | omers-…:286 · hoopp-…:296 | 🟢 | "**Monitoring your … commuted value between statements**" — the strongest on-thesis sections on the site; reusable template. Intros/CTAs remain tool/event framed. |
| 30 | lira-transfer / taxes articles | …:154 · …:146 | 🟢 | Educational, informs-not-advises; narrative-neutral and consistent. |

**Phase 1 summary:** 13 🟢 / 14 🟡 / 3 🔴. The site is **majority partially-aligned** — the dynamic-asset story is present and growing, but calculator-and-event framing still leads at the highest-visibility positions (H1, hero, primary CTAs) and the new tagline/thesis is entirely absent.

---

## Phase 2 — Messaging Gap Inventory (Calculator → Pension-Value)

### 🔴 High priority

| Gap | Where | Current (calculator/event) | Target (asset/value) |
|-----|-------|----------------------------|----------------------|
| **Tagline missing** | index hero | — (absent) | "Your pension is more than a monthly payment. Understand what it's worth." |
| **H1 is tool-first** | index.html:997 | "Commuted value of pension calculator for Canadian DB plans." | Lead with pension-value thesis while preserving the "commuted value … Canada" keyword cluster (see Phase 4 SEO guardrail). |
| **Timing/advisory language** | index.html:1149; calculator-canada:304; index.html:1260; app-walkthrough:519 | "optimal month to leave," "optimal month," "timing your departure," "timing exposure" | "how your value moves with rates," "the range your value has traded in" — describe the dynamic, don't advise on timing. |
| **Tool-framed primary CTAs** | should-i-take:272; what-happens:247; age-55:170; app-walkthrough:536 | "Calculate your CV," "run your own numbers" | "Understand what your pension is worth," "See your pension's value and how it moves." |

### 🟡 Medium priority

| Gap | Where | Note |
|-----|-------|------|
| One-time-event framing | index.html:1389; app-walkthrough:455; recurring "before your termination package arrives" | Reframe from a single career decision toward an asset you track over time. |
| Hero mockup verdict | index.html:1046 | "CV EXCEEDS PENSION VALUE" reads as a recommendation; consider a neutral value-state label. |
| "Accurate CV Calculation" card title | index.html:1089 | Tool-named; could become "Your pension's present value." |

### 🟢 Low priority (defer / leave)

- Meta descriptions and `<title>` tags (calculator-first) — **SEO-sensitive; do not lead changes here** (Phase 4).
- Stats bar, disclaimer, privacy — narrative-neutral, leave as-is.

---

## Phase 3 — Funnel Alignment Assessment

Ideal narrative funnel: **(1) your pension has value → (2) that value changes → (3) understanding it matters → (4) the app helps you understand it.**

| Stage | Present on site? | Evidence / gap |
|-------|------------------|----------------|
| 1. Pension has a present-day value | 🟡 Assumed, not stated | The hero opens with the *tool* (H1, index.html:997), not the *premise*. "Largest financial asset" framing exists in articles (should-i-take:151) but isn't the homepage's opening move. |
| 2. Value changes over time | 🟢 Strong | Features intro (1084), subscribe block (1370–1371), how-cia article (157), OMERS/HOOPP monitoring sections. |
| 3. Understanding matters | 🟢 Present | "informed decision" (1083), "Understand your options" (1281), Resources + walkthrough. |
| 4. App helps explain it | 🟢 Strong | Feature cards, how-it-works, walkthrough videos. |

**Assessment:** The funnel does **not** crudely jump to "Calculate now" — stages 2–4 are well built. The weak link is **stage 1**: the site assumes the visitor already frames their pension as an asset with a number, then sells the tool. The thesis that *earns* the calculator ("your pension is more than a monthly payment") is missing from the top of funnel. Comprehension and trust are well supported (technical-standard transparency, illustrative-only disclaimers, real-user testimonial, no-referral positioning). Conversion support is strong but **conversion-first at the hero** — it leads with Download/See-it-in-action before establishing the asset premise.

---

## Phase 4 — SEO Alignment Assessment (mismatch identification only)

| Signal | Current orientation | Narrative mismatch | Risk if changed |
|--------|---------------------|--------------------|-----------------|
| `<title>` tags | "commuted value calculator" keyword-led across pages | Emphasize the *tool/term* over *pension value/worth* | **High** — these rank for the core query set; do not lead changes here. |
| H1s | Calculator/decision/keyword-led (index.html:997 etc.) | Tool-first vs asset-first | **Medium-High** — H1 carries primary keyword; reframe additively, keep the keyword cluster intact. |
| Meta descriptions | "Estimate…commuted value" lead, dynamic clause second | Calculator verb first | Medium — can be rebalanced without dropping keywords. |
| Structured data | SoftwareApplication + FAQ + Article schema, Organization author | Describes a calculation tool; consistent and correct | **Do not disturb** — schema integrity is an SEO + name-removal compliance asset. |
| Body H2s / OG / FAQ | Already carry dynamic-asset language | Best place to grow the new narrative | Low — additive, safe. |

**Conclusion:** The SEO surface is correctly optimized for *capture* of high-intent commuted-value queries and **should be preserved**. The narrative shift belongs in **additive, lower-risk surfaces** — a tagline line, hero sub-copy, body H2s, OG/social text, CTA labels — **not** in title tags or the H1 keyword core. No SEO changes are recommended in this sprint; this phase only flags where narrative and SEO objectives must be balanced in the implementation sprint.

---

## Phase 5 — App Store Consistency Review (iOS 1.5.2)

> **Caveat:** I cannot read the live App Store listing from this environment. This compares the site against the **1.5.2 themes supplied in the brief**; the implementation sprint should pull the exact App Store subtitle/promo text and mirror it verbatim where possible.

| 1.5.2 theme | Site coverage | Status |
|-------------|---------------|--------|
| Understand pension value | Implied via articles; **not the headline thesis** | 🟡 |
| Dynamic asset | "changes over time" / "month to month" present; word "asset" used in articles, not hero | 🟡 |
| Educational estimates | Disclaimers + "estimates only" + Resources | 🟢 |
| Changing CIA rates | Strong: subscribe block, how-cia article, sensitivity feature | 🟢 |
| Transfer rules | LIRA / ITA §8517 article + feature card + FAQ | 🟢 |
| Informed decisions | "informed decision," fee-only-advisor framing | 🟢 |

**Inconsistencies to resolve:** (a) the **tagline/thesis** is the headline of the app narrative but absent from the site; (b) "dynamic asset" is named in app messaging but only implied on the web. Everything else is consistent. Recommend the homepage hero adopt the App Store tagline as its lead line so the two storefronts match on first impression.

---

## Deliverable cross-reference

1. **Narrative alignment assessment** — Phase 1 table.
2. **Messaging gap inventory** — Phase 2 (High/Medium/Low).
3. **Funnel assessment** — Phase 3.
4. **SEO narrative assessment** — Phase 4.
5. **App Store consistency** — Phase 5.
6. **Target-state narrative** — see `website-narrative-target-state.md`.
7. **Implementation roadmap** — see `website-narrative-target-state.md` (final section).

## What must change vs. stay (executive answer)

- **Must change (minimum set):** add the tagline to the hero; reframe the H1/hero sub-copy asset-first *without dropping the commuted-value keyword cluster*; remove timing/advisory phrasing ("optimal month to leave," "timing your departure"); rebalance primary CTA labels from "calculate" to "understand your pension's value."
- **Should stay unchanged:** all `<title>` tags, structured data, canonical/sitemap/robots, Organization author, the already-on-thesis sections (features intro, subscribe block, OMERS/HOOPP monitoring sections, how-cia article), disclaimers, analytics, and conversion tracking.
- **Net:** This is a **targeted re-leveling**, not a rewrite. The asset narrative already exists in the body of the site; the work is promoting it to the top of the funnel and removing the few advisory/timing phrases that conflict with the "inform, don't recommend" rule.
