'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import { IconMenuDeep, IconX } from '@tabler/icons-react'
import { useState } from 'react'

const links = [
	{ label: 'Strona główna', href: '/' },
	{ label: 'O nas', href: '/about' },
	{ label: 'Nasi lekarze', href: '/doctors' },
	{ label: 'Kontakt', href: '/contact' },
	{ label: 'Baza wiedzy', href: '/blog' }
]

export const Nav = () => {
	const activeLink = usePathname()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className='flex flex-row gap-4 bg-dark-gray/90 sticky top-0 z-50 py-5 left-0 right-0 backdrop-blur-sm px-6 xl:px-0'>
			<div className='container flex justify-between items-center'>
				<Link href='/' className='h-[50px] sm:h-[60px] relative w-[250px]'>
					<Image src='/logo2.svg' alt='logo' layout='fill' className='object-contain' />
				</Link>
				<button
					className='flex items-center justify-center lg:hidden text-white transition-all duration-300 relative w-10 h-10'
					onClick={() => setIsOpen(!isOpen)}
				>
					<IconX
						size={32}
						className={classNames(
							'transition-all duration-300 absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2',
							!isOpen ? 'opacity-0 blur-sm' : 'opacity-100 blur-none'
						)}
					/>
					<IconMenuDeep
						size={32}
						className={classNames(
							'transition-all duration-300 absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2',
							!isOpen ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'
						)}
					/>
				</button>
				<div
					className={classNames(
						'absolute lg:static top-full shadow-2xl sm:shadow-none left-0 right-0 p-4 bg-dark-gray lg:bg-transparent lg:backdrop-blur-none lg:flex lg:items-center lg:gap-12 lg:flex-row lg:justify-end lg:space-x-8 lg:py-0 transition-all duration-300',
						isOpen ?
							'block opacity-100 pointer-events-auto'
						:	'opacity-0 pointer-events-none lg:pointer-events-auto lg:opacity-100'
					)}
				>
					<div className='container flex flex-col lg:flex-row gap-12 lg:gap-8 py-8 px-2 xl:px-0 lg:py-0 w-full mx-auto'>
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={classNames(
									'font-medium relative',
									(
										link.href === '/' ? activeLink === '/' : activeLink.startsWith(link.href)
									) ?
										'text-pink hover:opacity-100 lg:after:opacity-100 lg:after:scale-y-100'
									:	'text-white',
									'after:content-[" "] after:block after:w-1 after:h-1 after:bg-pink after:absolute after:bottom-[-8px] after:left-[50%] after:right-[50%] after:translate-x-[-50%] after:opacity-0 after:scale-y-0 after:origin-top after:rounded-full ',
									'hover:opacity-50 transition-opacity duration-300'
								)}
								onClick={() => setIsOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</nav>
	)
}
