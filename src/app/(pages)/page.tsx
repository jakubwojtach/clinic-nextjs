import { Title } from '@/components/common/Title'
import { BlogList } from '@/components/BlogList'
import { Testimonials } from '@/components/Testimonials'
import { Doctors } from '@/components/Doctors'
import { ContentAccordion } from '@/components/ContentAccordion/ContentAccordion'
import { Button } from '@/components/common/Button'
import { Achievements } from '@/components/Achievements'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { SectionTitles, SeparatorWithButton } from '@/types/sanity'
import { HomepageHeader } from '@/components/HomepageHeader'
export default async function IndexPage() {
	const separatorWithButton = await client.fetch<SeparatorWithButton | null>(`*[_type == "separatorWithButton"][0]`)
	const sectionTitle = await client.fetch<SectionTitles | null>(
		`*[_type == "sectionTitles" && slug.current == "nasze-osiagniecia"][0]`
	)

	return (
		<>
			<HomepageHeader />
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
					<Title className='text-light-pink' title={separatorWithButton.title}>
						<Link href={separatorWithButton.buttonLink} className='w-full lg:w-fit flex flex-col gap-8'>
							<p className='text-left'>{separatorWithButton.description}</p>
							<Button variant='white' className='lg:w-fit md:px-32 w-full'>
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
