import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		background_color: '#f7f7f7',
		description: 'A type-safe Next.js starter with sensible defaults.',
		display: 'standalone',
		icons: [
			{
				sizes: 'any',
				src: '/favicon.ico',
				type: 'image/x-icon'
			}
		],
		name: 'next-template',
		short_name: 'next-template',
		start_url: '/',
		theme_color: '#f7f7f7'
	}
}
