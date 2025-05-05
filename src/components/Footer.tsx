import { client } from '@/sanity/lib/client'
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTwitter,
	IconBrandYoutube
} from '@tabler/icons-react'
import { SanityDocument } from 'next-sanity'
import Image from 'next/legacy/image'
import { Button } from './common/Button'
import Link from 'next/link'
export const Footer = async () => {
	const SOCIAL_LINKS_QUERY = `*[
  _type == "socialMedia"
  && defined(url)
]|order(publishedAt desc)[0...12]{_id, name, url, type}`

	const options = { next: { revalidate: 30 } }

	const socialLinks = await client.fetch<SanityDocument[]>(SOCIAL_LINKS_QUERY, {}, options)

	const MAPPED_ICONS = socialLinks.map((social) => {
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
						<h2 className='text-title font-bold'>Social Media</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias dolor repudiandae dolore maxime maiores
							porro exercitationem, non sunt culpa vel.
						</p>
						<div className='flex flex-row gap-8'>
							{socialLinks.map((link, index) => (
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
						<h2 className='text-title font-bold'>Kontakt</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias dolor repudiandae dolore maxime maiores
							porro exercitationem, non sunt culpa vel.
						</p>
						<div className='flex flex-col gap-2'>
							<p>
								<strong>Email:</strong> info@example.com
							</p>
							<p>
								<strong>Phone:</strong> 123-456-7890
							</p>
							<p>
								<strong>Address:</strong> 123 Main St, Anytown, USA
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
