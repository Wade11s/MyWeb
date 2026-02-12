# Personal Website Design (Astro + React)

## Scope
- Language: English only (v1)
- Style: Modern academic/lab visual style
- Structure: About, Publications, Blog, CV, Contact
- Hosting: GitHub Pages

## Architecture
- Astro static site with file-based content collections
- Minimal React usage for reusable UI cards
- No backend required for v1

## Content Model
- `src/content/blog/*.md`: posts with title/date/summary/tags/draft
- `src/content/publications/*.md`: publication entries and metadata
- `src/data/profile.ts`: shared profile/site metadata

## Routing
- `/` home
- `/about`
- `/publications`
- `/blog`
- `/blog/[slug]`
- `/cv`
- `/contact`

## Reliability
- Build-time schema validation via `astro:content` + Zod
- Static generation for all routes
- GitHub Actions deploy workflow using Bun

## Notes
- Replace placeholder profile links and personal metadata.
- Set `site` in `astro.config.mjs` to your real GitHub Pages domain.
- Add your real CV PDF at `public/cv.pdf`.
