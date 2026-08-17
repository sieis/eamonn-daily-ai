# Daily AI

The home for the daily AI news automation. One page per article, published as a static
site. The scheduled task opens PRs that drop markdown files into `src/content/articles/`;
Netlify builds and deploys them.

Built with [Astro](https://astro.build).

## Running it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the built site locally
```

That is the whole workflow. There is no database, no CMS, and no server — the site is
plain HTML by the time it reaches Netlify.

## What's here

| Page                  | Route                | What it does                                                        |
| --------------------- | -------------------- | ------------------------------------------------------------------- |
| Home                  | `/`                  | Hero + the 12 most recent articles as cards.                         |
| Article               | `/articles/<slug>/`  | One page per story, generated from the markdown frontmatter.         |
| Archive               | `/archive/`          | Every article by title, grouped by year, with keyword search.        |

The archive search filters titles client-side with plain JavaScript — no search index to
build or keep in sync. It will comfortably handle a few thousand entries.

## Adding articles

See **[CONTENT.md](./CONTENT.md)** — file naming, the full frontmatter schema, and how each
field maps back to the 🗞️ AI News Tracker Notion database.

The short version: add `src/content/articles/YYYY-MM-DD-some-slug.md` with the right
frontmatter and open a PR. Bad frontmatter fails the build with the offending file named,
so a broken PR can't silently publish a broken page.

## Layout

```
src/
  content/articles/     # one markdown file per article — this is the whole "database"
  content.config.ts     # frontmatter schema (edit here to add a field)
  pages/                # index.astro, archive.astro, articles/[...slug].astro
  components/           # Header, Footer, ArticleCard
  layouts/BaseLayout.astro
  lib/articles.ts       # sorting, date formatting, source-domain helper
  styles/global.css     # design tokens + shared styles
  site.config.ts        # title, tagline, CTA text, social links
public/favicon.svg
public/eamonn-cottrell.jpg   # hero headshot (see below)
```

## Editing the site itself

- **Title, tagline, CTA copy, social links** → `src/site.config.ts`
- **Hero intro video** → `intro.videoId` in `src/site.config.ts` (just the YouTube id)
- **Headshot** (in the "Work with me" CTA) → replace `public/eamonn-cottrell.jpg`, or point
  `site.authorPhoto` at a different file in `public/`. It is cropped to a circle, so a
  square source looks best.
- **Colors, fonts, spacing, radii** → the `:root` tokens at the top of `src/styles/global.css`
- **Adding a frontmatter field** → `src/content.config.ts`, then render it in
  `src/pages/articles/[...slug].astro`

## Design

Light canvas, near-black ink, one violet→blue gradient carrying every accent, Inter with
tight tracking on the headlines, and rounded cards that lift on hover. Content fades up as
it scrolls into view, and the whole thing respects `prefers-reduced-motion`. Inspired by
[jitter.video](https://jitter.video).

## Deploying to Netlify

`netlify.toml` is already set up:

- Build command: `npm run build`
- Publish directory: `dist`
- Node: 22

Point Netlify at this repo and it will pick that up with no further configuration. Once
the real domain exists, update `site` in `astro.config.mjs` so canonical URLs and OG tags
are correct.
