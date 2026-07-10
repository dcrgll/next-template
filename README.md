# next-template

A modern, type-safe Next.js starter for building web applications with sensible defaults.

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#getting-started"><strong>Getting started</strong></a> ·
  <a href="#project-structure"><strong>Project structure</strong></a> ·
  <a href="#scripts"><strong>Scripts</strong></a> ·
  <a href="#deployment"><strong>Deployment</strong></a> ·
  <a href="#contributing"><strong>Contributing</strong></a>
</p>

## Features

- Next.js 16 App Router with React 19 and TypeScript
- Tailwind CSS 4 and shadcn/ui-ready design tokens
- Light and dark themes with `next-themes`
- Validated, type-safe environment variables with Zod
- Generated metadata, Open Graph image, manifest, sitemap, and `robots.txt`
- Custom loading, 404, and recoverable error states
- Health-check route at `/api/health`
- Ultracite linting and formatting powered by Oxlint and Oxfmt
- Lefthook pre-commit, commit-message, and pre-push checks
- Conventional commits with Commitizen and Commitlint
- GitHub Actions CI for linting, type checking, and production builds
- Renovate and Taze dependency update tooling

## Getting started

### 1. Use the template

Create a repository from this template, or clone it directly:

```bash
git clone https://github.com/dcrgll/next-template.git my-project
cd my-project
```

### 2. Install dependencies

```bash
pnpm install
```

The install step also configures the repository's Git hooks.

### 3. Configure environment variables

Copy the example file and update its values for your environment:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | The canonical absolute HTTPS URL for the application. |

`NEXT_PUBLIC_*` values are inlined at build time. Set `NEXT_PUBLIC_SITE_URL` in every environment that runs `pnpm build`.

### 4. Start development

```bash
pnpm dev
```

Open [https://new.cargill.app](https://new.cargill.app) in your browser. To use the standard Next.js development server instead, run `pnpm dev:app`.

## Project structure

```text
.
├── .github/workflows     # Continuous integration
├── src
│   ├── app               # App Router pages, metadata, and route handlers
│   │   └── api/health    # Readiness endpoint
│   ├── components        # Reusable UI components
│   ├── hooks             # Shared React hooks
│   ├── lib               # Application utilities
│   ├── styles            # Global styles and theme tokens
│   └── env.ts            # Validated environment contract
├── AGENTS.md             # Agent and project conventions
├── components.json       # shadcn/ui configuration
├── lefthook.yml          # Local Git hook configuration
└── package.json          # Scripts and dependencies
```

## Scripts

| Command            | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `pnpm dev`         | Start Next.js through Portless at `new.cargill.app`. |
| `pnpm dev:app`     | Start the standard Next.js development server.       |
| `pnpm build`       | Create a production build.                           |
| `pnpm start`       | Run the production server.                           |
| `pnpm lint:check`  | Check formatting and lint rules.                     |
| `pnpm lint`        | Apply automatic formatting and lint fixes.           |
| `pnpm typecheck`   | Type-check without emitting files.                   |
| `pnpm deps:check`  | Report available dependency updates.                 |
| `pnpm deps:update` | Update dependencies and install them.                |
| `pnpm commit`      | Create a conventional commit interactively.          |

## Quality checks

Run the same checks enforced by CI before opening a pull request:

```bash
pnpm lint:check
pnpm typecheck
NEXT_PUBLIC_SITE_URL=https://new.cargill.app pnpm build
```

## Deployment

### Deploy to Vercel

Deploy a copy of this repository to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dcrgll/next-template)

During setup, configure `NEXT_PUBLIC_SITE_URL` with the HTTPS URL Vercel assigns to your production deployment (or your custom domain).

### Configure other platforms

Set `NEXT_PUBLIC_SITE_URL` to your production HTTPS origin during the build. The generated canonical URLs, social metadata, sitemap, and `robots.txt` use this value.

The `/api/health` route returns an uncached `200` response with `{ "status": "ok" }` for deployment readiness checks.

## Contributing

1. Create a branch using a conventional prefix such as `feat/`, `fix/`, or `chore/`.
2. Make a focused change and run the quality checks.
3. Commit with `pnpm commit` or a conventional commit message.
4. Push the branch and open a pull request against `main`.
