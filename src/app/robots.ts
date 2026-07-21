import type { MetadataRoute } from 'next'

import { env } from '~/env'

export default function robots(): MetadataRoute.Robots {
	return {
		host: env.NEXT_PUBLIC_SITE_URL,
		rules: {
			allow: '/',
			userAgent: '*'
		},
		sitemap: new URL('/sitemap.xml', env.NEXT_PUBLIC_SITE_URL).toString()
	}
}
