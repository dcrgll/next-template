import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	allowedDevOrigins: ['new.cargill.app', '*.new.cargill.app'],
	compiler: {
		removeConsole: true
	},
	reactCompiler: true
}

export default nextConfig
