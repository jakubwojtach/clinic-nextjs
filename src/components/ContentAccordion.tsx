'use client'
import classNames from 'classnames'
import { Title } from './common/Title'
import { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/client'
import Image from 'next/legacy/image'
import { urlFor } from '@/sanity/lib/image'
import { AccordionHomepage } from '@/types/sanity'
import { getContainerClass } from './common/utils'

export const ContentAccordion = () => {
	const [activeTab, setActiveTab] = useState(0)
	const [accordionContent, setAccordionContent] = useState<AccordionHomepage[]>([])

	useEffect(() => {
		const fetchAccordions = async () => {
			const accordions = await client.fetch(`*[_type == "accordionHomepage"][0...3]`)
			setAccordionContent(accordions)
		}
		fetchAccordions()
	}, [])

	console.log('accordionContent', accordionContent)
	return (
		<div className={getContainerClass('centered')}>
			<Title
				className='text-light-pink'
				sectionName='Accordion'
				title='Accordion'
				longText='Laborum elit culpa et nisi irure nulla ipsum cupidatat id eu do nostrud nulla quis. Occaecat elit sint sit. Laboris consequat anim proident. Excepteur commodo et aliquip eiusmod non ad consequat aliqua sit veniam. Est exercitation commodo ex cillum. Excepteur proident elit nostrud proident.'
			/>
			<div className='w-full flex flex-col gap-8 container'>
				{accordionContent.map((accordion, index) => (
					<div
						key={accordion._id}
						className={classNames(
							'w-full lg:w-screen flex flex-col gap-4 transition-all duration-300 cursor-pointer relative',
							activeTab === index &&
								'p-4 lg:pb-1 sm:pr-0 bg-white rounded-xl rounded-tl-3xl sm:after:opacity-100 hover:shadow-2xl transition-all duration-300'
						)}
						onClick={() => setActiveTab(index)}
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
												'text-lg  font-black leading-none mt-[2px]',
												activeTab === index ? 'text-dark-gray' : 'text-light-pink'
											)}
										>
											{accordion.title}
										</h3>
									</div>
									<p className={classNames('text-sm', activeTab === index ? 'block' : 'hidden')}>
										{accordion.description}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
