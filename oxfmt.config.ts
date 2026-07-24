import { defineConfig } from 'oxfmt'
import ultracite from 'ultracite/oxfmt'

export default defineConfig({
	...ultracite,
	ignorePatterns: [...(ultracite.ignorePatterns ?? []), 'SECURITY.md'],
	jsDoc: true,
	jsxSingleQuote: true,
	printWidth: 80,
	semi: false,
	singleQuote: true,
	sortImports: true,
	sortPackageJson: true,
	sortTailwindcss: true,
	trailingComma: 'none',
	useTabs: true
})
