# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # TypeScript check + production build
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
pnpm test         # Run tests in watch mode
pnpm test -- run  # Run tests once (CI mode)
pnpm test -- src/routes/home/-test/route.test.tsx  # Run single test file
```

## Architecture

This is a React 19 frontend starter using Vite 6, TanStack Router, TanStack Query, and Tailwind CSS v4.

### Routing (TanStack Router)
- File-based routing in `src/routes/`
- Route tree auto-generated to `src/routeTree.gen.ts` - do not edit manually
- Root layout: `src/routes/__root.tsx`
- Route components use `createLazyFileRoute` for code splitting (e.g., `route.lazy.tsx`)
- Files/folders prefixed with `-` are ignored by the router (used for colocated tests like `-test/`)

### State & Data
- TanStack Query client configured in `src/config/queryClient.ts`
- Query client wrapped at app root in `src/main.tsx`

### Internationalization (i18next)
- Config: `src/i18n/i18n.ts`
- Translation files: `public/locales/{lang}/{namespace}/translation.json`
- Uses HTTP backend for loading translations and browser language detection

### Testing
- Vitest with happy-dom environment
- Test setup: `test/setup.ts` (MSW server lifecycle)
- Test utilities: `test/utils.tsx` (provides `renderWithClient` with QueryClient + i18n)
- MSW handlers: `test/mockHandlers/`
- Colocate tests in route folders using `-test/` prefix (ignored by router)

### Path Aliases
- `@/*` maps to `src/*` (configured in tsconfig.app.json)
