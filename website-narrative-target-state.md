# Website Narrative — Target State

**Project:** cvcalculator.ca
**Aligns to:** CVCalculator iOS 1.5.2 — "Your pension is more than a monthly payment. Understand what it's worth."
**Status:** Target state only. No implementation in this sprint.
**Companion doc:** `website-narrative-alignment-assessment.md`
**Date:** 2026-06-20

---

## Guiding principle

The site already proves the *dynamic* half of the thesis (value changes with rates) well. The target state promotes the *premise* half — **a DB pension is an asset with a present-day value** — to the top of the funnel, adopts the App Store tagline, and strips the few advisory/timing phrases that violate "inform, don't recommend." Everything is **additive and re-leveling**, never a teardown of the SEO surface.

---

## 1. Homepage narrative

**Opening move (today):** "Here is a commuted-value calculator." → leads with the tool.
**Opening move (target):** "Your pension is more than a monthly payment — it's an asset with a value you can know and watch change. Here's how to understand it."

Sequence the homepage as the four-stage funnel:
1. **Premise** — your pension is a financial asset with a present-day value (new; currently assumed).
2. **Dynamic** — that value moves every month as CIA rates move (already strong — keep).
3. **Understanding** — knowing the number and its movement is educational, not a one-time event (already present — keep).
4. **Tool** — CVCalculator is how you see and track it (already strong — keep).

The calculator is the *answer* to the premise, not the headline.

## 2. Hero narrative

- **Tagline line (new):** *Your pension is more than a monthly payment. Understand what it's worth.* — adopted verbatim from 1.5.2 so web and App Store match on first impression.
- **H1 (re-leveled, SEO-guarded):** keep the "commuted value … Canada / DB" keyword cluster intact, but reframe from "calculator for DB plans" toward the value the calculator delivers (e.g., lead with understanding/worth, retain "commuted value of pension … Canada" as the keyword anchor). Exact wording to be drafted in the implementation sprint with the keyword cluster preserved.
- **Sub-copy:** keep the existing strong asset clauses ("monitor one of your largest financial assets," "track how it changes as CIA rates move each month"); demote the "estimate the lump sum" verb from the first clause.
- **Mockup verdict:** replace the recommendation-flavored "CV EXCEEDS PENSION VALUE" with a neutral value-state label.

## 3. Core messaging pillars

1. **Your pension is an asset.** It has a present-day value, often the largest single asset you'll hold.
2. **That value is dynamic.** CIA §3500 rates republish monthly; your value moves between annual statements.
3. **Understanding beats reacting.** Know the number and its range *before* any decision is forced on you.
4. **We inform, we don't advise.** Estimates and education; the recommendation is yours (and your advisor's).
5. **Built on the real standard, privately.** CIA §3500 / CPM2014 / ITA §8517, no referrals, no lead-gen.

## 4. CTA philosophy

- Shift the **verb** from *calculate / run your numbers* to *understand / see what your pension is worth / track how it moves.*
- The download is the means; the value-understanding is the promise.
- Keep urgency contextual where it's factually true (age-55 deadline) but pair it with the asset frame, not bare "calculate before it's too late."
- Preserve all existing GA `data-ga-*` attributes and destinations — **label changes only, no tracking changes.**

## 5. Educational positioning

- Keep the informs-not-advises posture and all disclaimers exactly.
- Frame the Resources hub as "understand your pension as an asset" rather than "decide whether to take the CV."
- Promote the **OMERS/HOOPP "monitoring between statements"** pattern into a site-wide motif (it's the clearest expression of the thesis already written).

## 6. App positioning

- Position the app as the **instrument for understanding and tracking a dynamic asset**, not a one-shot decision calculator.
- Mirror the App Store 1.5.2 subtitle/promo language on the web (pull exact text in implementation).
- Lead feature storytelling with **12-Month History + Sensitivity** (the dynamic-value proof) ahead of one-time outputs.

## 7. Trust positioning

- Keep technical-standard transparency (§3500 / CPM2014 / §8517 stats bar) — it's the credibility spine.
- Keep "estimates only / consult an advisor / official value from your administrator."
- Keep the privacy + no-referral + Organization-author posture (also a name-removal compliance requirement — do not reintroduce any personal name).

---

## Recommended implementation roadmap (next sprint)

Ordered by impact ÷ risk. All changes additive; SEO-critical surfaces protected.

| Phase | Change | Files | Risk |
|-------|--------|-------|------|
| **P0** | Add 1.5.2 tagline to hero; re-level hero sub-copy asset-first; neutralize mockup verdict | index.html | Low |
| **P0** | Remove advisory/timing phrasing ("optimal month to leave," "optimal month," "timing your departure," "timing exposure") | index.html:1149,1260; commuted-value-calculator-canada.html:304; app-walkthrough.html:519 | Low |
| **P1** | Re-level H1 asset-first **with keyword cluster preserved**; verify ranking after deploy | index.html:997 | Medium (SEO) |
| **P1** | Rebalance primary CTA labels (calculate → understand/see your pension's worth); keep all `data-ga-*` | should-i-take:272; what-happens:247; age-55:170; app-walkthrough:536; index final CTA:1389 | Low |
| **P2** | Reframe Resources hub intro + feature card naming ("Accurate CV Calculation" → present-value framing) | index.html:1089,1281 | Low |
| **P2** | Pull exact App Store 1.5.2 subtitle/promo text; mirror on hero + walkthrough | index.html, app-walkthrough.html | Low |
| **P3** | Propagate the "monitoring between statements" motif to remaining article pages | article pages | Low |

**Explicitly out of scope / do not touch:** `<title>` tags, JSON-LD schema, canonical URLs, `sitemap.xml`, `robots.txt`, `CNAME`, GA config/tracking, layout/CSS. Any H1/meta edit must preserve the commuted-value keyword cluster and be re-checked in Search Console post-deploy.

**Success criterion for the implementation sprint:** a first-time visitor understands, above the fold, that their pension is an asset with a knowable, changing value — *before* being asked to download — while every current ranking keyword, schema block, and tracking attribute remains intact.
