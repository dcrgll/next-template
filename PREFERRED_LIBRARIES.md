# Preferred Libraries

Use these libraries when adding features. Prefer extending what is already installed over introducing an equivalent dependency.

Before adding a new package, check this list and the existing `package.json`. If a preferred option covers the need, use it. If you must introduce something new, document why in the pull request.

## Framework and language

| Concern | Prefer | Notes |
| --- | --- | --- |
| App framework | Next.js (App Router) | Read `node_modules/next/dist/docs/` before relying on older Next.js APIs. |
| UI runtime | React 19 | Function components and hooks only. Use `ref` as a prop (no `forwardRef`). |
| Language | TypeScript | Prefer `unknown` over `any`. Validate external input with Zod. |
| Package manager | pnpm | Do not introduce npm or Yarn lockfiles. |

## UI and styling

| Concern | Prefer | Avoid |
| --- | --- | --- |
| Components | shadcn/ui (`components.json`, Base Vega style) | One-off component libraries (MUI, Chakra, Ant Design) |
| Primitives | `@base-ui/react` | Radix UI packages for new primitives |
| Icons | `@phosphor-icons/react` | Lucide, Heroicons, Font Awesome |
| Styling | Tailwind CSS 4 utility classes | CSS-in-JS (styled-components, Emotion) |
| Class composition | `cn()` from `~/lib/utils` (`clsx` + `tailwind-merge`) | Manual string concatenation of class names |
| Variants | `class-variance-authority` (CVA) | Ad-hoc variant maps when CVA fits |
| Animation utilities | `tw-animate-css` | Extra animation frameworks unless motion is a core product need |
| Theming | `next-themes` | Custom theme bootstrap that fights `class`-based dark mode |

Add shadcn components with the project CLI and keep generated files under `src/components/ui`. Compose product UI from those primitives rather than inventing parallel design systems.

## Validation and environment

| Concern | Prefer | Avoid |
| --- | --- | --- |
| Schema validation | Zod | Yup, Joi, Zod-incompatible validators |
| Environment contract | `src/env.ts` (Zod) + `env.style` | Reading `process.env` ad hoc in app code |
| Public site URL | `env.siteUrl` | Hard-coded origins in metadata or sitemap helpers |

Parse and refine environment values in `src/env.ts`. Use `env.style` only through `next.config.ts` for environment-colored chrome.

## Next.js conventions

| Concern | Prefer | Avoid |
| --- | --- | --- |
| Images | `next/image` | Raw `<img>` for local or remote app imagery |
| Fonts | `next/font` | Self-managed font loading that skips Next.js optimization |
| Metadata | App Router metadata API | Manual `<head>` management in layouts |
| Data fetching | Server Components and route handlers | Async Client Components for initial data loading |

## Tooling (already configured)

| Concern | Prefer |
| --- | --- |
| Lint and format | Ultracite (`pnpm lint` / `pnpm lint:check`) |
| Types | `pnpm typecheck` |
| Git hooks | Lefthook |
| Commits | Conventional commits via `pnpm commit` / Commitlint |
| Dependency updates | Renovate and Taze (`pnpm deps:*`) |
| Local URLs | Portless (`pnpm dev`) |

Do not replace Ultracite with ESLint/Prettier setups, or Lefthook with Husky, unless the project deliberately migrates those tools.

## When something is missing

1. Prefer a small, well-typed library that composes with React Server Components.
2. Prefer packages that ship first-class TypeScript types.
3. Prefer the shadcn/Base UI ecosystem for interactive UI before adding another headless kit.
4. Call out new runtime dependencies in the pull request summary and keep them scoped to a clear use case.
