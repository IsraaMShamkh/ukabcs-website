# UKABCS — Phased Website Implementation Specification & Task Plan

**Purpose:** one operational document for the implementing agent and UKABCS reviewer.

**Status:** planning baseline. No page becomes accepted until UKABCS reviews that phase in the local browser.

**Working model:** complete one page/feature phase once, obtain approval, then lock it. Before starting every phase, UKABCS supplies the listed content and assets; the agent confirms the inputs, implements only the selected components from the existing pool, builds, and returns visual evidence. No parallel redesign and no new section geometry without explicit approval.

---

## 1. Non-negotiable design rules

1. Use the existing UKABCS palette and shapes only. The primary visual source is `src/styles/tokens.css`; shared behaviour is `src/styles/global.css`.
2. Page heroes are always full viewport width, with a relevant image, a UKABCS navy/blue overlay, readable copy, and optional CTA. Heroes are never boxed cards.
3. Use a supplied/licensed image that is semantically relevant to its section. Examples: collaboration imagery for About; software/data imagery for Scientific Software; no hospital-bed imagery for general research innovation.
4. Do not build arbitrary new section designs. Choose an existing component from the pool below and change its content/data only. Any genuinely missing pattern must be approved before it is built.
5. Cards have soft depth/motion only. No visible hover border or animated outline. No emojis.
6. Articles, news, calls, projects, policies and programmes open dedicated pages; never full content inside a modal.
7. Do not invent facts: financial amounts, deadlines, call status, partner logos, discounts, testimonials, institutional details, documents, grants, or research outcomes. Use `PENDING_UKABCS_CONTENT` where the asset/data is absent.
8. All public-page CTAs use a route or a configured URL from `src/config/site.ts`. A button with no confirmed target is visibly marked as pending and must not pretend to submit an application.
9. Every phase ends with `npm.cmd run build`, `git diff --check`, desktop/tablet/mobile visual review, and an approval checkpoint.
10. Local build success is not deployment, publishing or production acceptance.

---

## 2. Source of truth and section pool

| Purpose | Canonical location | Rule |
|---|---|---|
| Organisation name, global navigation, contact/form destinations | `src/config/site.ts` | Never repeat or redefine organisation identity in pages. |
| Home content | `src/config/home.ts` | Home copy and lists live here, not inside a component. |
| Future page content | `src/content/` plus a page-specific config file when needed | One content item per article, call, project or policy. |
| Colours, spacing, radii, shadows | `src/styles/tokens.css` | Tokens only; do not introduce a second palette. |
| Global component behaviour | `src/styles/global.css` | Card hover and responsive rules are central. |
| Header / footer | `src/components/layout/Header.astro`, `Footer.astro` | Shared site chrome; change once and verify all routes. |
| Internal page hero | `src/components/hero/PageHero.astro` | Sole standard for internal heroes. |
| Brand assets | `public/brand/` | Only UKABCS-approved brand artwork. |

### Existing approved section pool

| Pool component | Use it for | Do not use it for |
|---|---|---|
| `TextContentSection.astro` | Welcome, editorial split, About/mission introduction | Dense long-form article bodies |
| `FeaturesBentoSection.astro` | What We Do, values, programme themes | Every section on a page |
| `SalesPromoSection.astro` | Programme/grant listing, membership plan preview | Prices, funding amounts or Apply actions without approved data |
| `NumbersCounterSection.astro` | Verified achievements/statistics | Unverified claims |
| `GeneralSupportSection.astro` | General support request | Guaranteed funding or response-time promise |
| `DonationSection.astro` | Donation mission and approved destination | Payment collection UI |
| `ArticlesBlogEventsSection.astro` | Content hub preview | Full article content |
| `PartnerRibbonSection.astro` | Moving partner logo/name ribbon | Placeholder initials as final partner logos |
| `FaqSection.astro` | Factually approved FAQs | Unknown policy/eligibility answers |
| `PromoCTASection.astro` | Shared full-width end CTA | Card-shaped mini CTA |
| `TeamSection.astro` | Confirmed board/team people | Unconfirmed personnel |
| `GallerySection.astro` | Approved event/media archive | Generic stock-image decoration |
| `ProjectCard.astro`, `NewsCard.astro`, `PartnerCard.astro`, `ProgramTile.astro` | Listings for their exact content type | Content with no dedicated route |
| Imported `src/components/ui/*.tsx` | Only where a listed section needs its native interaction | Decorative effects added only because they are available |

### Required shared patterns

- **Internal hero:** `PageHero.astro`, applied consistently after Home approval.
- **Final CTA:** `PromoCTASection.astro`, full-width and reused at the end of public pages.
- **Listing cards:** image + type/status + title + concise summary + `Explore`/`Read`; no `Apply` at card level.
- **Image rules:** Hero 16:9/landscape at least 1920px; article 16:10; project 16:9; partner/team logos supplied as square/transparent where possible.

---

## 3. Delivery workflow — used for every phase

### Phase gate A — intake before implementation

The agent must ask the questions in the relevant page’s **Inputs required** list. It must not start with fake text or substitute a random image merely to fill space.

### Phase gate B — implementation

- map every planned section to the pool component;
- put content in the designated single source;
- preserve responsive layout and global tokens;
- add only the selected page’s scope.

### Phase gate C — review pack

The agent returns:

- route and changed files;
- the exact content and images used;
- pending inputs and intentionally omitted content;
- screenshots/review at 1440px, 768px and 390px;
- build and whitespace-check results;
- state: `LOCAL_REVIEW_READY`, never “production” unless separately deployed and accepted.

### Phase gate D — UKABCS decision

Only one of these outcomes is allowed: `APPROVED_AND_LOCKED`, `REVISION_REQUESTED`, or `BLOCKED_FOR_CONTENT`.

---

## 4. Master implementation order

| Stage | Scope | Start condition | Finish condition |
|---|---|---|---|
| 00 | Visual system / shared rules | Confirm palette and logo asset treatment | Standard hero, cards, header/footer rules locked |
| 01 | Home | Hero image and copy confirmed | Home accepted in browser |
| 02 | About Us | About copy and images supplied | About accepted |
| 03 | Memberships + benefits directory contract | Tiers and partner benefits supplied | Membership landing accepted; directory data contract ready |
| 04 | Programmes & Grants landing | Programme taxonomy confirmed | Listing and routing accepted |
| 05 | Scientific Software Development Support | Software content/call asset confirmed | Support page and its call card accepted |
| 06 | Educational Support | Site123/source content supplied | Page accepted |
| 07 | Publications & Conferences | Complete content supplied | Page accepted |
| 08 | Women Researchers Support | Complete content supplied | Page accepted |
| 09 | Partnerships & collaborations | Public partner information approved | Page accepted |
| 10 | Calls / grant detail templates | One complete grant pack supplied | One canonical call page accepted |
| 11 | News & Insights hub + articles | Content packages supplied | Three-tab hub and one article accepted |
| 12 | Funded Projects | 2025/2026 project packs supplied | Tabbed listing and one project page accepted |
| 13 | Governance, transparency, legal, accessibility | Formal source content verified | Formal pages accepted |
| 14 | Whole-site QA and release handoff | All earlier stages locked | Links, responsive UI and build verified |

---

# Stage 00 — Shared visual system and site chrome

**Goal:** make all later pages visually consistent before page-by-page work begins.

### Tasks

- [ ] T001 Audit `src/styles/tokens.css` and record the approved dark UKABCS navy, primary blue, soft blue, teal, neutrals, spacing, radii and shadows in the document header/comments; do not add alternate colours.
- [ ] T002 Update `src/styles/global.css` so `.card-aceternity`, `.flat-surface` and page-specific cards never gain visible borders on hover; preserve accessible focus styles.
- [ ] T003 Make `PageHero.astro` the only internal-hero pattern: full width, relevant image, navy/brand overlay, breadcrumb, title, description, optional CTA, reduced-motion safe.
- [ ] T004 Verify `Header.astro`: full-width shell; mark + literal `UKABCS` only; no tagline; desktop/mobile navigation works.
- [ ] T005 Replace/crop the footer source artwork only with an approved transparent lock-up. The supplied white-canvas image must not appear as a white rectangle.
- [ ] T006 Confirm all header and footer destinations resolve to generated routes or approved external URLs.

### Inputs required before Stage 00

1. Confirm the exact primary navy/blue from the UKABCS logo as the final reference.
2. Supply/approve a transparent full footer logo or approve controlled cropping of the original official file.
3. Confirm whether the header’s `Apply Portal` is final or should read `Explore Programmes` until a real portal is live.

### Acceptance

- [ ] A hero screenshot on one internal page matches the agreed full-width language.
- [ ] Header and footer are correct at desktop and mobile widths.
- [ ] No card hover creates a line/border.

---

# Stage 01 — Home page

**Status today:** revised locally but **not accepted**. The screenshots show the logo treatment and final content sections still require visual approval. The Home must be reviewed as one whole phase.

### Planned section sequence and selected pool component

| # | Content | Selected component from pool | Required imagery / interaction |
|---|---|---|---|
| 1 | Hero | Existing Home hero + shared hero rules | Scientific research visual, strong UKABCS overlay/grid/gradient |
| 2 | Welcome / About UKABCS | `TextContentSection` | Research/collaboration image; link to About |
| 3 | Why become a member | `TextContentSection` or `FeaturesBentoSection` | Membership/community image; route to Memberships |
| 4 | Mission & Vision | Two `TextContentSection` instances / approved split variant | Two relevant science/collaboration images, not icon boxes |
| 5 | What We Do | `FeaturesBentoSection` | Funding, education, partnership, equity themes |
| 6 | Join our community | `PromoCTASection` variant, full width | Researchers, universities, institutions, industry actions |
| 7 | Programmes & Grants | `SalesPromoSection` | All nine approved programme categories; card action `Explore` only |
| 8 | Our Achievements | `NumbersCounterSection` | Subtle number entrance; only confirmed figures |
| 9 | General Support | `GeneralSupportSection` | Full-width navy/blue/teal treatment; no promise of funding |
| 10 | Support Scientific Progress | `DonationSection` | Research/innovation image, never hospital/bed imagery |
| 11 | News & Insights hub | New composition of existing `ArticlesBlogEventsSection` data display | Three tabs: Latest research articles, News, Calls & announcements |
| 12 | Partners | `PartnerRibbonSection` | Continuous horizontal motion left/right; final supplied logos + small names |
| 13 | Ready to join UKABCS | `PromoCTASection` | Full-width final CTA: Membership + Contact buttons |

### Home tasks

- [ ] T010 Confirm final Home hero wording. Default proposed wording: `UKABCS` + `UK Organisation for Biotechnology and Computational Science` + approved mission statement.
- [ ] T011 Replace any unapproved stock image in Home with a UKABCS-approved/licensed science image, preserving crop and overlay rules.
- [ ] T012 Add the required Why Become a Member and Mission/Vision sections; data belongs in `src/config/home.ts`.
- [ ] T013 Check all nine programme categories against the final navigation/routes; each card uses `Explore` and links to its destination.
- [ ] T014 Animate achievements mildly with `prefers-reduced-motion` fallback; retain the only approved values: 3,000 researchers, 5 countries, 8 funded projects, 10 strategic partnerships, unless UKABCS changes them in writing.
- [ ] T015 Replace the Home news preview with a three-tab hub driven by content collections: Articles, News, Calls & Announcements. No tab may contain manually duplicated page text.
- [ ] T016 Make the partner ribbon continuously move without layout jumps; retain `PENDING_PARTNER_LOGOS` until real brand assets arrive.
- [ ] T017 Ensure Ready to Join has Membership and Contact buttons; confirm final Contact destination in `site.ts`.
- [ ] T018 Run visual review and complete the Stage 01 review pack.

### Inputs required before Stage 01 starts/restarts

1. Final hero image or permission to select a licensed replacement.
2. Final Home headline and one-sentence description.
3. Approval/adjustment of four achievement values.
4. Partner names, transparent square logos, official URLs and whether each may appear publicly.
5. Confirm Contact CTA destination.
6. Confirm whether general support is a ClientFlow form and provide the final URL.

### Home acceptance checklist

- [ ] Hero is full width, gradients/grid visible and text readable.
- [ ] Every section above exists in the listed order.
- [ ] Latest content is a three-tab hub, fed from a source of truth.
- [ ] No unrelated medical/hospital stock image is used.
- [ ] Partner ribbon moves smoothly and uses no fake logo.
- [ ] All desktop/tablet/mobile layouts are approved.

---

# Stage 02 — About Us

### Section map

| Content | Pool component | Notes |
|---|---|---|
| Hero | `PageHero` | Collaboration/university research image and navy overlay |
| Who we are | `TextContentSection` | Editorial, not a card grid |
| Vision / Mission | Split `TextContentSection` | Relevant independent images |
| Values / How we work | `FeaturesBentoSection` | Reusable across the site only when relevant |
| Strategic priorities | Existing dark strategic-priorities split layout | Preserve the strong approved layout shown in reference image |
| What we do / programmes | `SalesPromoSection` | Short purpose cards + routes |
| Governance & transparency | `TextContentSection` + formal links | No invented board details |
| Global impact / Join | `PromoCTASection` | Shared final full-width CTA |

### Tasks

- [ ] T020 Convert About hero to `PageHero` and select an approved academic-collaboration image.
- [ ] T021 Audit all copy so it belongs to About; move programme/call details to their own pages.
- [ ] T022 Keep the “Building the conditions for better science” strategic priority layout; validate each priority against final approved wording.
- [ ] T023 Use supplied images for Mission/Vision, aligned to their purpose.
- [ ] T024 End with shared CTA, not a card.

### Inputs required

1. Final About narrative, vision, mission, values and strategic priorities.
2. Approved two Mission/Vision images and one hero image.
3. Any governance/public-report links allowed to be public.

---

# Stage 03 — Memberships and member-benefits directory

### Section map

| Content | Pool component | Notes |
|---|---|---|
| Hero | `PageHero` | Full-screen membership/community image |
| Why become a member | `TextContentSection` | Uses supplied membership narrative as dedicated content |
| Membership plans | Existing pricing/plan section | Do not change prices/tiers until supplied |
| What membership enables | `FeaturesBentoSection` | Real icons, no emoji |
| Discover member benefits | `SalesPromoSection` preview + route | Opens dedicated directory page |
| FAQ | `FaqSection` | Only confirmed answers |
| Final CTA | `PromoCTASection` | Shared full-width CTA |

### Directory contract: `/memberships/benefits`

Each partner entry must include: circular logo, partner name, website, category (`Software`, `Tools`, `Training`, `Publishing`, etc.), short service description, verified member discount/benefit, terms, effective/expiry dates and disclosure link where applicable. Filter by category. Do not publish a benefit before it is authorised.

### Tasks

- [ ] T030 Add full-width Membership hero.
- [ ] T031 Turn supplied “Why Become a Member” narrative into editorial section + dedicated route if it exceeds preview length.
- [ ] T032 Replace/remove unsupported in-kind research-credit claims after UKABCS decision.
- [ ] T033 Build benefits directory data schema and route; do not fill it with fictitious companies.
- [ ] T034 Add directory preview with `Discover benefits` CTA.

### Inputs required

1. Final membership tiers, pricing, eligibility and renewal terms.
2. Which current claims about in-kind credits are approved.
3. For every partner: logo, name, URL, category, service description, exact benefit/discount, terms, validity date and public-use approval.

---

# Stage 04 — Programmes & Grants landing

### Section map / tasks

- [ ] T040 Use `PageHero` with relevant research/funding visual and the title `Programmes & Grants`.
- [ ] T041 Make header parent entry navigate to this landing page (not an inert trigger).
- [ ] T042 Use `SalesPromoSection` / `ProgramTile` for programme overview; each item has image, category, concise purpose, status if confirmed and `Explore`.
- [ ] T043 Retain the six-step application flow only after UKABCS confirms it applies to all programme types.
- [ ] T044 Add current/open/closed calls source driven by grant content; no listing-level `Apply` action.
- [ ] T045 Add FAQ and shared final CTA.

### Inputs required

1. Confirm final programme taxonomy and routes.
2. Confirm which call statuses are current, closed or upcoming.
3. Provide cover image per programme or allow licensed selections.

---

# Stage 05 — Scientific Software Development Support

**Content already supplied:** mission, six application steps, five offer areas, four eligible applicant groups, and current-call wording. This content is the source; it may be edited for clarity but not materially altered.

### Section map

| Content | Pool component |
|---|---|
| Hero: empowering tool development | `PageHero` with software/data visual |
| Why scientific software matters | `TextContentSection` |
| Application process (1–6) | Existing six-step listing, styled without hard borders |
| Software development offer | `FeaturesBentoSection` |
| Who can apply | `SalesPromoSection` / grid with actual icons |
| Open calls | `NewsCard`/call listing with `Explore call` |
| FAQ + final CTA | `FaqSection` + `PromoCTASection` |

### Tasks

- [ ] T050 Rebuild the software page with the supplied content using the section map above.
- [ ] T051 Add its dedicated call preview only after extracting/confirming its content, status, dates, documents and application destination.
- [ ] T052 If no active call exists, display the supplied “No open calls at the moment” state; do not also present an unverified live call as open.

### Inputs still required

1. Confirm whether **UKABCS Digital Campus Transformation Grant** is open, closed or upcoming.
2. Its approved title, short summary, dates/status, eligibility, documents, cover image and application URL.
3. Final FAQ answers.

---

# Stages 06–09 — Remaining programme/support pages

These stages use exactly the same template: `PageHero` → editorial explanation → offer/eligibility/process sections selected from the pool → call list if content exists → FAQ → shared full-width CTA.

| Stage | Page | Inputs needed before work | Specific restrictions |
|---|---|---|---|
| 06 | Events & Educational Support | Existing Site123 text, approved learning/events images, eligibility, current calls | Do not call a resource free or guaranteed unless provided |
| 07 | Publications & Conferences Support | Complete source text, categories, support rules, images, any calls | Current content is incomplete; do not invent APC/conference support details |
| 08 | Women Researchers Support | Source text, criteria, programme/call data, images | Avoid unapproved claims about childcare, mentorship or funding values |
| 09 | Partnerships & Collaborations | Public partner copy, categories, partner logos and approved links | Only public, approved partner identity/data |

Tasks for each stage:

- [ ] T060/T070/T080/T090 Confirm content pack and image set.
- [ ] T061/T071/T081/T091 Implement only the selected pool components.
- [ ] T062/T072/T082/T092 Create/add dedicated call records only with complete grant packs.
- [ ] T063/T073/T083/T093 Run responsive/build review and request page approval.

---

# Stage 10 — Calls and individual grant pages

### Mandatory data packet per grant

- title, slug, programme/category, year, featured image, status;
- opening date and deadline, if applicable;
- overview and intended outcomes;
- eligibility, funding/support scope, duration;
- application process and selection process;
- FAQ;
- final apply destination;
- approved attached documents: application form, timeline, agreement, guide notes; and
- SEO title/description/image.

### Grant page section map

`PageHero` → overview (`TextContentSection`) → key information → eligibility → funding/support → programme structure → dates → application process → selection → FAQ → document list → stable action section → related calls.

### Tasks

- [ ] T100 Create the grant data schema and a dedicated dynamic route.
- [ ] T101 Build document list that clearly omits unavailable documents rather than inventing downloads.
- [ ] T102 Build one canonical grant from a complete pack; use it as the approved template.
- [ ] T103 Add other calls only through the same schema/template.

---

# Stage 11 — News & Insights hub, articles and announcements

### Target design

One **News & Insights** hub with three tabs: `Latest Research Articles`, `News`, `Calls & Announcements`. Each tab reads from its own content source. Cards always have a proper featured image, category/type, date, title, excerpt and compact action button at the card end (`Read article` / `Explore call`).

### Tasks

- [ ] T110 Ensure navigation order places Programmes & Grants before News & Insights.
- [ ] T111 Add a shared full-width hub hero.
- [ ] T112 Build the three-tab source-driven listing; no duplicate inline lists in Home.
- [ ] T113 Use a dedicated article page with readable body, optional table of contents, references/downloads and related content.
- [ ] T114 End article/call pages with contextual shared CTA.

### Inputs required

For each content item: final body, title/slug, type/category, author (when applicable), published date, featured image, references/downloads, related links and public approval.

---

# Stage 12 — Funded Projects

### Target design

Full-width hero → year tabs (`2025`, `2026`, future years) → source-driven project cards → dedicated project pages. A project card includes cover image, project title, institution, year, programme and `View project`.

### Tasks

- [ ] T120 Convert project content into year-based records; do not preserve unrelated old placeholder text.
- [ ] T121 Build year tabs from the records rather than hard-coding content.
- [ ] T122 Verify each project’s image, researcher/institution, outcomes and public wording.
- [ ] T123 Implement and approve one project detail template.

### Inputs required

For every project: year, title, slug, cover image, researchers/institution approved for public display, programme, summary, outcomes, links/reports and related assets.

---

# Stage 13 — Governance, transparency, legal, accessibility and contact

### Tasks

- [ ] T130 Apply shared full-width formal hero to Governance, Transparency and Legal.
- [ ] T131 Keep formal pages low-motion and editorial; do not turn policy paragraphs into decorative cards.
- [ ] T132 Validate board/committee, report, policy and legal content only against approved source documents.
- [ ] T133 Make Contact routes/forms use the configured approved data only.
- [ ] T134 Verify accessibility language, keyboard navigation, focus visibility and reduced-motion behaviour.

### Inputs required

Approved policy documents, report links, public governance information, legal/privacy wording, official contact details, accessibility statement.

---

# Stage 14 — Whole-site QA and handoff

- [ ] T140 Crawl generated routes; report broken links and missing assets.
- [ ] T141 Review Header/Footer/Nav at 1440px, 768px and 390px on every page class.
- [ ] T142 Verify no card hover border, no emoji UI icon, no modal for long-form content and no fake claim remains.
- [ ] T143 Run `npm.cmd run build` and `git diff --check`.
- [ ] T144 Produce a delivery report separating `local`, `committed`, `pushed`, `deployed` and `production accepted` status.

---

## 5. First intake questionnaire — Stage 01 Home

Answer these once and I will use them to make the Home ready for a single review cycle:

1. Which exact hero photo should be used? Attach/export it or approve a licensed research-science replacement.
2. Is this hero wording approved: **UKABCS — UK Organisation for Biotechnology and Computational Science** with the current one-sentence mission? If not, send final wording.
3. Confirm or correct: `3,000` researchers supported, `5` countries reached, `8` funded projects, `10` strategic partnerships.
4. Send partner logos/names/URLs and whether each may appear publicly. Until then the ribbon stays pending, with no fake brand identities.
5. Confirm the Contact button’s final URL/form and whether the current general-support form is live.
6. Approve the proposed News & Insights tabs: Articles / News / Calls & Announcements.
7. Confirm whether the listed Home programme categories and routes are final.

## 6. Agent execution rule

An implementation agent begins **only the next approved stage**. It must read this file, the relevant source-of-truth files and the stage’s supplied inputs. It must not start a later stage, infer missing facts, or replace the approved pool with newly invented UI.