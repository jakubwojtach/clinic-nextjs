'use client'

import classNames from 'classnames'
import { Title } from '../common/Title'
import { useCallback, useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { AccordionHomepage, SectionTitles } from '@/types/sanity'
import { getContainerClass } from '../../utils/utils'
import { IconChevronDown } from '@tabler/icons-react'

interface ContentAccordionClientProps {
	accordions: AccordionHomepage[]
	sectionTitle: SectionTitles
}

export const ContentAccordionClient = ({ accordions, sectionTitle }: ContentAccordionClientProps) => {
	const [activeTab, setActiveTab] = useState<number | null>(0)
	const handleTabClick = useCallback(
		(index: number) => {
			setActiveTab(activeTab === index ? null : index)
		},
		[activeTab]
	)

	return (
		<div className={getContainerClass('centered')}>
			<Title
				className='text-light-pink'
				sectionName={sectionTitle?.subtitle}
				title={sectionTitle?.title}
				longText={sectionTitle?.description}
			/>
			<div className='w-full flex flex-col gap-8 container'>
				{accordions.map((accordion, index) => (
					<div
						key={accordion._id}
						className={classNames(
							'w-full lg:w-screen flex flex-col gap-4 transition-all duration-300 cursor-pointer relative group',
							activeTab === index ?
								'p-4 lg:pb-1 sm:pr-0 bg-white rounded-xl rounded-tl-3xl sm:after:opacity-100 hover:shadow-2xl transition-all duration-300'
							:	''
						)}
						onClick={() => handleTabClick(index)}
					>
						<div className='flex gap-8 items-center justify-between'>
							<div className='flex sm:flex-row flex-col gap-8 items-center'>
								<div
									className={classNames(
										'w-full sm:w-40 h-30 bg-light-pink rounded-lg rounded-tl-3xl flex items-center justify-center relative overflow-hidden',
										activeTab === index ? 'block' : 'hidden'
									)}
								>
									<Image
										src={urlFor(accordion.image).url()}
										alt={accordion.title}
										layout='fill'
										className='w-full h-full object-cover'
									/>
								</div>
								<div className='flex flex-col gap-4 max-w-[400px] lg:max-w-[800px]'>
									<div className='flex gap-4 items-center'>
										<p className='text-xl text-dark-gray font-semibold'>{`${index + 1}/`}</p>
										<h3
											className={classNames(
												'text-lg font-black leading-none mt-[2px] transition-colors duration-300',
												activeTab === index ? 'text-dark-gray' : 'text-light-pink group-hover:text-pink'
											)}
										>
											{accordion.title}
										</h3>
										<button
											className={classNames(
												'text-sm transition-all duration-300 transform',
												activeTab === index ? 'rotate-180 text-dark-gray' : (
													'text-light-pink group-hover:text-pink group-hover:rotate-180'
												)
											)}
										>
											<IconChevronDown />
										</button>
									</div>
									<p className={classNames('text-sm', activeTab === index ? 'block' : 'hidden')}>
										{accordion.description}
									</p>
								</div>
							</div>
						</div>
						<div
							className={classNames(
								'absolute bottom-[-10px] left-0 w-full h-[3px] bg-pink transition-all duration-300',
								activeTab === index ? 'hidden' : 'opacity-0 group-hover:opacity-100 group-hover:scale-x-100 scale-x-0'
							)}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
