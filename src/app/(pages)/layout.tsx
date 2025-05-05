import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { PropsWithChildren } from 'react'

const links = [
	{ label: 'Strona główna', href: '/' },
	{ label: 'O nas', href: '/about' },
	{ label: 'Nasi lekarze', href: '/doctors' },
	{ label: 'Kontakt', href: '/contact' },
	{ label: 'Baza wiedzy', href: '/blog' }
]

const logo = '/logo.svg'

export default function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<Nav links={links} logo={logo} />
			<main className='w-screen flex-1'>{children}</main>
			<Footer />
		</>
	)
}
