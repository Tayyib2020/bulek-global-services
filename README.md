# Bulek Global Services Ltd website

React + Vite + plain CSS corporate landing page. No backend or paid services. Node.js 20.19+ or 22.12+ is required; Node 24 was used here.

## Run locally

Open a terminal in this folder:

```sh
npm install
npm run dev
```

Open the localhost URL printed by Vite. Production commands:

```sh
npm run lint
npm test
npm run build
npm run preview
```

`npm ci` can replace `npm install` for reproducible installs with the committed lockfile. Only React and React DOM are runtime dependencies. ESLint and Vite are development tools.

## Content and structure

- `src/data/siteContent.js`: verified company information, navigation, services, gallery descriptions and WhatsApp enquiry message.
- `src/components/`: Header (also shared Logo, Icon, Photo, SectionTitle), Hero, About, Services, Gallery, Contact and Footer.
- `src/styles/main.css`: all styling, responsive breakpoints, focus and reduced-motion rules.
- `src/App.jsx`: page composition and verified RealEstateAgent structured data.
- `public/images/`: locally served stock photographs and seven supplied AI-generated WebP illustrations, served locally.
- `public/favicon.svg`: original architectural icon.
- `scripts/domain.mjs`: domain metadata, sitemap and robots generation.
- `scripts/site.test.mjs`: lightweight contact, navigation, asset and disclosure tests.
- `IMAGE-SOURCES.md`: image source links, credits, licence and provenance limitations.

The SVG logo is original vector artwork rendered by the Logo component. Gallery images are static and labelled illustrative. The phone and email open device handlers; WhatsApp opens safely in a new tab with an editable enquiry message. No message is automatically sent. The menu supports Escape, outside click, focus departure and link selection dismissal.

## Domain and metadata

No domain has been invented. Set `SITE_URL` to the final HTTPS origin when available, for example in Vercel environment settings, then rebuild. The build generates canonical, Open Graph URL/image, `sitemap.xml`, and a sitemap reference in `robots.txt`. Without `SITE_URL`, those domain-dependent fields are omitted and the sitemap is removed. Basic title, description, Open Graph text, favicon, crawl permission and structured data are already included.

## Deploy through GitHub and Vercel

1. Create a GitHub repository and commit this project's files, including `package-lock.json`. Exclude `node_modules`, `.env.local` and `dist` (already in `.gitignore`).
2. In Vercel choose Add New Project, import the repository and select the folder containing this README as Root Directory.
3. Set Framework Preset to Vite, Build Command to `npm run build`, and Output Directory to `dist`.
4. Set `SITE_URL` when the final public origin is known. Keep it an HTTPS origin without extra paths, query parameters or credentials.
5. Deploy when authorized. Connect a custom domain later in project settings, update `SITE_URL`, and redeploy. No routing rewrites or backend are needed for this single page.

No deployment was made as part of implementation.

## Verification and limitations

Production build, ESLint and the Node tests passed during implementation. See `VERIFICATION.md` for browser checks and environment limitations. This is not a full accessibility audit or a field Core Web Vitals measurement.

The restricted implementation sandbox blocks Vite's esbuild development dependency optimizer while reading parent directories. Standard `npm run dev` could not be fully verified here. Run it in a normal local terminal; production `npm run build` and `npm run preview` worked in this environment. No unsafe permissions bypass or nonstandard development workaround is included.

V2 uses the seven supplied AI-generated illustrations for Land Sales and the complete gallery. The unchanged hero, About and other service images remain illustrative international Pexels photographs. No image represents an actual Bulek property or verified location. See IMAGE-SOURCES.md.

V2 adds a scroll-dependent translucent sticky header, one-time section and restrained hero entrances, subtle card/image hover transitions, and consistent phone-link icons. Motion is gated by reduced-motion preferences; sections default to visible and IntersectionObserver only adds an entrance animation when supported. No animation libraries were added.
