import { client } from '@/sanity/lib/client'
import Image from 'next/legacy/image'
import { urlFor } from '@/sanity/lib/image'
import { Achievements as AchievementType } from '@/types/sanity'
import { renderIcon } from '@/utils/icon'

export const Achievements = async () => {
	const dividerImage = await client.fetch(`*[_type == "images"][name == "homepage-divider"]`)
	const achievements = await client.fetch<AchievementType[]>(`*[_type == "achievements"]`)

	return (
		<>
			<div className='relative w-full h-[200px] sm:h-[450px] mt-12'>
				<Image
					src={urlFor(dividerImage[0].image).url()}
					alt='Osiągnięcia'
					layout='fill'
					className='object-cover rounded-tl-[200px]'
				/>
			</div>
			<div className='w-full bg-dark-gray py-8 sm:py-16 px-6 xl:px-0'>
				<div className='container grid grid-cols-2 sm:grid-cols-3 gap-8 xl:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] xl:max-w-[1200px] xl:gap-16 items-center justify-center w-full mx-auto'>
					{achievements.map((achievement) => (
						<div key={achievement._id} className='flex flex-col gap-4 text-light-pink items-center justify-center'>
							{renderIcon(achievement.icon)}
							<p className='text-sm text-center max-w-[120px]'>{achievement.title}</p>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
