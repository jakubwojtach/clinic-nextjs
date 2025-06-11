import { Button } from './common/Button'
import { Header } from './Header'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { getHomepageHeader } from '@/lib/sanity-queries'

export const HomepageHeader = async () => {
	const homepageHeader = await getHomepageHeader()

	return (
		<Header
			title={homepageHeader.title}
			description={homepageHeader.description}
			imageUrl={urlFor(homepageHeader.image).url()}
			imageAlt={homepageHeader.imageAlt}
		>
			<div className='flex flex-col md:flex-row gap-6 items-start mt-8 w-full'>
				<Link href={homepageHeader.cta1Link} className='w-full lg:w-auto'>
					<Button variant='lightPink' className='border-[1px] border-black px-8 w-full lg:w-auto'>
						{homepageHeader.cta1Title}
					</Button>
				</Link>
				<Link href={homepageHeader.cta2Link} className='w-full lg:w-auto'>
					<Button variant='lightPinkOutline' className='border-[1px] border-black px-8 w-full lg:w-auto'>
						{homepageHeader.cta2Title}
					</Button>
				</Link>
			</div>
		</Header>
	)
}
