# CVCalculator_site — cvcalculator.ca

## What this is

Marketing and SEO site for the CVCalculator iOS and Android apps. Static HTML/CSS. Hosted on GitHub Pages. Domain: `cvcalculator.ca` (controlled by `CNAME`).

**This site is a marketing funnel only.** It contains no calculation logic, no tools, and no interactive app functionality. Its sole purpose is SEO and App Store / Google Play conversion.

Do not propose:
- Adding commuted value calculators or interactive tools to this site
- Moving actuarial math to the web layer
- Treating this site as a feature surface for the app

**Upcoming scope (not yet started):** A web/desktop presence via Android-based deployment is under consideration once the Android apps reach full production. This work has not begun and must not be assumed or scaffolded here.

## Companion apps

- iOS app: `CVCalculator` repo — App Store ID 6759869222
- Android app: `CVCalculator_Android` repo — Google Play

## Tech constraints

- Static HTML/CSS only — no build step, no bundler, no JS frameworks
- Do not add JavaScript dependencies without explicit instruction
- GA4 is the only approved third-party script (ID: `G-WEBYFNTP7N`)

## SEO requirements

Every page must have:
- A canonical URL (`<link rel="canonical">`)
- Structured data (Article or WebPage schema with `dateModified`)
- An entry in `sitemap.xml`
- Coverage in `robots.txt`

`sitemap.xml` and `robots.txt` must stay in sync whenever pages are added or removed. `CNAME` controls the custom domain — do not modify it.

## Content

- Canadian personal finance — tone is informational, not promotional
- Never make specific tax or financial advice claims — keep language general and disclaimer-aware
- Author schema: David McCrory (Person type)
- CIA interest rates appear in some pages — note `dateModified` when rates are updated

## Pages (as of May 2026)

- `index.html` — homepage
- `app-walkthrough.html` — educational walkthrough with embedded videos
- `commuted-value-calculator-canada.html`
- `should-i-take-my-commuted-value.html`
- `commuted-value-lira-transfer-limit-explained.html`
- `commuted-value-taxes-canada.html`
- `how-cia-3500-interest-rates-affect-commuted-value.html`

Each article page should have ≥3 related links in its footer section.

## Edit style

- Surgical only — do not reformat or reorganize untouched markup
- Preserve all meta tags, canonical URLs, and structured data
- Warn if a proposed change would affect SEO signals (canonical, noindex, sitemap entries, schema markup)
- No filler. Lead with the implementation.
