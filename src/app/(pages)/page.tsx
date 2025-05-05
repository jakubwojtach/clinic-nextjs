import { Title } from '@/components/common/Title'
import { BlogList } from '@/components/BlogList'
import { Testimonials } from '@/components/Testimonials'
import { Header } from '@/components/Header'
import { Doctors } from '@/components/Doctors'
import { ContentAccordion } from '@/components/ContentAccordion'
import { Button } from '@/components/common/Button'
import { Fundaments } from '@/components/Fundaments'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'

export default async function IndexPage() {
	const images = await client.fetch(`*[_type == "images"][name == "homepage-top"]`)

	return (
		<>
			<Header
				title='Ginekologia by Dr. Grochecka'
				description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
				imageUrl={images[0].image}
				imageAlt={images[0].name}
			>
				<div className='flex flex-col sm:flex-row gap-6 items-start mt-8 w-full'>
					<Link href='/about'>
						<Button variant='lightPink' className='border-[1px] border-black px-8 w-full sm:w-auto'>
							O nas
						</Button>
					</Link>
					<Link href='/doctors'>
						<Button variant='lightPinkOutline' className='border-[1px] border-black px-8 w-full sm:w-auto'>
							Poznaj naszych lekarzy
						</Button>
					</Link>
				</div>
			</Header>
			<div className='bg-light-pink w-full py-8 xl:py-16 px-6 xl:px-0'>
				<Title
					sectionName='Cały czas się rozwijamy'
					title='Nasze osiągnięcia'
					longText='Jesteśmy zespołem specjalistów, którzy są zdeterminowani, życzliwi i wnikliwi. Nasi lekarze są wysoko wykwalifikowani i posiadają wieloletnie doświadczenie w swoich dziedzinach.'
				/>
			</div>
			<Fundaments />
			<ContentAccordion />
			<div className='bg-dark-gray w-full py-8 xl:py-16 px-6 xl:px-0'>
				<Title className='text-light-pink' title='Cokolwiek innego'>
					<Button variant='white' className='sm:w-fit md:px-32 mx-auto w-full'>
						Czytaj więcej
					</Button>
				</Title>
			</div>
			<Doctors />
			<Testimonials />
			<BlogList />
		</>
	)
}
