import { client } from '@/sanity/lib/client'
import Image from 'next/legacy/image'
import { urlFor } from '@/sanity/lib/image'
import { IconActivity } from '@tabler/icons-react'

export const Fundaments = async () => {
	const dividerImage = await client.fetch(`*[_type == "images"][name == "homepage-divider"]`)

	return (
		<>
			<div className='relative w-full h-[450px] mt-12'>
				<Image
					src={urlFor(dividerImage[0].image).url()}
					alt='Fundamenty'
					layout='fill'
					className='object-cover rounded-tl-[200px]'
				/>
			</div>
			<div className='w-full bg-dark-gray py-8 sm:py-16 px-6 xl:px-0'>
				<div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-16'>
					{Array.from({ length: 5 }).map((_, index) => (
						<div key={index} className='flex flex-col gap-4 text-light-pink items-center'>
							<IconActivity />
							<p className='text-sm'>laboris ullamco ullamco</p>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
