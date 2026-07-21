import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

const environment = createEnv({
	client: {
		NEXT_PUBLIC_SITE_URL: z
			.url()
			.refine((value) => new URL(value).protocol === 'https:', {
				message: 'NEXT_PUBLIC_SITE_URL must use HTTPS'
			})
	},
	runtimeEnv: {
		NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL
	}
})

export const env = environment
