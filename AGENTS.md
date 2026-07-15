<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Ultracite Code Standards

This project uses **Ultracite**, a zero-config preset that enforces strict code quality standards through automated formatting and linting.

## Preferred Libraries

Before adding a dependency or choosing an implementation approach, read [`PREFERRED_LIBRARIES.md`](./PREFERRED_LIBRARIES.md). It is based on the shared preferred-libraries list and adapted for this template — prefer those defaults over equivalent alternatives, and do not add a listed library if the repo already covers that job another way.

## Quick Reference

- **Format code**: `pnpm lint` (or `pnpm exec ultracite fix`)
- **Check for issues**: `pnpm lint:check` (or `pnpm exec ultracite check`)
- **Typecheck**: `pnpm typecheck`
- **Diagnose setup**: `pnpm exec ultracite doctor`
- **Guided commit**: `pnpm commit` (Commitizen, conventional commits)
- **Install git hooks**: `pnpm prepare` (runs Lefthook automatically after install)

Oxlint + Oxfmt (the underlying engine) provides robust linting and formatting. Most issues are automatically fixable. TypeScript errors are caught separately via `pnpm typecheck` — linting does not replace the compiler.

## Git Hooks (Lefthook)

Hooks are configured in `lefthook.yml` and installed via the `prepare` script:

- **pre-commit** — auto-formats staged files with Ultracite
- **commit-msg** — validates commit messages with commitlint (conventional commits)
- **pre-push** — runs `pnpm lint:check` and `pnpm typecheck`

Use `pnpm commit` for interactive conventional commits, or write messages manually in the form `type: description` (e.g. `feat: add user auth`).

## Git Workflow

All work must be done on a **new branch** — never commit directly to `main`. Open a PR and merge into `main` once CI passes.

### Branch naming

Use conventional prefixes with a short kebab-case description:

- `feat/add-user-auth` — new features
- `fix/resolve-login-error` — bug fixes
- `chore/update-dependencies` — tooling, deps, config
- `docs/update-readme` — documentation only
- `refactor/`, `test/`, `ci/` — as appropriate

### Workflow

```bash
git checkout main && git pull
git checkout -b chore/your-change
# make changes, then:
git add .
pnpm commit
git push -u origin chore/your-change
gh pr create --base main
```

CI (`.github/workflows/ci.yml`) runs lint, typecheck, and build on every push and pull request to `main`.

---

## Core Principles

Write code that is **accessible, performant, type-safe, and maintainable**. Focus on clarity and explicit intent over brevity.

### Type Safety & Explicitness

- Use explicit types for function parameters and return values when they enhance clarity
- Prefer `unknown` over `any` when the type is genuinely unknown
- Use const assertions (`as const`) for immutable values and literal types
- Leverage TypeScript's type narrowing instead of type assertions
- Use meaningful variable names instead of magic numbers - extract constants with descriptive names

### Modern JavaScript/TypeScript

- Use arrow functions for callbacks and short functions
- Prefer `for...of` loops over `.forEach()` and indexed `for` loops
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safer property access
- Prefer template literals over string concatenation
- Use destructuring for object and array assignments
- Use `const` by default, `let` only when reassignment is needed, never `var`

### Async & Promises

- Always `await` promises in async functions - don't forget to use the return value
- Use `async/await` syntax instead of promise chains for better readability
- Handle errors appropriately in async code with try-catch blocks
- Don't use async functions as Promise executors

### React & JSX

- Use function components over class components
- Call hooks at the top level only, never conditionally
- Specify all dependencies in hook dependency arrays correctly
- Use the `key` prop for elements in iterables (prefer unique IDs over array indices)
- Nest children between opening and closing tags instead of passing as props
- Don't define components inside other components
- Use semantic HTML and ARIA attributes for accessibility:
  - Provide meaningful alt text for images
  - Use proper heading hierarchy
  - Add labels for form inputs
  - Include keyboard event handlers alongside mouse events
  - Use semantic elements (`<button>`, `<nav>`, etc.) instead of divs with roles

### Error Handling & Debugging

- Remove `console.log`, `debugger`, and `alert` statements from production code
- Throw `Error` objects with descriptive messages, not strings or other values
- Use `try-catch` blocks meaningfully - don't catch errors just to rethrow them
- Prefer early returns over nested conditionals for error cases

### Code Organization

- Keep functions focused and under reasonable cognitive complexity limits
- Extract complex conditions into well-named boolean variables
- Use early returns to reduce nesting
- Prefer simple conditionals over nested ternary operators
- Group related code together and separate concerns

### Security

- Add `rel="noopener"` when using `target="_blank"` on links
- Avoid `dangerouslySetInnerHTML` unless absolutely necessary
- Don't use `eval()` or assign directly to `document.cookie`
- Validate and sanitize user input

### Performance

- Avoid spread syntax in accumulators within loops
- Use top-level regex literals instead of creating them in loops
- Prefer specific imports over namespace imports
- Avoid barrel files (index files that re-export everything)
- Use proper image components (e.g., Next.js `<Image>`) over `<img>` tags

### Framework-Specific Guidance

**Next.js:**

- Use Next.js `<Image>` component for images
- Use `next/head` or App Router metadata API for head elements
- Use Server Components for async data fetching instead of async Client Components

**React 19+:**

- Use ref as a prop instead of `React.forwardRef`

**Libraries:**

- Follow [`PREFERRED_LIBRARIES.md`](./PREFERRED_LIBRARIES.md) for default choices (Motion, Zod, React Hook Form, Zustand, TanStack Query, shadcn/ui, Better Auth, nuqs, Phosphor, Day.js, and related)
- Use `cn()` from `~/lib/utils` for class names and Zod schemas for external or environment input

---

## When Oxlint + Oxfmt Can't Help

Oxlint + Oxfmt's linter will catch most issues automatically. Focus your attention on:

1. **Business logic correctness** - Oxlint + Oxfmt can't validate your algorithms
2. **Meaningful naming** - Use descriptive names for functions, variables, and types
3. **Architecture decisions** - Component structure, data flow, and API design
4. **Edge cases** - Handle boundary conditions and error states
5. **User experience** - Accessibility, performance, and usability considerations
6. **Documentation** - Add comments for complex logic, but prefer self-documenting code

---

Most formatting and common issues are automatically fixed by Oxlint + Oxfmt on pre-commit. Run `pnpm lint` and `pnpm typecheck` before pushing to catch issues early.
