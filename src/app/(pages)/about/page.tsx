import { AboutTabs } from '@/components/AboutTabs/AboutTabs'
import { Button } from '@/components/common/Button'
import { Title } from '@/components/common/Title'
import { ContentAccordion } from '@/components/ContentAccordion/ContentAccordion'
import { Doctors } from '@/components/Doctors'
import { Header } from '@/components/Header'
import { Testimonials } from '@/components/Testimonials'
import { client } from '@/sanity/lib/client'
import { GenericHeader, SeparatorWithButton } from '@/types/sanity'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'

export default async function AboutPage() {
	const separatorWithButton = await client.fetch<SeparatorWithButton>(`*[_type == "separatorWithButton"][0]`)
	const aboutHeader = await client.fetch<GenericHeader>(`*[_type == "aboutHeader"][0]`)

	return (
		<>
			<div className='bg-light-pink w-full '>
				<AboutTabs />
			</div>
			<ContentAccordion />
			<Testimonials limit={6} />
			{separatorWithButton.enable && separatorWithButton.allowedPages.includes('about') && (
				<div className='bg-dark-gray w-full py-8 xl:py-16 px-6 xl:px-0'>
					<Title className='text-light-pink' title={separatorWithButton.title}>
						<Link href={separatorWithButton.buttonLink} className='xl:ml-auto'>
							<Button variant='white' className='xl:w-fit xl:px-32 mx-auto w-full'>
								{separatorWithButton.buttonTitle}
							</Button>
						</Link>
					</Title>
				</div>
			)}
			<div className='bg-light-pink w-full '>
				<Header
					title={aboutHeader.title}
					description={aboutHeader.description}
					imageUrl={urlFor(aboutHeader.image).url()}
					imageAlt={aboutHeader.imageAlt}
					textColor='text-dark-gray'
				/>
			</div>
			<Doctors />
		</>
	)
}
