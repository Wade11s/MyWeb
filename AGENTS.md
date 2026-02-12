# Repository Guidelines

## Project Structure & Module Organization
This repo is an Astro site with small React islands.
- `src/pages/`: route files (`index.astro`, `about.astro`, `blog/[slug].astro`).
- `src/layouts/`: shared page shells (for example `Layout.astro`).
- `src/components/`: Astro components plus React components in `src/components/react/`.
- `src/content/`: Markdown content collections (`blog/`, `publications/`).
- `src/data/`: site/profile data (`src/data/profile.ts`).
- `src/styles/`: global styling (`src/styles/global.css`).
- `public/`: static assets served as-is (for example `public/cv.pdf`).
- `docs/`: planning notes and internal docs.

## Build, Test, and Development Commands
- `bun install`: install dependencies from `bun.lock`.
- `bun run dev`: start local dev server.
- `bun run build`: produce production output in `dist/`.
- `bun run preview`: serve the built site locally for verification.
- `bun run astro check`: run Astro/TypeScript project checks.

## Coding Style & Naming Conventions
- Use TypeScript/Astro ESM with 2-space indentation.
- Follow existing formatting: semicolons in TS/TSX, concise modules, and clear imports.
- Use `PascalCase` for components (`PostCard.tsx`, `SiteHeader.astro`).
- Use lowercase route names and Astro dynamic route syntax (`[slug].astro`).
- Use kebab-case for Markdown content filenames (for example `designing-benchmarks-that-matter.md`).
- Keep shared design tokens and global styles in `src/styles/global.css`.

## Testing Guidelines
There is no dedicated automated test suite yet. Treat these as required pre-PR checks:
- `bun run astro check`
- `bun run build`
- Manual route smoke test: `/`, `/about`, `/blog`, `/publications`, `/cv`, `/contact`.

When adding non-trivial logic, include lightweight tests alongside the feature (for example `*.test.ts`) and document how to run them in the PR.

## Commit & Pull Request Guidelines
- Match current history style: short, imperative commit subjects (for example `Fix internal links for GitHub Pages base path`).
- Keep commits focused to one logical change.
- PRs should include: purpose, key file/path changes, verification steps, and screenshots for UI changes.
- Link related issues/tasks and note any `astro.config.mjs` site/base changes that affect GitHub Pages deploys.
