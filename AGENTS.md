# Repository Guidelines

## Project Structure & Module Organization
- Monorepo managed by `pnpm` and Turbo; Node 18+ required (`packageManager: pnpm@10`).
- Apps: `apps/base` (Next 16 + Supabase, dev 3000/start 3001) and `apps/portfolio/portfolio` (Next 16, dev/start 3002). Source lives in `src/app`, shared UI in `src/components`, hooks in `src/hooks`, assets under each `public/`.
- Shared packages: `packages/ui` (Tailwind + TypeScript component library), `packages/eslint-config`, `packages/tailwind-config`, and `packages/typescript-config`. Keep build outputs in `dist/` or `.next/` out of commits; never place secrets in `public/`.

## Build, Test, and Development Commands
- Install: `pnpm install` at repo root.
- Dev servers: `pnpm dev --filter base` or `pnpm dev --filter portfolio` (Turbo watch).
- Build: `pnpm build --filter base` or `pnpm build --filter portfolio`; for shared UI run `pnpm build:styles --filter @repo/ui` then `build:components`.
- Lint/type-check: `pnpm lint`, `pnpm check-types` (workspace-wide). Format with `pnpm format`.
- Start production: `pnpm start --filter base` or `pnpm start --filter portfolio` after a build.

## Coding Style & Naming Conventions
- TypeScript-first, React function components; add `"use client"` only when required.
- ESLint shared from `packages/eslint-config`; Tailwind/Prettier formatting enforced via `pnpm format` (2-space indentation, sorted class lists).
- Naming: PascalCase components (`Button.tsx`), camelCase helpers, `useX` hooks. Co-locate styles or rely on Tailwind utilities from `packages/ui/dist/index.css`.

## Testing Guidelines
- No automated test runner yet; run `pnpm lint` and `pnpm check-types` before commits.
- When adding tests, use co-located `*.test.tsx` with React Testing Library/Vitest and wire commands into the nearest `package.json` (and Turbo if cross-package).
- Keep fixtures small and mock Supabase clients instead of using real keys.

## Commit & Pull Request Guidelines
- Commit messages: imperative, concise subjects (e.g., `Add profile hero layout`); squash noisy WIP.
- Pull requests: include scope, linked issue/task ID, and screenshots/Loom for UI updates; flag env vars or migrations required.
- Ensure `pnpm lint` and `pnpm check-types` pass for affected packages; note any intentional skips.

## Environment & Security Notes
- Required envs (`turbo.json`): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `GUEST_EMAIL_LOGIN`, `GUEST_PASSWORD_LOGIN`. Keep them in untracked `.env` files.
- Avoid leaking secrets in logs or static exports; prefer server components/route handlers for credentialed calls when possible.
