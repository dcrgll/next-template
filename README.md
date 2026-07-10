# next-template

## Getting Started

Install dependencies, then copy the environment example:

```bash
pnpm install
cp .env.example .env.local
```

Start the development server:

```bash
pnpm dev
```

Open [https://new.cargill.app](https://new.cargill.app) in your browser.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Absolute HTTPS URL used as the site's canonical URL. |

`NEXT_PUBLIC_*` variables are embedded at build time, so set `NEXT_PUBLIC_SITE_URL` in every build environment.

## Checks

```bash
pnpm lint:check
pnpm typecheck
pnpm build
```
