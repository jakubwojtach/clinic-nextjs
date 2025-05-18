import { Title } from '@/components/common/Title'
import { BlogList } from '@/components/BlogList'
import { Testimonials } from '@/components/Testimonials'
import { Header } from '@/components/Header'
import { Doctors } from '@/components/Doctors'
import { ContentAccordion } from '@/components/ContentAccordion/ContentAccordion'
import { Button } from '@/components/common/Button'
import { Achievements } from '@/components/Achievements'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { HomepageHeader, SectionTitles, SeparatorWithButton } from '@/types/sanity'
import { urlFor } from '@/sanity/lib/image'

export default async function IndexPage() {
	const homepageHeader = await client.fetch<HomepageHeader>(`*[_type == "homepageHeader"][0]`)
	const separatorWithButton = await client.fetch<SeparatorWithButton | null>(`*[_type == "separatorWithButton"][0]`)
	const sectionTitle = await client.fetch<SectionTitles | null>(
		`*[_type == "sectionTitles" && slug.current == "nasze-osiagniecia"][0]`
	)

	return (
		<>
			<Header
				title={homepageHeader.title}
				description={homepageHeader.description}
				imageUrl={urlFor(homepageHeader.image).url()}
				imageAlt={homepageHeader.imageAlt}
			>
				<div className='flex flex-col sm:flex-row gap-6 items-start mt-8 w-full'>
					<Link href={homepageHeader.cta1Link}>
						<Button variant='lightPink' className='border-[1px] border-black px-8 w-full sm:w-auto'>
							{homepageHeader.cta1Title}
						</Button>
					</Link>
					<Link href={homepageHeader.cta2Link}>
						<Button variant='lightPinkOutline' className='border-[1px] border-black px-8 w-full sm:w-auto'>
							{homepageHeader.cta2Title}
						</Button>
					</Link>
				</div>
			</Header>
			<div className='bg-light-pink w-full py-8 xl:py-16 px-6 xl:px-0'>
				<Title
					sectionName={sectionTitle?.subtitle ?? ''}
					title={sectionTitle?.title ?? ''}
					longText={sectionTitle?.description ?? ''}
				/>
			</div>
			<Achievements />
			<ContentAccordion limit={3} />
			{separatorWithButton?.enable && separatorWithButton?.allowedPages.includes('homepage') && (
				<div className='bg-dark-gray w-full py-8 xl:py-16 px-6 xl:px-0'>
					<Title className='text-light-pink sm:text-left text-center' title={separatorWithButton.title}>
						<Link href={separatorWithButton.buttonLink} className='sm:ml-auto'>
							<Button variant='white' className='sm:w-fit md:px-32 mx-auto w-full'>
								{separatorWithButton.buttonTitle}
							</Button>
						</Link>
					</Title>
				</div>
			)}
			<Doctors />
			<Testimonials limit={3} />
			<BlogList />
		</>
	)
}
