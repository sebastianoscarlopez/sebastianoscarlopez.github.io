# AGENTS.md

Sebastian's personal website — Next.js static site deployed to GitHub Pages.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** (CSS-first config via `@tailwindcss/postcss`, no `tailwind.config.ts`)
- **pnpm** (lockfile: `pnpm-lock.yaml`)

## Commands

```bash
pnpm dev          # dev server (turbo)
pnpm build        # static export → out/
pnpm lint         # ESLint (flat config: eslint.config.mjs)
```

## Architecture

- No `src/` directory — pages live in `app/`
- Path alias `@/*` → `./*`
- Static export to `out/` (`next.config.ts`: `output: "export"`)
- `next/image` requires `images.unoptimized: true` due to static export

## Deploy

Push to `main` → GitHub Actions builds and deploys `out/` to GitHub Pages.
CI installs with `pnpm install --frozen-lockfile`.
Workflow: `.github/workflows/deploy.yml`

## Conventions

- TypeScript strict mode enabled
- ESLint uses `eslint-config-next` (core-web-vitals + typescript)
- No React Compiler (not enabled in scaffold)

## Brand

- **Logo**: `public/logo.svg` (1080x1080 circular mark)
- **Color palette**:
  - Purple `#60418d`
  - Orange `#f46e00`
  - Teal `#2ad8ae`
  - Gold `#ffbd03`
- Design mockup: `public/design-mockup.svg`, color ref: `public/color-palette.jpg`
