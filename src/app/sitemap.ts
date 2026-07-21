import type { MetadataRoute } from 'next'

import { env } from '~/env'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			changeFrequency: 'weekly',
			priority: 1,
			url: env.NEXT_PUBLIC_SITE_URL
		}
	]
}
