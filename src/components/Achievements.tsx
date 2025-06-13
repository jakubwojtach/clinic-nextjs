import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { renderIcon } from '@/utils/icon'
import { getAchievements, getDividerImage } from '@/lib/sanity-queries'

export const Achievements = async () => {
	const [dividerImage, achievements] = await Promise.all([getDividerImage(), getAchievements()])

	return (
		<>
			<div className='relative w-full h-[200px] md:h-[300px] lg:h-[450px] mt-12'>
				<Image
					src={urlFor(dividerImage.image).url()}
					alt='Osiągnięcia'
					layout='fill'
					className='object-cover rounded-tl-[200px]'
				/>
			</div>
			<div className='w-full bg-dark-gray py-8 sm:py-16 px-6 xl:px-0'>
				<div className='container grid grid-cols-2 lg:grid-cols-3 gap-8 xl:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] xl:max-w-[1200px] xl:gap-8 items-start justify-center w-full mx-auto'>
					{achievements.map((achievement) => (
						<div key={achievement._id} className='flex flex-col gap-4 text-light-pink items-center justify-center'>
							{renderIcon(achievement.icon)}
							<p className='text-sm text-center'>{achievement.title}</p>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
