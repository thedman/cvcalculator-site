# CVCalculator Site Agent Guide

## Scope

This repo is the static marketing and SEO site for `cvcalculator.ca`. It supports App Store and Google Play conversion for the CVCalculator mobile apps.

It is not the product. It contains no calculation engine, monetization logic, subscription logic, user accounts, backend workflows, or app functionality.

## Source Of Truth

- Repo context: `CLAUDE.md`.
- Site structure and current pages: `README.md`, root HTML files.
- Custom domain: `CNAME`.
- Mobile products: `CVCalculator` and `CVCalculator_Android`.

## Files That Matter

- Root `.html` pages.
- `sitemap.xml`, `robots.txt`.
- `CNAME`.
- App/video/image assets referenced by pages.
- `privacy.html`, legal/disclaimer copy.

## Website Rules

- Static HTML/CSS only. No build step, bundler, framework, backend, or JavaScript dependency unless explicitly requested.
- Every indexable page needs a canonical URL, structured data, sitemap entry, and appropriate robots coverage.
- Content is Canadian personal finance information, not individualized financial, tax, legal, or actuarial advice.
- Preserve author/person schema and existing SEO metadata unless the task is specifically SEO metadata work.

## Product Boundaries

Do not add commuted value calculators, interactive tools, paywalls, subscriptions, accounts, data capture funnels, or app workflows to the site.

Calculation logic, subscriptions, and user-facing workflows live in `CVCalculator` and `CVCalculator_Android`.

## Validation

No build step is expected. Validate by opening changed HTML locally or reviewing markup. When adding/removing pages, verify:

- `sitemap.xml` updated.
- `robots.txt` still references the sitemap.
- Canonical URLs match `https://cvcalculator.ca/...`.
- Structured data `dateModified` is current when content materially changes.

## Deployment Boundaries

Do not deploy, push production changes, alter `CNAME`, or change DNS/GitHub Pages settings. Cloud/local agents may edit and review site files only.

## Dangerous Assumptions

- Do not treat calculator-intent SEO pages as functional calculators.
- Do not move actuarial math to the web layer.
- Do not assume future web/desktop product scope has started.
- Preserve parity with mobile app terminology, pricing intent, privacy posture, and trust claims.
