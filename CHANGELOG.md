# Changelog

## 2026-05-25 — Week 2 quality-check pass

### Verified (no changes needed)

- **LIRA article MTV section**: `commuted-value-lira-transfer-limit-explained.html` has "The Maximum Transfer Value (MTV) — what it means" as its first h2, correctly near the top. ✓
- **Should-I-take article length and content**: `should-i-take-my-commuted-value.html` is marked 10 min read (~2000+ words), contains a full worked example (Sarah, age 48 scenario) and a two-column decision checklist. ✓
- **Related-section cross-links**: All six articles have ≥3 links in their related footer section (LIRA: 4, should-I-take: 4, CIA rates: 4, what-happens: 3, CV calculator: 4, index: 5 article cards). ✓
- **Article schema author type**: All five article pages use `"author":{"@type":"Person","name":"David McCrory"}`. No Organization author found in any Article schema. ✓
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
