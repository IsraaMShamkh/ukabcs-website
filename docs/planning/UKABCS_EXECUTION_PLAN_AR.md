# UKABCS — Execution Plan

**Status:** `PLANNING_READY`

## Operating model

Every phase is completed once, reviewed by UKABCS, then locked before the next phase starts.

```text
Confirm inputs → map existing section-pool components → implement → build/check → visual review → UKABCS approval → lock phase
```

No phase is allowed to invent content, a new UI pattern, partner data, grant data or a financial claim.

## Universal implementation contract

- Use `src/styles/tokens.css` for palette/tokens and `src/styles/global.css` for global rules.
- Reuse only components in `src/components/sections/`, `src/components/cards/`, and contextually appropriate imports from `src/components/ui/`.
- Full-width `PageHero.astro` is the standard internal-page hero.
- Header is full width: UKABCS mark plus the literal `UKABCS` only.
- Footer uses an approved transparent/cropped UKABCS lock-up; never a white-canvas logo.
- Cards may use shadow, movement, image scale or glow. They must not gain visible borders on hover.
- Articles, grants, news, calls and projects use dedicated routes.
- Use `PENDING_UKABCS_CONTENT` instead of an invented fact or asset.
- Every phase must pass `npm.cmd run build` and `git diff --check`, then be reviewed at 1440px, 768px and 390px.

## Inputs handoff format

Before an agent starts a page, UKABCS supplies one folder or message containing:

1. Approved page copy, headings and CTA wording.
2. Image files or explicit approval to choose licensed images.
3. Any data values, dates, URLs, documents and public-use permissions.
4. The final approval target for CTAs/forms.
5. A list of content that must not be published yet.

## Section pool mapping

| Need | Reuse this component |
|---|---|
| Editorial image/text split | `TextContentSection.astro` |
| Values / what we do / offers | `FeaturesBentoSection.astro` |
| Programmes / plans preview | `SalesPromoSection.astro` or `ProgramTile.astro` |
| Verified statistics | `NumbersCounterSection.astro` |
| General support request | `GeneralSupportSection.astro` |
| Donation mission | `DonationSection.astro` |
| News/article/event preview | `ArticlesBlogEventsSection.astro`, `NewsCard.astro` |
| Partner logos ribbon | `PartnerRibbonSection.astro` |
| FAQ | `FaqSection.astro` |
| End-of-page CTA | `PromoCTASection.astro` |
| Team / projects | `TeamSection.astro`, `ProjectCard.astro` |

## Phased execution sequence

### Phase 00 — Foundation and shared rules

**Outcome:** one visual system, standard internal hero, correct header/footer and shared CTA.

**Needs:** exact UKABCS primary navy/blue confirmation; transparent footer logo approval; Apply Portal destination.

**Approval evidence:** one internal route proves hero/header/footer; no hover borders.

### Phase 01 — Home

**Outcome:** full Home in the agreed sequence:

1. Hero
2. Welcome / About
3. Why become a member
4. Mission & Vision
5. What we do
6. Community CTA
7. Programmes & Grants
8. Achievements
9. General Support
10. Donation
11. News & Insights three-tab hub
12. Moving partner ribbon
13. Final Ready to Join CTA

**Needs:** hero image/copy, achievement confirmation, partner assets, Contact destination, programme routes and news/call source records.

**Approval evidence:** all thirteen blocks at desktop/tablet/mobile; no hospital/irrelevant images; all buttons valid.

### Phase 02 — About Us

**Outcome:** full-width hero, editorial story, Vision/Mission imagery, values, strategic priorities, programmes, governance and final CTA.

**Needs:** final About copy, Mission/Vision/hero images, public governance links.

### Phase 03 — Memberships and benefits directory

**Outcome:** membership landing page plus `/memberships/benefits` marketplace-style directory.

**Needs:** membership tiers, pricing, eligibility, partner logos/URLs/categories/discounts/terms/public approval.

### Phase 04 — Programmes & Grants landing

**Outcome:** clear programme listing, six-step flow only if universally correct, calls list and routing.

**Needs:** final taxonomy, call statuses, programme images.

### Phase 05 — Scientific Software Development Support

**Outcome:** supplied software content transformed into hero, explanation, six-step process, offer, eligibility, calls, FAQ and CTA.

**Needs:** confirmation of Digital Campus Transformation Grant status, dates, documents, final application route and cover image.

### Phases 06–09 — Remaining support pages

**Order:** Educational Support → Publications & Conferences → Women Researchers Support → Partnerships & Collaborations.

**Outcome:** all use the same page template and only their approved content.

**Needs:** each page’s original source copy, images, current/closed call data and FAQ answers.

### Phase 10 — Calls and grant detail pages

**Outcome:** one canonical grant template and one fully approved grant record, then repeat by data.

**Needs per grant:** title, category, year, image, status/dates, eligibility, support scope, process, selection, FAQ, documents and apply URL.

### Phase 11 — News & Insights

**Outcome:** a source-driven tabbed hub for Articles, News, Calls & Announcements and individual readable pages.

**Needs per item:** copy, category, date, author where applicable, featured image, references/downloads and related links.

### Phase 12 — Funded Projects

**Outcome:** year-based tabs for 2025/2026 and dedicated project pages.

**Needs per project:** year, title, approved people/institution, image, programme, story, outcomes and report links.

### Phase 13 — Governance / legal / contact

**Outcome:** formal, low-motion content pages with verified public policies and contact routes.

**Needs:** approved policy/report/legal/contact material.

### Phase 14 — Release-quality review

**Outcome:** all routes, links, responsive states and assets checked. Report explicitly distinguishes local, committed, pushed, deployed and production accepted.

## Definition of done per phase

- [ ] Required inputs are confirmed.
- [ ] Content exists in its designated source-of-truth file.
- [ ] Only approved section-pool components were used.
- [ ] Every route and CTA is valid or intentionally marked pending.
- [ ] Desktop, tablet and mobile are reviewed.
- [ ] Build and whitespace checks pass.
- [ ] UKABCS records `APPROVED_AND_LOCKED` or returns precise revisions.