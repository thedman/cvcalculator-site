# CVCalculator Site Agent Guide

# Repository Identity

## Quick Reference

Repository: `CVCalculator_site`

Classification: Production marketing and SEO website

Production: `https://cvcalculator.ca/`

Hosting: GitHub Pages

Deployment: Pushes to `origin/main`; publishing source should be verified in GitHub Pages settings when diagnosing deployment

Purpose: Educational acquisition funnel for the CVCalculator mobile applications.

Highest Context Switch Risk: Do not assume Cloudflare Pages. This site is GitHub Pages and is not the calculation engine.

Read First: `AGENTS.md`, `CLAUDE.md`, `README.md`, `CNAME`, `sitemap.xml`, and `robots.txt`.

## What this repository IS

This is the static production marketing and SEO website for `cvcalculator.ca`.

It supports App Store and Google Play conversion for the CVCalculator mobile apps.

## What this repository is NOT

- Not the iOS app.
- Not the Android app.
- Not Cloudflare Pages.
- Not a backend API.
- Not the commuted value calculation engine.
- Not a subscription, account, or app workflow surface.

## Purpose

The site provides educational Canadian pension content and acquisition paths for the mobile applications. The primary audience is Canadian defined benefit pension members researching commuted value decisions.

Current maturity: production website.

Source of truth: this file and `CLAUDE.md` for operational rules; `README.md` and root HTML files for site structure; `CNAME` for custom domain.

## Production

- Production URL: `https://cvcalculator.ca/`
- Custom domain: `cvcalculator.ca`
- Mobile app source repos: `CVCalculator` and `CVCalculator_Android`
- Verified source: `CLAUDE.md`, `CNAME`, and repository static files.

## Hosting

- Hosting platform: GitHub Pages.
- Deployment platform: GitHub Pages.
- DNS/CDN: `CNAME` documents `cvcalculator.ca`; DNS provider is not documented in this repository.
- Cloudflare Pages: not documented and must not be assumed.

## Deployment

- Publishing branch: `main` / `origin/main` per operational notes.
- Build system: none. Static HTML/CSS from repository root.
- Deployment trigger: push to `origin/main`.
- Expected propagation: typically a few minutes.
- Rollback: revert the published commit and push, or use GitHub Pages controls if needed.
- Verification: inspect live HTML with a cache-busting query string, confirm canonical URLs, sitemap, robots, and structured data.

## Architecture

- Frontend: static HTML/CSS.
- Backend: none.
- Worker/API: none in this repository.
- Mobile calculation logic: lives in the mobile apps, not here.
- Key constraint: no build step, bundler, framework, backend, or JavaScript dependency unless explicitly requested.

## Analytics

- GA4: `G-WEBYFNTP7N` per `CLAUDE.md`.
- Search Console: verification file documented in `CLAUDE.md`.
- App telemetry/crash reporting/advertising: not documented in this repository.

## Operational Constraints

- Website is acquisition and education only.
- Every indexable page needs canonical URL, structured data, sitemap coverage, and robots coverage.
- Do not deploy, push production changes, alter `CNAME`, or change DNS/GitHub Pages settings.
- Preserve mobile-app parity for terminology, pricing intent, privacy posture, and trust claims.

## Common Context Switch Mistakes

- Do not assume Cloudflare Pages deployment procedures.
- Do not treat calculator-intent SEO pages as functional calculators.
- Do not move actuarial math to the web layer.
- Do not confuse this website with `CVCalculator` or `CVCalculator_Android`.
- Do not assume future web/desktop product scope has started.

## Repository Decision History

Decision: The production website is deployed through GitHub Pages.

Reason: This repository is a static marketing site and has an established GitHub Pages publishing path.

Implication: Deployment verification starts with GitHub Pages assumptions, not Cloudflare Pages assumptions used elsewhere in the portfolio.

Decision: The website remains a marketing and education funnel, not a calculator surface.

Reason: Calculation logic, subscriptions, and user workflows belong in the mobile apps.

Implication: SEO pages can target calculator intent but must not add web calculation functionality without an explicit architecture decision.

## AI Agent Guidance

First files to read: `AGENTS.md`, `CLAUDE.md`, `README.md`, changed HTML files, `sitemap.xml`, `robots.txt`, and `CNAME`.

Safe operations: edit static HTML/CSS, update SEO metadata, update sitemap/robots when pages change, and review local markup.

Restricted operations: do not deploy, push, change DNS, modify `CNAME`, add calculators, add backend workflows, or add JavaScript dependencies without explicit instruction.

Verification commands: no build is expected. Review HTML locally and verify sitemap, robots, canonical URLs, structured data, and production with cache-busting only when asked.

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
