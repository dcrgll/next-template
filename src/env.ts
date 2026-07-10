import 'server-only'
import { z } from 'zod'

const environmentSchema = z.object({
	NEXT_PUBLIC_SITE_URL: z
		.url()
		.refine((value) => new URL(value).protocol === 'https:', {
			message: 'NEXT_PUBLIC_SITE_URL must use HTTPS'
		})
})

const environment = environmentSchema.parse({
	NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL
})

export const env = {
	siteUrl: new URL(environment.NEXT_PUBLIC_SITE_URL)
} as const
