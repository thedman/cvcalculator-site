# CVCalculator_site — cvcalculator.ca

## What this is

Marketing and SEO site for the CVCalculator iOS and Android apps. Static HTML/CSS. Hosted on GitHub Pages. Domain: `cvcalculator.ca` (controlled by `CNAME`).

**This site is a marketing funnel only.** It contains no calculation logic, no tools, and no interactive app functionality. Its sole purpose is SEO and App Store / Google Play conversion.

Do not propose:
- Adding commuted value calculators or interactive tools to this site
- Moving actuarial math to the web layer
- Treating this site as a feature surface for the app

**Upcoming scope (not yet started):** A web/desktop presence via Android-based deployment is under consideration once the Android apps reach full production. This work has not begun and must not be assumed or scaffolded here.

## Project Identity

### Project

CVCalculator

### Production Website

https://cvcalculator.ca/

### Purpose

Educational website and acquisition funnel for the CVCalculator mobile application.

The website provides educational content and decision support. The mobile applications perform the commuted value calculations.

### Hosting

Production hosting: GitHub Pages.

This project is not hosted on Cloudflare Pages. Do not assume Cloudflare Pages deployment procedures used by other repositories.

### Deployment

Production deployments are published through GitHub Pages.

- Repository: `https://github.com/thedman/cvcalculator-site.git` (verified from `git remote -v`).
- Publishing branch: `main` (verified operationally: pushes to `origin/main` update the live GitHub Pages site).
- Publishing folder: repository root (`/`) (verified by direct static serving of root `index.html`; no build configuration or generated output directory exists in this repository).
- Deployment trigger: push to `origin/main`.
- Expected propagation time: typically a few minutes after push; use a cache-busting query string when verifying live HTML.

The GitHub Pages admin/source setting is not stored in this repository and was not verifiable from repository files. If deployment behavior is unclear, verify the Pages source in GitHub repository settings before diagnosing hosting issues.

### DNS

The custom domain is documented in `CNAME` as `cvcalculator.ca`.

DNS management provider is not documented in this repository.

Current repository-verifiable DNS/hosting signals:

- Apex domain resolves to GitHub Pages IPs (`185.199.108.153` through `185.199.111.153`) when checked during 2026-W24-CVC-DOC-001.
- `www.cvcalculator.ca` resolves to `thedman.github.io`.

### CDN

No Cloudflare CDN or Cloudflare Pages configuration is documented in this repository.

Live response headers checked during 2026-W24-CVC-DOC-001 returned `Server: GitHub.com` and no Cloudflare cache headers.

### Analytics

Visible repository-configured analytics and verification:

- GA4 via Google tag `G-WEBYFNTP7N`.
- Google Search Console verification file: `google1dce2fdb7e50e7c5.html`.

### Chat Interaction Operations

Anonymous chat-helper interaction persistence entered production with commit `b20ad957af6f6b6300ca21a7f2b586bf101f191c`.

- Storage: Cloudflare D1 database `cvcalculator-chat`.
- Recorded fields: anonymous conversation ID, user message, assistant reply, creation and expiry timestamps, and message count.
- Not recorded: email address, IP address, location, or device identifiers.
- Retention: 30 days, represented by the row's `expires_at` timestamp. Expired rows are removed by the Worker's retention cleanup.
- Review path: Cloudflare Dashboard -> D1 -> `cvcalculator-chat` -> Console.

Canonical review query:

```sql
SELECT created_at, user_message, assistant_reply, message_count
FROM chat_interactions
WHERE expires_at > datetime('now')
ORDER BY created_at DESC;
```

Acceptance evidence recorded at launch:

- A QA interaction persisted successfully.
- Its 30-day expiry timestamp was verified.
- The QA record was deleted after testing.
- The database returned to an empty baseline.
- The production homepage and privacy page returned HTTP 200.
- The live chat retention notice and anonymous conversation identifier were verified.

Changes to collected fields, retention behavior, storage providers, or the privacy disclosure are production privacy and data-governance changes. Review them deliberately before deployment and update this section when the operating model changes.

### SEO

The homepage is calculator-first. Educational articles support qualified organic acquisition by helping Canadian defined benefit pension members understand commuted value decisions, LIRA transfer limits, taxes, interest rates, and plan-specific considerations.

The mobile apps perform calculations. The website should not become a web calculator or duplicate app calculation logic.

### Deployment Reminder

> This project is deployed through GitHub Pages.
>
> Do not assume Cloudflare Pages deployment procedures used by other repositories.
>
> Always verify the GitHub Pages publishing source before diagnosing deployment issues.

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
- Author schema: CVCalculator (Organization type) — do not use a personal name anywhere on the site
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
