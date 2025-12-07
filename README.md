# SmilingVictor

pnpm + Turbo repo with Next.js App Router apps and shared UI/config packages. Everything is TypeScript.

## Apps
- `apps/base`: Next 16 starter; `pnpm dev --filter base` (port 3000), `pnpm start --filter base` (port 3000).
- `apps/portfolio/jayant`: Next 16 portfolio; `pnpm dev --filter jayant` (port 3001), `pnpm start --filter jayant` (port 3001).
- App entrypoints live in `src/app/` with `layout.tsx`, `page.tsx`, and assets in `public/`.

## Packages
- `@repo/ui`: React 19 + Tailwind v4 kit with `ui:`-prefixed classes; consume styles via `@repo/ui/styles.css`. Build outputs with `pnpm --filter @repo/ui build:styles` and `pnpm --filter @repo/ui build:components` (or watch with the `dev:*` scripts).
- `@repo/tailwind-config`: Shared theme tokens/PostCSS config; import alongside `@import "tailwindcss";` in app/global styles.
- `@repo/eslint-config`: Flat configs for base, Next.js, and React.
- `@repo/typescript-config`: Strict TS configs for apps and libraries.

## Getting Started
- Requirements: Node >=18, pnpm.
- Install deps: `pnpm install`.

## Development
- Run an app: `pnpm dev --filter base` or `pnpm dev --filter jayant`. Root `pnpm dev` runs the Turbo dev graph.
- UI package while developing: `pnpm --filter @repo/ui dev:styles` and `pnpm --filter @repo/ui dev:components` to watch CSS and TS output.
- Import `@repo/ui/styles.css` and `@repo/tailwind-config` in app/global CSS for shared theming.

## Quality and Builds
- Lint: `pnpm lint`.
- Type check: `pnpm check-types` (includes Next typegen).
- Build: `pnpm build` (Turbo orchestrated).
- Format: `pnpm format` (Prettier + Tailwind class sorter). Avoid manual Tailwind class reordering.

## Notes
- ESLint flags undeclared env vars (`turbo/no-undeclared-env-vars`); declare them in `.env*`.
- Components export in PascalCase; file names can stay lowercase.
