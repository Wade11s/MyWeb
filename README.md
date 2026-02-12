# Personal Academic Website (Astro + React + Bun)

This project is a personal academic website with a lightweight blog and publications section.

## Stack
- Astro (static site generation)
- React (UI components where useful)
- Bun (package manager and scripts)
- GitHub Pages (deployment)

## Run Locally
```bash
bun install
bun run dev
```

## Build
```bash
bun run build
bun run preview
```

## Checks
```bash
bun run check
```

## Content Editing
- Profile and links: `src/data/profile.ts`
- Blog posts: `src/content/blog/*.md`
- Publications: `src/content/publications/*.md`

## Pages
- `/` Home
- `/about`
- `/publications`
- `/blog`
- `/cv`
- `/contact`

## GitHub Pages Setup
1. Set `site` in `astro.config.mjs` to your real domain, for example:
   - `https://your-username.github.io` (user site)
   - `https://your-username.github.io/<repo>` (project site)
2. Push to `main`.
3. In GitHub repo settings, ensure Pages source is set to "GitHub Actions".
4. The workflow at `.github/workflows/deploy.yml` will build and deploy automatically.

## Notes
- Add your CV file at `public/cv.pdf`.
- Replace placeholder publication and blog content with your own.
