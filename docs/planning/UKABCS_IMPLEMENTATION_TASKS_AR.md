# UKABCS — Implementation Tasks

**Usage:** execute only the next approved phase. Do not skip a dependency. Each task has a concrete file/location so it can be handed to another agent.

## Phase 00 — Foundation

- [x] T001 Confirm and apply the approved dark UKABCS palette in `src/styles/tokens.css`.
- [x] T002 Remove any remaining visible card-hover border transitions in `src/styles/global.css` and page-specific styles.
- [x] T003 Standardise `src/components/hero/PageHero.astro` as the full-width internal hero.
- [x] T004 Verify header brand lock-up in `src/components/layout/Header.astro` is mark + `UKABCS` only.
- [x] T005 Replace the footer white-canvas source with approved transparent/cropped logo treatment in `src/components/layout/Footer.astro`.
- [x] T006 Mark Apply Portal as intentionally deferred; it no longer routes to the General Support form.
- [x] T007 Review header/footer/hero at 1440px, 768px and 390px.
- [x] T008 Run `npm.cmd run build` and `git diff --check`.

## Phase 01 — Home

- [ ] T010 Confirm final Home inputs: hero copy/image, achievements, partner assets, Contact target, programme routes, calls/news source records.
- [x] T011 Store confirmed Home copy, programme data and achievement data in `src/config/home.ts`.
- [x] T012 Implement/verify full-width Home hero in `src/pages/index.astro` with science matrix/grid and readable navy overlay; final image approval remains pending.
- [x] T013 Add Welcome / About editorial split via `src/components/sections/TextContentSection.astro`.
- [x] T014 Add Why Become a Member editorial preview and route to `/memberships` in `src/pages/index.astro`.
- [x] T015 Add Mission and Vision using the existing split/editorial section pattern; image approval remains pending.
- [x] T016 Populate What We Do using `src/components/sections/FeaturesBentoSection.astro` and confirmed copy.
- [x] T017 Add full-width Join Our Community CTA with `src/components/sections/PromoCTASection.astro`.
- [x] T018 Populate all approved programmes in `src/components/sections/SalesPromoSection.astro`; listing actions say `Explore`.
- [x] T019 Add mild reduced-motion-safe entrance treatment to `src/components/sections/NumbersCounterSection.astro` using verified figures only.
- [x] T020 Verify General Support wording/CTA in `src/components/sections/GeneralSupportSection.astro`; it does not promise funding or SLA.
- [x] T021 Replace irrelevant donation imagery and verify the destination in `src/components/sections/DonationSection.astro`.
- [x] T022 Build source-driven Articles / News / Calls & Announcements tabs from content records in `src/components/sections/ArticlesBlogEventsSection.astro`.
- [x] T023 Add supplied public partner logos/names to `src/components/sections/PartnerRibbonSection.astro`; retain pending state if no assets exist.
- [x] T024 Verify final Ready to Join CTA in `src/components/sections/PromoCTASection.astro` includes Membership and Contact buttons.
- [x] T025 Review Home at 1440px, 768px and 390px; record pending inputs.
- [x] T026 Run `npm.cmd run build` and `git diff --check`.

## Phase 02 — About Us

- [ ] T030 Confirm About copy, strategic priorities, public governance links and approved hero/Mission/Vision images.
- [x] T031 Apply `src/components/hero/PageHero.astro` to `src/pages/about-us.astro`.
- [x] T032 Keep About narrative editorial using `TextContentSection.astro`; remove content that belongs to another page.
- [x] T033 Retain and validate strategic-priorities layout in `src/pages/about-us.astro` using approved text only.
- [x] T034 Use approved Mission/Vision images and values sections from the pool.
- [x] T035 Add shared full-width final CTA and run responsive/build checks.

## Phase 03 — Memberships

- [x] T040 Confirm membership tiers, prices, eligibility, renewal terms and approved member-credit wording.
- [x] T041 Apply `PageHero.astro` to `src/pages/memberships.astro` using approved membership/community image.
- [x] T042 Convert supplied Why Become a Member narrative into a route/section using `TextContentSection.astro`.
- [x] T043 Use `FeaturesBentoSection.astro` for verified membership benefits only.
- [x] T044 Create benefits-directory data contract and `/memberships/benefits` route with partner logo/name/link/category/discount/terms fields.
- [x] T045 Add `Discover benefits` preview action from `src/pages/memberships.astro`.
- [x] T046 Add verified FAQ and final CTA; run review/build checks.

## Phase 04 — Programmes & Grants

- [x] T050 Confirm programme taxonomy, statuses, images and globally-valid six-step process.
- [x] T051 Apply `PageHero.astro` to `src/pages/programmes-grants.astro`.
- [x] T052 Make top-level `Programmes & Grants` navigation target the landing page in `src/config/site.ts`.
- [x] T053 Use `SalesPromoSection.astro`/`ProgramTile.astro` for programme cards with `Explore` actions only.
- [x] T054 Create source-driven calls state: current, upcoming, closed; no listing-level Apply action.
- [x] T055 Add FAQ/final CTA and run responsive/build checks.

## Phase 05 — Scientific Software Development Support

- [x] T060 Confirm the Scientific Software call pack, Digital Campus Transformation Grant status and approved application URL.
- [x] T061 Apply PageHero, supplied Why Software Matters copy, six steps, offer, Who Can Apply, calls, FAQ and CTA to `src/pages/scientific-software.astro`.
- [x] T062 Present `No open calls` only when that state is confirmed; otherwise list the confirmed call as `Explore call`.
- [x] T063 Run responsive/build checks.

## Phases 06–09 — Programme support pages

- [x] T070 Confirm source content/images/call data for `src/pages/educational-support.astro`; implement shared template and review.
- [x] T071 Confirm source content/images/call data for `src/pages/publications.astro`; implement without invented publication benefits and review.
- [x] T072 Confirm source content/images/call data for `src/pages/women-in-science.astro`; implement and review.
- [x] T073 Confirm approved public partner content for `src/pages/partnerships/index.astro`; implement and review.

## Phase 10 — Grant detail system

- [x] T080 Create/validate grant schema under `src/content/grants/` for title, year, status, dates, eligibility, support, documents, SEO and apply URL.
- [x] T081 Implement a dedicated grant route under `src/pages/grants/` using the approved detail template.
- [x] T082 Build a stable related-documents/action section with only provided files.
- [x] T083 Import and approve exactly one complete grant pack before adding another.

## Phase 11 — News & Insights

- [x] T090 Confirm content schema for articles, news and calls under `src/content/`.
- [x] T091 Implement full-width News & Insights hero and three-tab source-driven hub in `src/pages/news/index.astro`.
- [x] T092 Ensure each `NewsCard.astro` has image/type/date/title/excerpt/dedicated action.
- [x] T093 Verify dedicated article/news route readability, references, related content and final CTA.

## Phase 12 — Funded Projects

- [x] T100 Convert supplied projects into year-based content records for 2025/2026 under `src/content/funded-projects/`.
- [x] T101 Implement year tabs/listing in `src/pages/funded-projects/index.astro` using `ProjectCard.astro`.
- [x] T102 Verify each dedicated project route contains only approved public data and imagery.

## Phase 13 — Formal pages

- [x] T110 Confirm governance, transparency, legal, contact and accessibility source documents.
- [x] T111 Apply formal `PageHero.astro` and editorial layouts to `src/pages/governance.astro`, `src/pages/transparency.astro` and `src/pages/legal.astro`.
- [x] T112 Validate configured contact/legal URLs and accessibility behaviour.

## Phase 14 — Site-wide QA

- [x] T120 Check every header/footer/internal link against generated routes.
- [x] T121 Review desktop/tablet/mobile overflow and navigation on every page category.
- [x] T122 Search for fake claims, emoji icons, hover borders and long-form modal content; remove/fix any found.
- [x] T123 Run `npm.cmd run build` and `git diff --check`.
- [x] T124 Produce release handoff stating local/committed/pushed/deployed/production-accepted status separately.