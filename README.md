# StoopidCartoons website starter

A multilingual Astro landing site for **StoopidCartoon** built for static hosting on **GitHub Pages**.

## Why this stack

This project uses **Astro** because it outputs static HTML by default, which is excellent for performance and SEO. Astro also supports multilingual routing and can be deployed to GitHub Pages using GitHub Actions.

## Included

- modern responsive landing page
- dedicated pages for showcase, privacy policy, terms, and contact
- dedicated page route for each app or game
- 11-language switcher
- alternate hreflang links
- canonical URLs
- Open Graph + Twitter metadata
- JSON-LD structured data
- sitemap generation
- GitHub Pages deployment workflow
- clean direct contact links instead of a contact form

## Languages included

- English (`en`)
- German (`de`)
- Serbian (`sr`)
- Bosnian (`bs`)
- Croatian (`hr`)
- French (`fr`)
- Italian (`it`)
- Spanish (`es`)
- Portuguese (`pt`)
- Russian (`ru`)
- Turkish (`tr`)

## Before you publish

Update these placeholders first:

### 1) Site metadata
Edit `src/config/site.ts`

Replace:
- company emails
- Play Store developer URL
- GitHub / LinkedIn / X / Instagram / YouTube links
- final site URL if needed

### 2) Product showcase
Edit `src/data/releases.ts`

Replace the dummy apps and games in `releases` with your real catalog entries.
Each item already supports its own dedicated product page.

Example:

```ts
export const releases = [
  {
    name: 'My Real App',
    summary: 'Short product summary for the landing page.',
    longDescription: ['First paragraph.', 'Second paragraph.'],
    kind: 'app',
    status: 'Live',
    category: 'Utilities',
    platforms: ['Android'],
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.example.app',
    websiteUrl: 'https://stoopidcartoons.com/en/showcase/',
    tags: ['Android', 'Utility', 'Fast'],
    featured: true,
    accent: 'red',
    slug: 'my-real-app',
  },
];
```

### 3) Legal copy
Starter legal content is included so the pages are ready structurally, but you should replace it with your final legal text.

Main translation file:
- `src/utils/translations.ts`

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages deployment

### If you use a custom domain
Set these GitHub repository variables:

- `SITE_URL` → your full domain, for example `https://stoopidcartoons.com`
- `BASE_PATH` → `/`

Also create `public/CNAME` with your custom domain if you want GitHub Pages to serve it directly.

### If you use a project Pages URL
Example: `https://yourname.github.io/stoopidcartoon-site/`

Set:
- `SITE_URL` → `https://yourname.github.io`
- `BASE_PATH` → `/stoopidcartoon-site`

Then update `public/robots.txt` sitemap URL if needed.

## SEO notes

This starter already includes:

- semantic HTML
- crawlable static pages
- canonical tags
- hreflang alternate links
- structured data
- social preview image
- sitemap generation

For even stronger SEO after launch:
- replace placeholder legal text
- add real product entries
- connect Google Search Console
- submit the sitemap
- add real store page screenshots and copy
- add per-product landing pages later

## Suggested next step

After this starter, build a second phase with:
- real app/game screenshots
- individual product pages
- optional blog/news page
- app-specific privacy policy pages
