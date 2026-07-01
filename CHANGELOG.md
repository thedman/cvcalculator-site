# Changelog

## [Monthly CIA Rate Update] — 2026-07-01

### Rates not yet published — no changes to article

Today is July 1, 2026 (Canada Day), a Canadian national statutory holiday. The CIA publishes monthly commuted value interest rates on the first **business** day of each month. Because July 1 is not a business day, the July 2026 i₁/i₂ rates have not been published yet and are expected on July 2, 2026.

Additionally, the CIA website (cia-ica.ca) and all rate aggregator sites (penad.com, actuarialexceladdin.com, lseg.com, pension411.ca, wealthnorth.ca) returned HTTP 403 Forbidden for all automated fetch attempts — the same proxy-block issue as June 1.

**No changes were made to `how-cia-3500-interest-rates-affect-commuted-value.html`.**

**Note:** The June 2026 rates also remain unconfirmed from the June 1 run (same 403 issue). The article's rate history table still ends at February 2026. Both June and July 2026 rates require a manual lookup.

### Action required
- On July 2, manually visit https://www.cia-ica.ca/publications/222176e/ to retrieve both June 2026 and July 2026 i₁/i₂ rates.
- Update the `.example-box` rates block in `how-cia-3500-interest-rates-affect-commuted-value.html` with the July 2026 rates once confirmed.
- Consider updating the rate history table in the article to extend through the most recent available month.
- Bump `dateModified` in the JSON-LD schema and the visible "Updated [Month Year]" in the hero to reflect the update date.

### Check in Google Search Console
- Has the freshness update from the May article dateModified triggered a re-crawl? (Check Coverage report)
- Are impressions growing for CIA rate queries?

## [Homepage Authority Distribution Sprint] - 2026-06-26

### Hypothesis
A curated homepage "Popular Pension Guides" section will distribute internal authority from the homepage to supporting pension education pages and reduce organic traffic concentration over time.

### Evidence
- Homepage currently accounts for approximately 77.5% of organic clicks.
- Supporting pages including LIRA, CIA rates, and OMERS are already receiving impressions and clicks.

### Implementation
- Upgraded the existing homepage education/resources section into "Popular Pension Guides."
- Added guide links using decision-journey ordering: decision, transfer limit, tax consequence, valuation driver, employment event, plan-specific example.
- Added a compact "More Pension Resources" row so calculator methodology, deferred-vs-CV, HOOPP, and age 55 deadline pages remain discoverable without competing with the primary guide set.

### Success metrics
- Homepage click share declines from 77.5% toward 65-70%.
- Non-homepage clicks rise from 51 to 75+.
- LIRA, CIA rates, OMERS, and what-happens pages hold or improve impressions/clicks.
- No material loss in homepage calculator-query rankings.

### Status
Implemented, awaiting 28-day Search Console comparison.

## [New Article: Deferred Pension vs Commuted Value] — 2026-06-22

### Published
- deferred-pension-vs-commuted-value-canada.html: Targets 'deferred pension vs commuted value Canada' — independent comparison with worked numbers
- Added to homepage Resources section and sitemap.xml

### Check in Google Search Console ~28 days from today
- Is the new URL indexed?
- Are impressions appearing for 'deferred pension vs commuted value' queries?
- Are impressions growing across the article cluster overall?

## [New Article: Age 55 Deadline] — 2026-06-15

### Published
- commuted-value-age-55-deadline-canada.html: Targets 'commuted value age 55 deadline Canada' — high intent, near-zero competition
- Added to homepage Resources section and sitemap.xml

### Check in Google Search Console ~28 days from today
- Is the new URL indexed? Use URL Inspection tool for https://cvcalculator.ca/commuted-value-age-55-deadline-canada
- Are impressions appearing for 'commuted value age 55' queries?
- Submit URL for indexing in Search Console after deployment

## [Monthly CIA Rate Update] — 2026-06-01

### Rates not available — no changes to article

The CIA website (cia-ica.ca) returned HTTP 403 Forbidden for all fetch attempts today, and no confirmed June 2026 i₁/i₂ values were found via web search. Rates may not yet be publicly indexed on the first business day, or the site is temporarily blocking automated access.

**No changes were made to `how-cia-3500-interest-rates-affect-commuted-value.html`.** The article continues to display the most recent rates from the prior monthly update.

### Action required
- Manually visit https://www.cia-ica.ca/publications/222176e/ to retrieve the June 2026 i₁ and i₂ rates once accessible.
- Re-run this update once rates are confirmed, inserting or updating the `.example-box` rates block in the article and bumping `dateModified` to 2026-06-01.

### Check in Google Search Console
- Has the freshness update from last month triggered a re-crawl? (Check Coverage report)
- Are impressions growing for CIA rate queries?

## 2026-05-25 — Week 2 quality-check pass

### Verified (no changes needed)

- **LIRA article MTV section**: `commuted-value-lira-transfer-limit-explained.html` has "The Maximum Transfer Value (MTV) — what it means" as its first h2, correctly near the top. ✓
- **Should-I-take article length and content**: `should-i-take-my-commuted-value.html` is marked 10 min read (~2000+ words), contains a full worked example (Sarah, age 48 scenario) and a two-column decision checklist. ✓
- **Related-section cross-links**: All six articles have ≥3 links in their related footer section (LIRA: 4, should-I-take: 4, CIA rates: 4, what-happens: 3, CV calculator: 4, index: 5 article cards). ✓
- **Article schema author type**: All article pages use `"author":{"@type":"Organization","name":"CVCalculator"}`. No personal-name author is used in any Article schema. ✓
- **Sitemap lastmod dates**: All seven URLs in `sitemap.xml` have lastmod ≥ 2026-05-01 (all set to 2026-05-22). ✓

### Fixed — inline cross-linking gaps

Three article pages had no inline body links to other site articles (links only existed in the footer related section). Added the following targeted inline links:

**`commuted-value-lira-transfer-limit-explained.html`** (2 links added)
- "take the commuted value" in the "Why your commuted value gets split" section → `/should-i-take-my-commuted-value`
- "commuted value calculation" in the "How CVCalculator handles the split" section → `/commuted-value-calculator-canada`

**`what-happens-to-db-pension-when-you-leave-employer-canada.html`** (3 links added)
- "CIA §3500 actuarial standard" in the commuted value option card → `/how-cia-3500-interest-rates-affect-commuted-value`
- "Income Tax Act Section 8517 transfer limit" in the LIRA split section → `/commuted-value-lira-transfer-limit-explained`
- Added sentence linking "full CV decision guide" at end of "Should you take the CV or defer?" section → `/should-i-take-my-commuted-value`

**`commuted-value-calculator-canada.html`** (3 links added)
- "Canadian Institute of Actuaries (CIA) under standard §3500" → `/how-cia-3500-interest-rates-affect-commuted-value`
- "leave a DB pension" in the CV vs. deferred pension section → `/what-happens-to-db-pension-when-you-leave-employer-canada`
- "decision guide" in the bottom callout → `/should-i-take-my-commuted-value`

The CIA rates article (`how-cia-3500-interest-rates-affect-commuted-value.html`) and should-I-take article already had inline cross-links in their body text — no changes needed there.
