import { client } from '@/sanity/lib/client'
import { Title } from './common/Title'
import { Testimonial } from '@/types/sanity'
import { IconStarFilled } from '@tabler/icons-react'
import { getContainerClass } from './common/utils'

export const Testimonials = async () => {
	const testimonials = await client.fetch<Testimonial[]>(`*[_type == "testimonials"][0...3]`)

	return (
		<div className='w-full py-8 sm:py-16 bg-light-pink px-6 xl:px-0'>
			<div className={getContainerClass('centered')}>
				<Title
					sectionName='Opinie pacjentów'
					title='Co mówią nasi pacjenci'
					longText='Przeczytaj opinie naszych pacjentów, którzy skorzystali z naszych usług. Zobacz, jak nasze usługi pomogły im w poprawie swojego zdrowia.'
				/>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
					{testimonials.map((testimonial) => (
						<div
							key={testimonial._id}
							className='bg-white p-8 rounded-xl rounded-tl-3xl flex flex-col relative hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full border-[1px] border-pink/40'
						>
							<div className='absolute top-[-60px] left-0 opacity-5'>
								<p className='text-[200px] text-gray-500'>{`"`}</p>
							</div>
							<p className='font-bold text-2xl leading-tight'>{`${testimonial.review.slice(0, 10)}`}</p>
							<p className='text-sm text-gray-500 mb-8 mt-2'>{`${testimonial.review.slice(10)}"`}</p>
							<div className='flex md:flex-col gap-4 w-full justify-between mt-auto items-start md:items-end'>
								<div className='flex flex-row gap-1'>
									{Array.from({ length: testimonial.rating }).map((_, index) => (
										<IconStarFilled key={index} className='text-dark-gray w-6' />
									))}
									{Array.from({ length: 5 - testimonial.rating }).map((_, index) => (
										<IconStarFilled key={index} className='text-gray-100 w-6' />
									))}
								</div>
								<strong className='text-xs text-gray-500'>{`${testimonial.name}`}</strong>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
