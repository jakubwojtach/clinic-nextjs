import type { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { PropsWithChildren } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const dmSans = DM_Sans({
	variable: '--font-dm-sans',
	subsets: ['latin'],
	display: 'swap',
	preload: true
})

export const metadata: Metadata = {
	title: {
		template: '%s | Ginekologia by Dr. Grochecka',
		default: 'Ginekologia by Dr. Grochecka'
	},
	description: 'Strona internetowa Ginekologii by Dr. Grochecka',
	metadataBase: new URL('https://your-domain.com'),
	openGraph: {
		type: 'website',
		locale: 'pl_PL',
		url: 'https://your-domain.com',
		siteName: 'Ginekologia by Dr. Grochecka'
	},
	robots: {
		index: true,
		follow: true
	}
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	themeColor: '#ffffff'
}

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='pl' className='w-screen'>
			<body className={`${dmSans.variable} antialiased bg-green w-screen overflow-x-hidden flex flex-col min-h-screen`}>
				{children}
				<SpeedInsights />
			</body>
		</html>
	)
}
