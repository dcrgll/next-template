import { withEnvStyles } from 'env.style'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	allowedDevOrigins: ['new.cargill.app', '*.new.cargill.app'],
	compiler: {
		removeConsole: true
	},
	reactCompiler: true
}

export default withEnvStyles(nextConfig, {
	color: {
		development: '#3b82f6',
		preview: '#f59e0b',
		staging: '#6b7280'
	}
})
