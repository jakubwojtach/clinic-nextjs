import { client } from '@/sanity/lib/client'
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTwitter,
	IconBrandYoutube
} from '@tabler/icons-react'
import Image from 'next/legacy/image'
import { Button } from './common/Button'
import Link from 'next/link'
import { Footer as FooterType } from '@/types/sanity'

export const Footer = async () => {
	const footer = await client.fetch<FooterType>(`*[_type == "footer"][0] {
		...,
		socialMedia[]->{_id, name, url, type}
	}`)
	const MAPPED_ICONS = footer.socialMedia.map((social) => {
		switch (social.type) {
			case 'facebook':
				return <IconBrandFacebook />
			case 'instagram':
				return <IconBrandInstagram />
			case 'twitter':
				return <IconBrandTwitter />
			case 'linkedin':
				return <IconBrandLinkedin />
			case 'youtube':
				return <IconBrandYoutube />
			default:
				return null
		}
	})

	return (
		<footer className='w-screen'>
			<div className='bg-light-pink py-8 xl:py-16 px-6 xl:px-0'>
				<div className='container grid grid-cols-1 xl:grid-cols-2 gap-12'>
					<div className='flex flex-col gap-6'>
						<h2 className='text-title font-bold'>{footer.leftTitle}</h2>
						<p>{footer.leftDescription}</p>
						<div className='flex flex-row gap-8'>
							{footer.socialMedia.map((link, index) => (
								<a
									key={link._id}
									href={link.url}
									target='_blank'
									className='hover:scale-105 hover:shadow-2xl transition-all duration-300 w-10 h-10 flex items-center justify-center bg-pink rounded-full border-[2px] border-dark-gray hover:bg-dark-gray hover:text-white'
									rel='noopener noreferrer'
								>
									<span className='sr-only'>{link.name}</span>
									{MAPPED_ICONS[index]}
								</a>
							))}
						</div>
					</div>
					<div className='flex flex-col gap-6'>
						<h2 className='text-title font-bold'>{footer.rightTitle}</h2>
						<p>{footer.rightDescription}</p>
						<div className='flex flex-col gap-2'>
							<p>
								<strong>Email:</strong> <a href={`mailto:${footer.email}`}>{footer.email}</a>
							</p>
							<p>
								<strong>Telefon:</strong> <a href={`tel:${footer.phone}`}>{footer.phone}</a>
							</p>
							<p>
								<strong>Adres:</strong> {footer.address}
							</p>
						</div>
						<Link href='/contact'>
							<Button className='w-full sm:w-fit px-8 my-4 sm:my-0'>Napisz do nas</Button>
						</Link>
					</div>
				</div>
			</div>
			<div className='bg-dark-gray py-8 px-6 xl:px-0'>
				<div className='container flex flex-col gap-4 items-center text-white'>
					<Image src='/logo.svg' alt='logo' width={160} height={30} />
					<p className='text-center '>
						&copy; {new Date().getFullYear()} Ginekologia by Dr. Grochecka. Wszelkie prawa zastrzeżone.
					</p>
				</div>
			</div>
		</footer>
	)
}
