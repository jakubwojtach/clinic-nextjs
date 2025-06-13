import { Title } from './common/Title'
import { IconStarFilled } from '@tabler/icons-react'
import { getContainerClass } from '../utils/utils'
import { getTestimonials, getSectionTitle } from '@/lib/sanity-queries'

interface TestimonialsProps {
	limit?: number
}

export const Testimonials = async ({ limit }: TestimonialsProps) => {
	const [testimonials, sectionTitle] = await Promise.all([
		getTestimonials(limit),
		getSectionTitle('co-mowia-nasi-pacjenci')
	])

	if (testimonials.length === 0) return null

	return (
		<div className='w-full bg-light-pink '>
			<div className={getContainerClass('centered')}>
				<Title sectionName={sectionTitle?.subtitle} title={sectionTitle?.title} longText={sectionTitle?.description} />
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
					{testimonials.map((testimonial) =>
						testimonial.review && testimonial.review.length > 0 ?
							<div
								key={testimonial._id}
								className='bg-white p-8 rounded-xl rounded-tl-3xl flex flex-col relative hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full border-[1px] border-pink/40'
							>
								<div className='absolute top-[-60px] left-0 opacity-5'>
									<p className='text-[200px] text-gray-500'>{`"`}</p>
								</div>

								<p className='font-bold text-2xl leading-tight'>{`${testimonial.review?.slice(0, 10)}...`}</p>
								<p className='text-sm text-gray-500 mb-8 mt-2'>{`...${testimonial.review?.slice(10)}`}</p>
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
						:	null
					)}
				</div>
			</div>
		</div>
	)
}
