import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	compiler: {
		removeConsole: true
	},
	reactCompiler: true
}

export default nextConfig
