# Terms of Use publication review — November 6, 2026

Scope: website terms for the existing iOS and Android apps. Practical product/legal sanity check, not a formal legal opinion. Owner elected to proceed without external legal review.

## Findings resolved

- Material: purchase wording was incomplete and the homepage said no subscription. Owner confirmed iOS monthly/annual subscriptions and lifetime access. Authenticated Google Play Console showed one active base plan each for monthly and annual products; Android source also supports lifetime purchases. Terms now explain store-specific cancellation, renewal, restore and refunds without fixing prices. Checkout prices and taxes govern.
- Minor: clarified CIA assumptions, cached/bundled rates, manual overrides, and no affiliation or certification. Added Ontario governing law consistent with existing app terms, preserving mandatory local protections and access to courts.
- Minor: added skip navigation, visible keyboard focus, reduced-motion handling, and stronger muted-text contrast.
- Informational: educational purpose, official-quotation distinction, no professional advice, intellectual property, changes and non-waivable consumer rights were retained. No new liability cap, compulsory arbitration, or class-action waiver was added.

## Requirements versus drafting choices

Consumer rights cannot be contracted away: Ontario Consumer Protection Act, section 7 (https://www.ontario.ca/laws/statute/02c30). Apple and Google require accurate subscription disclosures and cancellation information under their platform policies (https://developer.apple.com/app-store/subscriptions/ and https://support.google.com/googleplay/android-developer/answer/18265346). CIA/non-affiliation explanations and the governing-law wording are risk-reducing drafting choices, not asserted universal statutory requirements. This page supplements the applicable Apple licence; it is not submitted as a replacement custom EULA.

## Verification and limits

Reviewed iOS StoreKitManager, PremiumPaywallView and StoreKit product file; Android purchase_provider and paywall_screen; public Canadian Apple listing; website privacy/disclosures. Apple authenticated purchase settings were not inspected; current iOS options were confirmed by the owner. Google Play public listing was inaccessible to the web reader; authenticated subscription base plans were inspected read-only. No store configurations or app builds changed.

HTML nesting, unique IDs, heading structure, internal link paths/fragments, canonical, JSON-LD, sitemap XML and robots coverage passed. Desktop/mobile browser presentation was inspected; no horizontal overflow detected. Keyboard navigation has a skip link and explicit focus styling. GitHub Pages settings confirmed main branch and root publishing. Production verification is reported in the publishing chat.

## Separate follow-up — next mobile releases

- iOS: PremiumPaywallView.swift links Terms of Use to https://thedman.github.io/app-support/cvcalculator/terms-of-use. Change to https://cvcalculator.ca/terms in the next authorized mobile release.
- Android: lib/screens/paywall_screen.dart uses the same older URL. Change to https://cvcalculator.ca/terms in the next authorized mobile release.
- Set any relevant Google Play Console terms link to https://cvcalculator.ca/terms; review any App Store Connect terms references separately. Do not replace the Apple EULA field with this supplemental page without checking custom-EULA requirements.
- Existing privacy policy describes the iOS app specifically. Review Android coverage and app-store data disclosures separately; this terms release makes no new Android privacy promises.
- Public Apple version notes mention a one-time-only model despite current subscription products. Align store marketing copy during the next authorized metadata update.
