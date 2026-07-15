# Preferred libraries

Default library choices for new React / TypeScript work. Project-local conventions and existing dependencies still take precedence — do not add these if the repo already uses something else for the same job. Ask before adding a dependency.

This template already ships with Tailwind CSS 4, shadcn/ui (Base UI / Base Vega), Phosphor, Zod, and `next-themes`. Prefer those installed packages when they cover the need.

## Styling — Tailwind CSS

- Use Tailwind utility classes for styling.
- Prefer composition of utilities over custom CSS.
- Put shared tokens (colors, spacing, typography) in the Tailwind theme / CSS variables, not one-off magic values.
- Use `cn()` from `~/lib/utils` (`clsx` + `tailwind-merge`) when composing conditional class names.
- Avoid CSS Modules, styled-components, Emotion, and similar unless the project already uses them.

## Animation — Motion

- Use [Motion](https://motion.dev) (`motion` / `motion/react`) for animation.
- Prefer declarative Motion components and variants over hand-rolled CSS keyframes or `requestAnimationFrame` for UI motion.
- Keep motion purposeful: presence, hierarchy, and feedback — not decoration.
- Avoid Framer Motion imports when `motion` is available; avoid adding GSAP / other animation libs for routine UI animation.

## Schemas — Zod

- Use Zod for runtime schemas and validation.
- Define schemas once; infer TypeScript types with `z.infer`.
- Validate untrusted input at boundaries (API responses, form values, env, URL params).
- Prefer Zod over Yup, Joi, Valibot, or hand-written type guards unless the project already standardizes on another library.
- In this template, keep environment validation in `src/env.ts` and consume values through `env` rather than reading `process.env` ad hoc.

## Forms — React Hook Form

- Use React Hook Form for forms.
- Pair with Zod via `@hookform/resolvers/zod` when schema validation is needed.
- Prefer uncontrolled inputs through `register` / Controller; avoid duplicating form state in React `useState` unless necessary.
- Avoid Formik and similar unless the project already uses them.

## State — Zustand

- Use Zustand for shared client state.
- Prefer small, focused stores over one global store.
- Keep server/async data in TanStack Query; use Zustand for UI and cross-component client state.
- Avoid Redux, MobX, Jotai, Recoil, and similar unless the project already uses them.
- Prefer local `useState` / context when state is truly local or shallow.

## Data fetching — TanStack Query + fetch

- Use TanStack Query (React Query) for server/async state: caching, refetching, mutations, and loading/error UI.
- Use the native `fetch` API for HTTP — do not add axios, ky, or similar unless the project already uses them.
- Prefer Query for remote data over stuffing it into Zustand.
- Avoid SWR, RTK Query, and Apollo for ordinary REST/JSON fetching unless the project already standardizes on them.

## UI primitives — shadcn/ui

- Use [shadcn/ui](https://ui.shadcn.com) components (copied into the project) with Tailwind.
- This template is configured for the Base UI / Base Vega style (`components.json`, `@base-ui/react`). Prefer that stack over adding Radix packages for new primitives.
- Prefer extending or composing existing shadcn components over adding a second component library.
- Avoid installing full UI kits (MUI, Chakra, Ant Design, etc.) unless the project already uses them.

## Auth — Better Auth

- Use [Better Auth](https://www.better-auth.com) for authentication.
- Prefer its session/client helpers over rolling custom auth flows when starting fresh.
- Avoid Auth.js, Clerk, Supabase Auth, and similar unless the project already uses them.

## URL state — nuqs

- Use [nuqs](https://nuqs.dev) for search-param / URL state.
- Prefer nuqs over manual `useSearchParams` parsing when values are read and written as app state.
- Keep sensitive or large state out of the URL.

## Icons — Phosphor

- Use [Phosphor Icons](https://phosphoricons.com) (`@phosphor-icons/react`).
- Prefer one icon set per project; do not mix Lucide, Heroicons, and Phosphor without a reason.

## Dates — Day.js

- Use Day.js for date parsing, formatting, and manipulation.
- Prefer Day.js over date-fns, Luxon, Moment, or raw `Date` formatting helpers for shared date logic.
- Add only the plugins you need (e.g. `utc`, `relativeTime`).

## Charts — shadcn + Recharts

- Use [shadcn charts](https://ui.shadcn.com/charts) built on Recharts.
- Prefer the shadcn chart components over raw Recharts wiring when available.
- Avoid Chart.js, Victory, Nivo, visx, and similar unless the project already uses them.

## Fake data — Faker

- Use [`@faker-js/faker`](https://fakerjs.dev) for seed data, fixtures, mocks, and demos.
- Prefer Faker over hand-rolled random strings/numbers when generating realistic test or placeholder data.
- Avoid Chance.js and similar unless the project already uses them.

## Themes — next-themes

- Use [`next-themes`](https://github.com/pacocoursey/next-themes) for light/dark (and system) theme switching.
- Prefer it over custom theme context or CSS-only class toggles when the app needs a theme provider.
- Avoid rolling a bespoke theme store unless next-themes cannot cover the case.

## Captchas — Cloudflare Turnstile

- Use [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) for captchas / bot protection.
- Prefer Turnstile over reCAPTCHA, hCaptcha, and similar unless the project already uses them.
- Keep site keys in env; verify tokens on the server.

## Combining forms + schemas

Typical pattern:

```ts
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
	email: z.email()
})

type FormValues = z.infer<typeof schema>

const form = useForm<FormValues>({
	resolver: zodResolver(schema)
})
```
