import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Geist, Geist_Mono } from 'next/font/google'

import { env } from '~/env'

import '~/styles/globals.css'

const siteDescription = 'A type-safe Next.js starter with sensible defaults.'
const siteName = 'next-template'

const geistSans = Geist({
	subsets: ['latin'],
	variable: '--font-geist-sans'
})

const geistMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-geist-mono'
})

export const metadata: Metadata = {
	alternates: {
		canonical: '/'
	},
	description: siteDescription,
	metadataBase: env.NEXT_PUBLIC_SITE_URL,
	openGraph: {
		description: siteDescription,
		siteName,
		title: siteName,
		type: 'website',
		url: '/'
	},
	title: {
		default: siteName,
		template: `%s | ${siteName}`
	},
	twitter: {
		card: 'summary_large_image',
		title: siteName
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className={`${geistSans.variable} ${geistMono.variable} h-full whitespace-pre-line antialiased`}
		>
			<body className='flex min-h-full flex-col'>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

export const viewport = {
	initialScale: 1,
	maximumScale: 1,
	themeColor: [
		{ color: '#f7f7f7', media: '(prefers-color-scheme: light)' },
		{ color: '#14120b', media: '(prefers-color-scheme: dark)' }
	],
	userScalable: false,
	width: 'device-width'
}
