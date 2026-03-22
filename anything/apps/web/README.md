# `apps/web`

## Confirmed architecture (target)

This package is a **full React UI** on **React Router v7 framework mode** with **SSR**, built by **Vite**, and served through **Hono** (`react-router-hono-server`). That is the canonical production and local-dev setup.

A **client-only SPA** (plain `createRoot` + static hosting, no SSR/Hono) is **not** the current target. Moving to that model would be a separate migration (routing, API/auth, and loaders), while the visual design could stay the same if components and styles are reused.

## Stack summary

| Concern | Choice |
| -------- | ------ |
| UI | React 18 |
| App router | React Router v7 (`@react-router/dev`), app root at `src/app/` |
| Server | Hono entry `__create/index.ts`, API routes under `src/app/api/**/route.js` |
| Build | `react-router build` → `build/client` + `build/server/...` (with Vercel preset: `.vercel/react-router-build-result.json`) |

## Commands

- **Develop:** `npm run dev` → `react-router dev` (port 4000 by default in `vite.config.ts`).
- **Production build:** `npm run build` → `react-router build`.
- **Run server:** `npm run start` → `react-router-serve` on the Node server bundle under `build/server/nodejs_*/index.js` (path matches the Vercel preset’s `serverBundles` output; if you add Edge routes or change `export const config`, the folder name may change—check `.vercel/react-router-build-result.json`).

Do **not** rely on a standalone Vite HTML entry at the repo root for this app; the framework owns the document shell and hydration.

## Deploying on Vercel

1. **Root directory:** In the Vercel project settings, set **Root Directory** to this folder (`apps/web` from the monorepo root, or the repo root if this package is the only app).
2. **Framework:** Vercel should detect **React Router** from `npm run build` (`react-router build`). Do **not** use the old pattern `outputDirectory: build/client` + “rewrite everything to `/index.html`” — that is for static SPAs only and breaks SSR.
3. **Preset:** [`react-router.config.ts`](./react-router.config.ts) includes `presets: [vercelPreset()]` from `@vercel/react-router/vite`, which writes `.vercel/react-router-build-result.json` so Vercel can attach SSR to **Vercel Functions** ([docs](https://vercel.com/docs/frameworks/react-router)).
4. **Node:** `package.json` has `"engines": { "node": ">=20" }` for native deps (e.g. `argon2`). Match this in **Project → Settings → Node.js Version** (20+).
5. **Environment variables:** Add the same secrets you use locally (`DATABASE_URL`, `AUTH_SECRET`, any `NEXT_PUBLIC_*` from [`vite.config.ts`](./vite.config.ts) `envPrefix`) in **Project → Settings → Environment Variables**.
6. **Prerender:** This app does **not** set `prerender` in `react-router.config.ts` (the old `['/*?']` pattern broke builds and is unsafe on Windows). Pages are rendered with **SSR** at request time on Vercel. Add an explicit `prerender` list later only if you need static HTML at build time.

**Custom Hono server (`__create/index.ts`):** Local production uses `react-router-serve` + full Hono (auth, `src/app/api/**/route.js`, static). On Vercel, routing is primarily driven by the React Router + preset integration. If any `/api/...` handlers stop working after deploy, migrate those endpoints to patterns Vercel documents (e.g. React Router resources or a dedicated Hono entry as in [Vercel’s custom server entry](https://vercel.com/docs/frameworks/react-router#using-a-custom-server-entrypoint)).

## Related config

- [`react-router.config.ts`](./react-router.config.ts) — `appDirectory`, SSR, prerender, **Vercel preset**.
- [`vercel.json`](./vercel.json) — install + build only (no static SPA overrides).
- [`vite.config.ts`](./vite.config.ts) — `build.target: 'esnext'` so the SSR bundle can keep top-level `await` in `__create/` after esbuild transpile. If you must support very old browsers on the **client**, consider environment-specific targets later instead of lowering this blindly.
