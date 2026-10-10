# Lumen App Router Boilerplate

Typed Next.js App Router boilerplate demonstrating three independent layout systems with route groups.

## Routes

| Layout | Routes |
| --- | --- |
| Marketing `(marketing)` | `/`, `/about` |
| Dashboard `(dashboard)` | `/dashboard`, `/settings` |
| Focused auth `(auth)` | `/login`, `/register` |

## Structure

```text
src/
  app/
    layout.tsx                 # Root HTML, fonts, metadata
    globals.css
    (marketing)/               # Public pages and Navbar/Footer shell
      layout.tsx
      page.tsx
      about/page.tsx
    (dashboard)/               # App shell with Sidebar/Header
      layout.tsx
      dashboard/page.tsx
      settings/page.tsx
    (auth)/                    # Minimal focused shell
      layout.tsx
      login/page.tsx
      register/page.tsx
  components/
    layout/                    # Route-shell components
    ui/                        # Reusable primitives
  config/                      # Shared navigation/config values
  types/                       # Shared TypeScript types
```

## Development

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## Authentication

Authentication uses Auth.js with a credentials provider. Copy `.env.example` to
`.env.local`, set a long random `AUTH_SECRET`, and configure `AUTH_EMAIL` and
`AUTH_PASSWORD` before starting the app. Set `AUTH_ROLE` to `admin` or `member`
to control the configured account's permissions. Dashboard routes redirect
unauthenticated visitors to `/login`, and the settings route is restricted to
administrators. This starter has one credentials-based account, so the role is
configured globally; a database-backed user table is needed when each user
needs an independent role.

## Request protection

`src/proxy.ts` adds security headers, request IDs, suspicious bot detection, and a lightweight sliding-window flood limit. Public marketing routes remain crawlable by trusted search crawlers. The current counter is process-local for a portable starter; use a shared Redis-compatible store before deploying multiple instances or relying on it for security-critical rate limiting.
