import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<Nav />
			<main className='w-screen flex-1'>{children}</main>
			<Footer />
		</>
	)
}
