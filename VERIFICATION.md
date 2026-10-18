# V2 verification report

## Changes and modified files

- `src/data/siteContent.js`: exact WhatsApp enquiry message, Land Sales image and complete gallery replacement with descriptive AI-illustration alt text.
- `src/data/imageDimensions.js` (new): intrinsic dimensions for supplied WebP assets.
- `src/components/Header.jsx`: passive scroll listener, animation-frame coalescing, cleanup and translucent scrolled state; intrinsic image metadata.
- `src/App.jsx`: one-time IntersectionObserver section entrances with cleanup and reduced-motion/unsupported-browser guards.
- `src/components/Contact.jsx`, `Footer.jsx`: consistent telephone SVG icons and accessible phone links; contact WhatsApp number uses centralized enquiry URL.
- `src/components/Gallery.jsx`: explicit AI-generated context while retaining original disclaimer.
- `src/styles/main.css`: 250ms header transition; 550ms, 16px entrances; 3px service-card hover lift; 1.025 gallery image zoom; phone icon alignment. Existing geometry, palette and typography retained.
- `scripts/site.test.mjs`: exact enquiry URL/text assertion and supplied-asset coverage.
- `IMAGE-SOURCES.md`, `README.md`, this report: updated provenance, usage and verification notes.
- `public/images/`: imported seven files listed below; removed four unused old gallery-only images (bungalow, grey, brick, field). Existing modern, land and consultancy assets retained for their other sections.
- `dist/`: regenerated production output.

## Imported image names

1. land-sales.webp
2. gallery-01-brick-duplex.webp
3. gallery-02-cream-bungalow.webp
4. gallery-03-grey-duplex.webp
5. gallery-04-residential-estate.webp
6. gallery-05-open-land.webp
7. gallery-06-modern-duplex.webp

Copied locally without re-encoding or upscaling. Source/deployed filenames match. These supplied illustrations are only 463–467px wide, which limits sharpness on larger displays.

## Commands executed

- `npm run build`: passed (Vite 7.3.7).
- `npm run lint`: passed.
- `npm test`: four tests passed.
- `npm run preview`: served the production build successfully at http://127.0.0.1:4173/ .
- SHA-256 source/import comparisons: all seven imported assets identical to supplied originals.

## Actual browser checks

- Exact requested message appears in all three rendered WhatsApp links; destination number is unchanged.
- Telephone links remain `tel:+2349032325595`; inline SVG icons appear beside the number in Contact and Footer.
- Header has sticky positioning and top 0 after scrolling. Desktop height remains 105px before/after scroll; scrolled style is rgba(255,255,255,0.88) with blur(12px).
- Gallery and services anchor targets remain below the header.
- All eleven rendered image instances load, including Land Sales and all six distinct new gallery illustrations; no old gallery-only files appear in the gallery DOM.
- No horizontal overflow at 375, 768 and 1440px. Original two-column phone and three-column tablet/desktop gallery layouts are retained.
- Mobile menu opens with expanded state, closes with Escape, and closes after selecting Our Services.
- Section entrance classes appear as sections enter view. Source review confirms that the observer unobserves each revealed target to prevent repeated entrances.
- Reduced-motion safeguards inspected in the browser CSSOM and source: motion rules apply only to no-preference, reduce disables transitions/animations and smooth scrolling, and JS skips reveal observation for reduced motion. The browser reports no-preference; reduced-motion emulation was unavailable, so an actual reduced-motion device session was not tested.
- No error-level console messages returned.

## Preview and remaining limitations

From this project folder run `npm run build`, then `npm run preview`, and open the URL printed by Vite. The preview process used for checks was stopped at handoff.

No new implementation issues were found. The previously documented sandbox restriction on Vite's development dependency optimizer remains; development mode was not re-tested in V2. Use a normal local terminal for `npm run dev`. SITE_URL still awaits a production domain. No deployment was performed.


## About image replacement verification

Replaced only the About image reference/alt text and its intrinsic image metadata; updated IMAGE-SOURCES.md. New local asset: public/images/about-residential-estate.webp (800 x 600, 117,720 bytes). Production build and lint passed. Browser inspection confirmed successful loading, centered object-fit cover, 4px border radius, existing desktop height 355px and mobile height 280px. Visually checked desktop and 375px mobile framing; no horizontal overflow or console errors. No other styling, content, animations or functionality changed. No issues encountered; no deployment performed.
