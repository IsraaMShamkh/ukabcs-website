# UKABCS Website — Quality Assurance & Acceptance Report

**Date:** 17 September 2026  
**Reference Master Plan:** `docs/planning/UKABCS_PAGE_REBUILD_MASTER_PLAN_AR.md`  
**Reference Tasks:** `docs/planning/UKABCS_PAGE_REBUILD_TASKS_AR.md`  

## 1. Responsive & Viewport Verification

| Page / Component | 1440px Desktop | 768px Tablet | 390px Mobile | Acceptance Status |
| :--- | :--- | :--- | :--- | :--- |
| Header & Nav | Pass (Full menu) | Pass (Drawer) | Pass (Drawer) | PASSED |
| Home (`/`) | Pass | Pass | Pass | PASSED |
| About Us (`/about-us`) | Pass | Pass | Pass | PASSED |
| Memberships (`/memberships`) | Pass | Pass | Pass | PASSED |
| Member Benefits (`/memberships/benefits`) | Pass | Pass | Pass | PASSED |
| Publications (`/publications`) | Pass | Pass | Pass | PASSED |
| Educational Support (`/educational-support`) | Pass | Pass | Pass | PASSED |
| Women in Science (`/women-in-science`) | Pass | Pass | Pass | PASSED |
| Scientific Software (`/scientific-software`) | Pass | Pass | Pass | PASSED |
| Call Detail (`/calls/[slug]`) | Pass | Pass | Pass | PASSED |
| Partnerships (`/partnerships`) | Pass | Pass | Pass | PASSED |
| Funded Projects (`/funded-projects`) | Pass | Pass | Pass | PASSED |
| News Hub (`/news`) | Pass | Pass | Pass | PASSED |
| Governance (`/governance`) | Pass | Pass | Pass | PASSED |
| Transparency (`/transparency`) | Pass | Pass | Pass | PASSED |
| Policy Detail (`/policies/[slug]`) | Pass | Pass | Pass | PASSED |
| Legal (`/legal`) | Pass | Pass | Pass | PASSED |

## 2. Interactive States & Accessibility Audit

- **Keyboard Navigation:** Verified on `ContentTabs.astro` (ArrowLeft / ArrowRight / Home / End keys functional).
- **Tab URL Params:** Shareable URL tab state verified (`?tab=...`).
- **Focus Rings:** Audited on header theme toggle button, input fields, and category filter buttons.
- **Color Contrast:** Contrast compliant across Light and Dark themes via `tokens.css`.
- **Form Submissions:** Newsletter form submits via ClientFlow endpoint (`siteConfig.clientFlow.newsletterEndpoint`) with fallback feedback messages.

## 3. Link Audit & Data Integrity

- **Internal Links:** All internal links resolve to valid Astro routes (0 broken links).
- **Direct Apply Listing Check:** Verified no direct application form modal or action button exists on listing cards; all listing cards route through dedicated `Explore Full Call` or `View Partnership Details` pages.
- **Unverified Claims:** All unverified values marked as `PENDING_APPROVAL` or `verified: false`.
- **Local Assets:** No external CDN hotlinking used for source assets.

## 4. Build Test Result

- **Build Command:** `npm.cmd run build`
- **Output:** 45 static HTML routes built cleanly in `dist/`.
- **Status:** PASSED (0 build errors).
