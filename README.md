# Molasses Barber and Beauty

A production React and Vite implementation of the Molasses Barber and Beauty landing page, built from a Stitch generated design. React, Vite, JavaScript, and CSS Modules for structure and styling; GSAP with ScrollTrigger for large scroll and entrance motion; Lenis for smooth scroll; Framer Motion for small UI interactions like the mobile drawer, the service filter pill, and the FAQ accordion.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Where things live

- `src/data/business.js` is the single source of truth for the phone number, address, and CTA links. Public listings currently disagree on the shop phone number (the number originally supplied was (404) 373-1760, but current public listings support (404) 373-1860). This file uses (404) 373-1860. If the owner confirms a different number, change it once here.
- `src/data/business.js` also holds hours. Public directories disagree on the schedule, so the UI shows a neutral note asking people to call rather than a guessed schedule. Fill in `hours.schedule` once the owner confirms hours, and set `hours.verified` to `true`.
- `src/data/services.js`, `faq.js`, `navigation.js`, `testimonials.js`, and `media.js` hold the remaining content. Nothing is hardcoded into components.
- `src/data/testimonials.js` is explicitly placeholder content (`placeholder: true` on every entry). Replace with verified, sourced reviews as soon as they are available.
- `src/data/media.js` currently points at the placeholder image URLs from the Stitch design. Swap in real shop photography when it is ready; every image reference lives in this one file.

## Architecture notes

- One Lenis instance is created in `src/hooks/useLenis.js` and synced to GSAP's ticker so Lenis and ScrollTrigger agree on scroll position. There is no second scroll system anywhere in the app.
- `usePrefersReducedMotion` disables Lenis and skips GSAP entrance and reveal animations when the user has reduced motion turned on. Content and navigation stay fully usable either way.
- GSAP owns large scroll driven motion (the hero entrance timeline, the featured work gallery reveal using a single `ScrollTrigger.batch` rather than one trigger per image). Framer Motion owns small UI level interactions (mobile drawer, filter pill, FAQ accordion). Plain CSS handles hover and focus states.
- Design tokens (color, type, spacing, radii) live in `src/styles/tokens.css` as CSS custom properties, carried over from the Stitch palette.

## Known gaps to close with the owner

- Confirm the phone number.
- Confirm operating hours.
- Replace placeholder testimonials with verified reviews.
- Replace placeholder imagery with real shop photography.
- Confirm the full service menu and whether pricing should be published.
