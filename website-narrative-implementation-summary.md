# Website Narrative — Implementation Summary

**Project:** cvcalculator.ca
**Sprint:** Narrative Alignment Implementation (executes the roadmap in `website-narrative-target-state.md`)
**Aligns to:** CVCalculator iOS 1.5.2 — *"Your pension is more than a monthly payment. Understand what it's worth."*
**Type:** Narrative optimization — small, high-leverage edits. No redesign, no schema/SEO-surface changes.
**Date:** 2026-06-20

---

## 1. Files changed (7)

| File | Edits | Nature |
|------|-------|--------|
| index.html | 6 | Hero tagline + asset-first H1/sub-copy, neutral mockup label, advisory/timing cleanup, final CTA reframe |
| app-walkthrough.html | 2 | CTA reframe, timing-language cleanup |
| commuted-value-calculator-canada.html | 2 (3 hunks) | "optimal month" + "timing" passages → value-sensitivity framing |
| should-i-take-my-commuted-value.html | 1 | CTA verb calculate/see → understand |
| what-happens-…-leave-employer-canada.html | 1 | CTA verb calculate → understand |
| commuted-value-age-55-deadline-canada.html | 1 | CTA verb calculate → understand |
| hoopp-commuted-value.html | 1 | Departure-timing lever → understanding/monitoring |

No other files touched. `sitemap.xml`, `robots.txt`, `CNAME`, schema blocks, canonical tags, and `cv-lead-capture.js` were not modified.

---

## 2. Narrative changes (premise → dynamic → understanding → tool)

- **Tagline introduced** for the first time, in the homepage hero, verbatim from 1.5.2: *"Your pension is more than a monthly payment. Understand what it's worth."* (styled serif italic kicker above the H1).
- **Hero now leads with the asset premise**, not the tool: H1 reframed to *"Understand your commuted value…"* and sub-copy opens *"Your defined benefit pension is one of your largest financial assets — and its value changes as CIA rates move each month."*
- **Funnel stage 1 ("pension has value") is now explicit** at the top of the homepage, where the assessment found it was previously only assumed. Stages 2–4 (value changes / understanding matters / app explains) were already strong and were left intact.
- **App-store consistency:** download-section and walkthrough CTAs now describe understanding a dynamic asset rather than running a calculation, matching the 1.5.2 product story.

---

## 3. CTA changes

| File | Before | After |
|------|--------|-------|
| index.html (final CTA H2) | "Make the most important financial decision of your career with confidence." | "Understand what your pension is really worth — today and as rates change." |
| app-walkthrough.html | "Ready to run your own numbers?" | "Ready to understand what your pension is worth?" |
| should-i-take | "See your commuted value and break-even age" | "Understand your commuted value and break-even age" |
| what-happens | "Calculate your commuted value before you decide" | "Understand your commuted value before you decide" |
| age-55 | "Calculate your commuted value before the window closes" | "Understand your commuted value before the window closes" |

All `data-ga-*` attributes, hrefs, and destinations on every CTA were preserved — **label text only**. The keyword "commuted value" was retained in every CTA.

---

## 4. Advisory / timing-language removals

| File:area | Before (advisory/timing) | After (understanding/sensitivity) |
|-----------|--------------------------|-----------------------------------|
| index — how-it-works step 3 | "…sensitivity to interest rates, and **the optimal month to leave**." | "…and **how your value responds to changes in interest rates**." |
| index — FAQ "why CV changes" | "…helping you understand **the impact of timing your departure**." | "…helping you understand **how rate changes affect your pension's value**." |
| index — hero mockup label | "✓ **CV EXCEEDS PENSION VALUE**" (recommendation-flavored) | "✓ **COMMUTED VALUE ESTIMATED**" (neutral) |
| calculator-canada — steps | "**Check the optimal month** … which month … produced the highest CV — useful if you have flexibility in your termination date." | "**See how your value has moved** … so you understand its sensitivity to the rate environment." |
| calculator-canada — H2 + body | "Why monthly CIA rates matter **for timing**" / "**waiting can meaningfully increase your lump sum** … identify the **optimal window**." | "Why monthly CIA rates matter **for your pension's value**" / "in a falling rate environment, it generally rises … **see the range your value has traded in and understand its sensitivity**." |
| app-walkthrough — scenarios | "…so you understand your **timing exposure before your termination date is set**." | "…so you understand **how your pension's value responds to changing rate conditions**." |
| hoopp — election window | "**Consider whether timing your departure date matters** … if you have any flexibility on when you formally end employment…" | "**Understand how rate movements affect your value** … helps you understand the range your commuted value has traded in." |

**Reviewed and intentionally retained:** `should-i-take-my-commuted-value.html:232–235` ("Does timing your departure affect the commuted value?"). This passage is balanced *education* — it teaches rate sensitivity with historical fact and already contains the explicit anti-advisory caveat *"This doesn't mean you should obsess over rate timing."* It is already on-thesis (understanding, not recommendation); rewriting it would be unnecessary and would not move the calculator→asset needle. Factual accuracy preserved.

---

## 5. SEO safety findings (Phase 6)

Verified via `git diff` inspection — **no regressions**:

- ✅ No `<title>` tag changes.
- ✅ No `<meta name="description">` / OG / `og:*` changes.
- ✅ No JSON-LD / structured-data (`@type`, `@context`) changes.
- ✅ No `<link rel="canonical">` changes.
- ✅ No `robots` meta or `robots.txt` changes.
- ✅ No `sitemap.xml` changes.
- ✅ No analytics changes — `gtag` config and all `data-ga-*` attributes untouched.
- ✅ Keyword coverage preserved: "commuted value," "pension calculator," "Canadian DB plans," "deferred pension," "LIRA / ITA §8517," "CIA §3500," "CPM2014" all still present. The exact phrase **"Commuted Value of Pension Calculator"** remains in the homepage `<title>` and hero eyebrow; the H1 retains "commuted value … pension calculator … Canadian DB plans."
- ✅ Conversion funnel intact: every CTA href/destination and lead-capture form unchanged.

A targeted grep confirms the removed advisory terms ("optimal month," "optimal window," "timing exposure," "run your own numbers," "CV EXCEEDS," "Calculate your commuted value") no longer appear anywhere in the HTML.

---

## 6. Before / after (representative)

**Homepage hero**

```
Before:
  [eyebrow] Commuted Value of Pension Calculator · Track It Month to Month · Canada
  [h1]      Commuted value of pension calculator for Canadian DB plans.
  [desc]    Estimate the lump sum value of your defined benefit pension — and track…

After:
  [eyebrow]  Commuted Value of Pension Calculator · Track It Month to Month · Canada
  [tagline]  Your pension is more than a monthly payment. Understand what it's worth.
  [h1]       Understand your commuted value — a pension calculator for Canadian DB plans.
  [desc]     Your defined benefit pension is one of your largest financial assets —
             and its value changes as CIA rates move each month…
```

**Final homepage CTA**

```
Before: Make the most important financial decision of your career with confidence.
After:  Understand what your pension is really worth — today and as rates change.
```

---

## 7. Remaining narrative gaps (out of scope this sprint)

1. **`docs/app-store-copy-1.5.2.md` does not exist.** Phase 4 named it as source of truth; it is absent from the repo. This sprint aligned the download sections to the documented 1.5.2 *themes* (tagline + six pillars) rather than mirroring exact listing text. **Recommend:** create `docs/app-store-copy-1.5.2.md` with the live App Store subtitle/promo copy, then do a verbatim-mirror pass so the two storefronts match word-for-word.
2. **Feature card title "Accurate CV Calculation"** (index) is still tool-named. Low priority (P2 in roadmap); left unchanged per minimal-change philosophy. Could become a present-value framing later.
3. **Article `<title>`/H1 tags remain calculator-keyword-led** by design (SEO capture). Intentionally preserved; revisit only with Search Console data.
4. **OMERS/HOOPP "monitoring between statements" motif** could be propagated to the remaining article pages (roadmap P3) — not required for 1.5.2 consistency.

---

## 8. Recommended commit message

```
content: align site narrative with CVCalculator 1.5.2 (pension-as-asset)

Introduce the 1.5.2 tagline and reframe the homepage hero, CTAs, and
timing language from a calculator/one-time-decision frame toward
understanding a dynamic pension asset. Label/copy changes only — no
changes to title tags, meta, schema, canonical, robots, sitemap, or
analytics; all keyword coverage and CTA destinations preserved.

- index: add tagline, asset-first H1/sub-copy, neutral mockup label,
  remove "optimal month to leave"/"timing your departure", reframe final CTA
- CTAs (should-i-take, what-happens, age-55, walkthrough): calculate/see -> understand
- calculator-canada, app-walkthrough, hoopp: timing-advisory -> value sensitivity

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
```

> Note: per repo workflow, do not commit until you've reviewed the diff. I have **not** committed or pushed — changes are staged in the working tree only.
