import type { MetadataRoute } from 'next'

import { env } from '~/env'

export default function robots(): MetadataRoute.Robots {
	return {
		host: env.siteUrl.origin,
		rules: {
			allow: '/',
			userAgent: '*'
		},
		sitemap: new URL('/sitemap.xml', env.siteUrl).toString()
	}
}
