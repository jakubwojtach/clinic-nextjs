import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { PropsWithChildren } from 'react'

const dmSans = DM_Sans({
	variable: '--font-dm-sans',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Ginekologia by Dr. Grochecka',
	description: 'Strona internetowa Ginekologii by Dr. Grochecka'
}

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='pl' className='w-screen'>
			<body className={`${dmSans.variable} antialiased bg-green w-screen overflow-x-hidden flex flex-col min-h-screen`}>
				{children}
			</body>
		</html>
	)
}
