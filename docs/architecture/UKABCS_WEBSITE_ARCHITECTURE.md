# UKABCS Website Architecture

## Rule of operation

Build page by page: Home, About, programme and grant sections, memberships, projects, news, governance, then partnerships. A page is composed only from the approved section inventory and content supplied or approved for that page.

## Single source of truth

| Concern | Authoritative location | Rule |
|---|---|---|
| Organisation name, contacts, navigation, forms | `src/config/site.ts` | Never hard-code in pages. |
| Home copy, CTAs, programmes, partners, achievements | `src/config/content/home.ts` | Components render this data. |
| Brand assets | `public/brand/` | `ukabcs-mark.png` = header mark; `ukabcs-logo-full.png` = footer lock-up. |
| Design tokens | `src/styles/tokens.css` | Colours, type, space, radius and shadows. |
| Imported Aceternity source | `src/components/ui/*.tsx` | Preserve the imported geometry and animation. |
| UKABCS composition | `src/components/react/UKABCSAceternitySections.tsx` | Render content from config, not inline. |
| Long-form content | `src/content/` | One Markdown item per published entry. |

## Brand rule

Header uses the mark plus exactly `UKABCS`. Footer uses the supplied complete UKABCS logo and description. Do not use the old placeholder logo.

## Approved components

| Component | File | Approved use |
|---|---|---|
| Images Slider | `ui/images-slider.tsx` | Home signature hero only |
| Carousel | `ui/carousel.tsx` | Programmes, grants, events |
| Focus Cards | `ui/focus-cards.tsx` | Research and partner collections |
| Wobble Card | `ui/wobble-card.tsx` | Limited feature calls |
| Draggable Card | `ui/draggable-card.tsx` | Home collaboration wall only |
| Animated Testimonials | `ui/animated-testimonials.tsx` | Verified endorsements only |
| Animated Tooltip | `ui/animated-tooltip.tsx` | People / committee avatars |
| Animated Modal | `ui/animated-modal.tsx` | Choice prompts only; never full grants or articles |
| Floating Dock | `ui/floating-dock.tsx` | Optional quick navigation |
| Apple Cards / Resizable Navbar / Sidebar | `ui/*.tsx` | Imported; reserve for compatible React/portal work |

## Home order

1. Hero: UKABCS background image, statement and CTAs.
2. Membership: why join UKABCS.
3. Mission and Vision.
4. What We Do.
5. Programmes and support categories.
6. General Support: request review; no promise of funding or approval.
7. Partner ribbon: compact logo above name; placeholder paths remain until official partner logos arrive.
8. Achievements: only UKABCS-approved figures.
9. CTA and footer.

## Page-by-page board

| Order | Page | Required input | Output |
|---:|---|---|---|
| 1 | Home | Partner logos and corrected figures | Homepage acceptance |
| 2 | About | Final organisation text | Editorial About page |
| 3 | Memberships | Company images, tiers, How to Join, articles | Membership landing and articles |
| 4 | Grants and programmes | One package per call/year | Index and factual detail page |
| 5 | Projects | Images and outcomes | Listing and project pages |
| 6 | News | Mandatory article image and text | Dedicated article routes |
| 7 | Governance | Board, policies, reports | Formal governance pages |
| 8 | Partnerships | Logos and public wording | Partner pages |

## Delivery states

`Draft content` -> `UKABCS approved content` -> `Local build passed` -> `Browser acceptance` -> `Committed` -> `Pushed` -> `Deployed`.