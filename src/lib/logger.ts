import pino from 'pino'

const isDevelopment = process.env.NODE_ENV === 'development'

export const logger = pino({
	browser: {
		asObject: true
	},
	level: process.env.LOG_LEVEL ?? (isDevelopment ? 'debug' : 'info'),
	...(isDevelopment
		? {
				transport: {
					options: {
						colorize: true,
						ignore: 'pid,hostname',
						translateTime: 'HH:MM:ss Z'
					},
					target: 'pino-pretty'
				}
			}
		: {})
})

export type Logger = typeof logger
