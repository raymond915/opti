# AGENTS.md - OptiHR Project Guidelines

## File Structure

- `app/`: Page routes (e.g., `about-us/page.tsx`).
- `entities/`: Domain-specific models and UI (e.g., `service/model/schema.ts`, `service/components/index.tsx`).
- `pages/`: Static content files (e.g., `home/content.ts` for Sanity queries).
- `shared/`: Reusable components and hooks (e.g., `button/components/index.tsx`, `hooks/use-mobile.ts`).
- `widgets/`: Composable sections (e.g., `footer/components/index.tsx`).

## scripts

"site:dev": "bun --cwd=packages/site run dev",
"site:build": "bun --cwd=packages/site run build",
"site:start": "bun --cwd=packages/site run start",
"site:lint": "bun --cwd=packages/site run lint",
"site:format": "bun --cwd=packages/site run format",
"site:check": "bun --cwd=packages/site run check",
"site:check-types": "bun --cwd=packages/site run check-types",
"sanity:dev": "bun --cwd=packages/sanity run dev",
"sanity:start": "bun --cwd=packages/sanity run start",
"sanity:build": "bun --cwd=packages/sanity run build",
"sanity:deploy": "bun --cwd=packages/sanity run deploy",
"sanity:deploy-graphql": "bun --cwd=packages/sanity run deploy-graphql",
"sanity:check-types": "bun --cwd=packages/sanity run check-types",
"sanity:sanity-types": "bun --cwd=packages/sanity run sanity-types",
"dev:all": "bun run site:dev & bun run sanity:dev",
"lint": "bun run site:lint",
"format": "bun run site:format",
"check": "bun run site:check",
"check-types": "bun run site:check-types && bun run sanity:check-types"
