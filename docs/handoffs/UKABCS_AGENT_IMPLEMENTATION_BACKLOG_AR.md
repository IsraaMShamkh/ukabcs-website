# UKABCS Website — Agent Implementation Backlog

**Status:** Approved direction; implementation is intentionally page-by-page.

**Priority rule:** Finalise **Home** first. Do not redesign, publish, or claim any other page is accepted until Home receives UKABCS browser approval.

---

## 1. What UKABCS requires

UKABCS is an academic, non-profit, content-first organisation site — not a dashboard and not a generic card-template site.

The existing Astro website is the source project. The agent must retain the approved visual identity, mobile/tablet responsiveness, static content architecture, existing routes, and content collections. Do not convert the site to Next.js or introduce a second UI system.

### Non-negotiable rules

- Build with the existing design tokens and approved Aceternity components already in `src/components/ui/`.
- Do **not** use hard card borders, including on hover. Card interaction can use image scale, shadow, colour, blur, movement, or glow — never a visible outline/border transition.
- Do not use emojis as UI icons. Use Lucide / Tabler icons or no icon.
- Articles, grants, events, programmes, projects, and policies must have dedicated routes; never present their full content in a modal.
- Do not invent partnership discounts, partner logos, grants, statistics, testimonials, governance data, documents, dates, or programme eligibility.
- Use real UKABCS supplied content only. Mark unknown values as `PENDING_UKABCS_CONTENT`, not fake placeholder claims.
- Header and page heroes are full-width, never placed inside a boxed or narrow visual container.
- The shared CTA must be a full-width section, not a floating card.
- A successful local build is not a deployment or production acceptance.

---

## 2. Single source of truth

| Subject | Authoritative file / location | Agent action |
|---|---|---|
| Site name, form URLs, global navigation | `src/config/site.ts` | Keep all organisation identity and routes central here. |
| Home copy/data | `src/config/content/home.ts` | Add and edit Home section data here; no duplicate inline copy in components. |
| Brand files | `public/brand/` | Use the supplied official logo assets only. |
| Tokens and global visual rules | `src/styles/tokens.css`, `src/styles/global.css` | Remove card-border behaviour centrally. |
| Standard page hero | `src/components/hero/PageHero.astro` | Make this the consistent full-width internal hero. |
| Layout | `src/components/layout/Header.astro`, `Footer.astro` | Apply the brand/header/footer requirements below. |
| Imported Aceternity components | `src/components/ui/*.tsx` | Do not redesign vendor component geometry. Use only where contextually appropriate. |
| Long-form published content | `src/content/` | One Markdown item per article/project/news item. |

---

## 3. Brand, header, and footer — P0

### Brand assets

- **Header mark:** `public/brand/ukabcs-mark.png` (extracted circular DNA/molecule emblem).
- **Footer lock-up:** `public/brand/ukabcs-logo-full.png`.
- The footer may not show a large white image canvas around the logo. Crop/render only the visible logo artwork with transparent background or use an equivalent transparent full-logo asset derived from the supplied official logo.

### Header tasks

- [ ] Header spans full viewport width; it is not a floating/boxed shell.
- [ ] Use only mark + literal text `UKABCS` in the header brand lock-up.
- [ ] Do not place the long organisation tagline in the header.
- [ ] Preserve responsive navigation and mobile menu.
- [ ] Reorder header navigation so **Programmes & Grants** appears before **News & Insights**.
- [ ] Parent navigation entry must navigate to the Programmes & Grants landing page; it must not be an inert menu trigger.
- [ ] Use a calm scroll/resizing effect only if it does not box the header or create layout shift.

### Footer tasks

- [ ] Use transparent/cropped full UKABCS logo asset, not the white-background source image.
- [ ] Retain the agreed footer columns and legal/accessibility links.
- [ ] Recheck every footer route; remove or flag invalid destinations.

**Definition of done:** Desktop and mobile screenshots prove the header is full-width, logo treatment is correct, and the footer logo has no white rectangular canvas.

---

## 4. Home page — P0, complete before any other page

### Hero

- [ ] Full-viewport-width and visually dominant hero; no boxed/narrow header treatment.
- [ ] Use the approved image supplied/selected from the existing Home/Site123 source. If an exportable image file is not supplied, leave the image reference as `PENDING_UKABCS_HERO_IMAGE`; do not scrape a protected Site123 manager asset.
- [ ] Make the science matrix / grid / visual texture and navy–blue–teal gradients clearly visible behind the hero copy.
- [ ] Hero copy must identify **UKABCS / UK Organisation for Biotechnology and Computational Science** and its actual purpose. Final hero headline/subheadline must be confirmed against UKABCS wording; do not retain generic demo language.
- [ ] Primary action: Programmes & Grants. Secondary action: Memberships.
- [ ] Keep motion restrained and respect `prefers-reduced-motion`.

### Required Home section order

1. **Welcome / About UKABCS**
   - Editorial introduction with image and route to `/about-us`.
   - Use the existing approved About summary; do not duplicate the entire About page.
2. **Why Become a UKABCS Member?**
   - Use supplied membership narrative and route to `/memberships`.
3. **Mission & Vision**
   - Two deliberate visual panels with scientifically relevant imagery, not generic icon boxes.
4. **What We Do**
   - Fund research; build capacity; facilitate partnerships; promote transparent, equitable governance.
5. **Join Our Community / Join Our Efforts**
   - Dedicated community CTA for researchers, universities, institutions, and industry.
6. **Programmes & Grants**
   - Present all approved programme categories:
     - Funding Programmes & Grants
     - Events & Educational Support
     - Scientific Software Development Support
     - Women Researchers Support
     - Publications & Conferences Support
     - Partnerships & Collaborations
     - Application & Review Portals
     - Funded Projects
     - Researcher Memberships
   - Card action is `Explore …`; do not show `Apply for grant` on the card. Application belongs inside an individual grant page.
7. **Our Achievements**
   - Separate full section with these current values only if confirmed: 3000 researchers supported, 5 countries reached, 8 funded projects, 10 strategic partnerships.
8. **General Support**
   - Dedicated full-width section: “Raise your request; if UKABCS can support or route it, we will respond with the next step.”
   - Button can point to `siteConfig.clientFlow.generalSupportForm`.
   - Do not promise funding, acceptance, or a response SLA.
9. **Support Scientific Progress / Donation**
   - Dedicated section that states the mission and routes to the approved donation form. Do not add payment processing until authorised.
10. **Partners ribbon**
   - Horizontal compact strip: circular partner logo above/beside small partner name.
   - Do not use initials as final logos. Use `PENDING_PARTNER_LOGOS` placeholders until logo files arrive.
11. **Ready to Join Us**
   - A final full-width page section, not a card.
   - Primary `Apply Portal` action and a separate `Contact Us` button. Contact target remains a UI-only placeholder until UKABCS supplies the final destination.

### Home component mapping

| Need | Approved component candidate |
|---|---|
| Hero | `ImagesSlider` + controlled visual grid/gradient |
| Programme showcase | `Carousel`, `FocusCards`, or `Apple Cards` only after Astro-compatible image adapter |
| High-impact support/donation | `WobbleCard` with no border |
| Community network | `DraggableCard` only if it serves content; do not add it merely for decoration |
| Partner/person hover names | `AnimatedTooltip` |
| Choice prompt | `AnimatedModal`; never for full documents |
| Mobile quick navigation | `FloatingDock`, optional and must not hide footer actions |

### Home acceptance criteria

- [ ] No hover border appears on Home cards.
- [ ] All CTAs have real routes or clearly marked pending targets.
- [ ] No fake partner logo, testimonial, discount, grant, or statistic exists.
- [ ] Hero, every required section, and final CTA are present in the agreed order.
- [ ] Desktop 1440px, tablet 768px, and mobile 390px reviewed.
- [ ] `npm.cmd run build` passes.

---

## 5. Shared components and global visual cleanup — P1

- [ ] Remove `border-color` hover transitions from `.card-aceternity`, `.flat-surface`, and individual cards where they create visible outlines.
- [ ] Preserve calm motion and accessibility; no effect may obstruct reading.
- [ ] Replace emoji-like icons with Lucide/Tabler equivalents.
- [ ] Make `PageHero.astro` the sole internal hero pattern: full width, strong background image, navy overlay, breadcrumb, title, description, optional CTA.
- [ ] Create one reusable **FullWidthResearchCTA** section for: “Accelerate your scientific research with UKABCS”, application portal, and grants exploration. It is a full section, never a card.
- [ ] Put the shared CTA at the agreed end point of every public content page.

---

## 6. About page — P1 after Home approval

**Existing direction to preserve:** editorial About layout, Values, strategic priorities, programmes, and governance are promising and should be aligned, not replaced with generic cards.

- [ ] Convert About hero to the shared full-width hero.
- [ ] Use scientifically relevant, licensed/supplied images for Mission and Vision.
- [ ] Keep “How we work / Values” as a reusable organisation-values section.
- [ ] Audit “Building the conditions for better science” and every strategic-priority statement: retain only text that belongs to About.
- [ ] Keep Programmes with clear purpose and Governance/Transparency sections; verify routing.
- [ ] Replace card-style “Accelerate your scientific research with UKABCS” with shared full-width CTA.

**Input needed:** final approved About copy and approved Mission/Vision images if the current images are not acceptable.

---

## 7. Memberships — P2 after About approval

- [ ] Add a full-width Membership hero with supplied relevant image.
- [ ] Keep `Select the membership plan` concept, subject to approved tiers/prices.
- [ ] Remove the current “In-kind research credit members” framing unless UKABCS approves it.
- [ ] Create **Membership Benefits / Discover partner benefits** section explaining what membership enables.
- [ ] Add `Discover` route to a dedicated benefits directory, not a modal.
- [ ] Directory table/card requirements per partner: circular logo, name, external link, service category, membership benefit/discount percentage, terms/effective period.
- [ ] Do not publish a benefit or discount until UKABCS provides the agreement value and validity condition.
- [ ] Use real icons only; no emoji icons.
- [ ] Add shared full-width research CTA at the agreed page end.

**Input needed:** membership tier data, partner logos, URLs, services, discounts, terms, and validity windows.

---

## 8. Programmes & Grants landing page — P2

- [ ] Rename/position consistently as **Programmes & Grants** (final label may be “Our Programmes & Grants” after UKABCS confirmation); do not label the page merely `Open Calls` or `Overview`.
- [ ] Full-width shared hero.
- [ ] Ensure top-level header link opens this landing page.
- [ ] Preserve/repair the six-step section where factually valid.
- [ ] Present each grant/programme card with image, programme/category, short purpose, status, and `Explore grant/programme`.
- [ ] No `Apply` button on a listing card.
- [ ] Use no visible card hover border.
- [ ] Apply action appears only inside a single grant’s dedicated route.
- [ ] Keep Software Development, Education, Publications, Women Researchers pages aligned to this parent system; do not invent missing Publications content.

### Grant detail page contract (mandatory for every published grant)

- [ ] Dedicated route, not modal.
- [ ] Hero, overview, key dates/status, eligibility, funding/support, application process, selection process, FAQ, and related documents.
- [ ] Stable end-of-page action area:
  - Application Portal / Apply Here button
  - Attached documents list
  - Application form
  - Timeline / project timeline
  - Grant agreement
  - Guide notes
- [ ] Omit an unavailable document explicitly; never create fake files.

**Input needed:** one complete grant pack at a time (content, dates, status, eligibility, documents, image, final apply URL).

---

## 9. News, articles, and content pages — P3

- [ ] Position `News & Insights` after `Programmes & Grants` in navigation.
- [ ] Give News landing page shared full-width hero.
- [ ] Every article/news card: image, category, date, title, excerpt, `Read full article`.
- [ ] Article opens its dedicated route.
- [ ] Article body must be readable editorial content with no selection/hover effect or card border around the writing surface.
- [ ] End each relevant article/grant with shared CTA and contextual links; not a generic hover card.
- [ ] Article schema requires featured image before publish.

**Input needed:** final articles, author/date, featured image, category, related articles, and any references/downloads.

---

## 10. Remaining page audit — P3/P4

- [ ] Funded Projects: full-width hero, real project content, images, outcomes; each project dedicated route.
- [ ] Partnerships: real partner assets and authorised public wording only.
- [ ] Governance/Transparency/Legal: formal low-motion layouts, full-width hero, no decorative card overload.
- [ ] Contact/Accessibility: correct legal and contact values from `site.ts` only.
- [ ] Review every existing internal/footer/header link for 200 generated route.

---

## 11. Inputs UKABCS will provide before their relevant task starts

1. Approved Home background/hero image exported from Site123 or separately supplied.
2. Official transparent full logo if available; otherwise approval to crop the supplied full-logo source.
3. Partner logos for Home ribbon and Membership benefits directory.
4. Partner benefits: website URL, service, discount percentage, eligibility, dates/terms.
5. Membership tiers/content and How to Join materials.
6. One grant package at a time: content + documents + image + dates + final application URL.
7. News/article packages: content, author, date, category, featured image, references.
8. Publication/conference support content (currently incomplete; do not invent).

---

## 12. Mandatory implementation checks

```powershell
npm.cmd run build
git diff --check
```

For every page accepted locally, provide:

- route tested;
- desktop, tablet, mobile evidence;
- exact content inputs used;
- all pending content/assets;
- build result;
- changed files;
- whether work is only local, committed, pushed, deployed, or production accepted.

## 13. Explicit out of scope until separately authorised

- Publishing/deploying the website.
- Making payment/donation processing live.
- Creating or claiming partner discount agreements.
- Creating or uploading grant documents.
- Writing missing Publications/Conference content as fact.
- Scraping or bypassing the Site123 manager.
- Replacing Astro with Next.js.