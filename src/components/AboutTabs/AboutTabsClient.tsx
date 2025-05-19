'use client'

import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { AboutTab } from '@/types/sanity'
import { useState } from 'react'
import { getContainerClass } from '../../utils/utils'
import { renderIcon } from '@/utils/icon'

export const AboutTabsClient = ({ aboutTabs }: { aboutTabs: AboutTab[] }) => {
	const [activeTab, setActiveTab] = useState(0)

	return (
		<div
			className={`${getContainerClass('withGap')} grid grid-cols-1 lg:grid-cols-2 text-gray bg-light-pink relative !pb-20 mb-8`}
		>
			<div className='flex flex-col justify-center items-start gap-2 xl:gap-4 order-2 lg:order-1'>
				<h1 className='text-title font-bold'>{aboutTabs[activeTab].title}</h1>
				<p>{aboutTabs[activeTab].description}</p>
			</div>
			<div className='w-full min-h-[250px] lg:min-h-[350px] py-16 bg-light-pink rounded-xl rounded-tl-[80px] border-[1px] border-black/10 hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden lg:order-last order-1'>
				<Image
					src={urlFor(aboutTabs[activeTab].image).url()}
					alt={aboutTabs[activeTab].title}
					layout='fill'
					className='w-full h-full object-cover'
				/>
			</div>
			<div className='absolute bottom-[-40px] left-0 w-full py-6 bg-dark-gray lg:rounded-[50px] flex items-center justify-around'>
				{aboutTabs.map((tab, index) => (
					<button
						key={tab._id}
						className={`flex flex-col items-center justify-center gap-2 text-light-pink transition-all duration-300 cursor-pointer text-xs ${
							activeTab !== index ? 'opacity-50' : 'opacity-100'
						}`}
						onClick={() => setActiveTab(index)}
					>
						{renderIcon(tab.icon)}
						<p>{tab.title}</p>
					</button>
				))}
			</div>
		</div>
	)
}
