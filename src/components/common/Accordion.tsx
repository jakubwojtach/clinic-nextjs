'use client'

import { IconChevronDown } from '@tabler/icons-react'
import classNames from 'classnames'
import { useCallback, useState } from 'react'

interface AccordionProps {
	items: {
		title: string
		content: string
		id: string
	}[]
	allowMultipleOpen?: boolean
}

export const Accordion = ({ items, allowMultipleOpen = false }: AccordionProps) => {
	const [activeItem, setActiveItem] = useState<string[]>([])

	const handleItemClick = useCallback(
		(id: string) => {
			if (allowMultipleOpen) {
				setActiveItem((prevItems) =>
					prevItems.includes(id) ? prevItems.filter((item) => item !== id) : [...prevItems, id]
				)
			} else {
				setActiveItem((prevItems) => (prevItems.includes(id) ? prevItems.filter((item) => item !== id) : [id]))
			}
		},
		[allowMultipleOpen]
	)
	return (
		<div className='flex flex-col gap-4 w-full'>
			{items.map((item) => (
				<button key={item.id} className='relative w-full' onClick={() => handleItemClick(item.id)}>
					<div className='flex flex-col gap-2 pr-4 items-start justify-start'>
						<h3 className='text-lg font-bold text-left'>{item.title}</h3>
						<p
							className={classNames('text-sm text-left', {
								hidden: !activeItem.includes(item.id),
								'border-b-[2px] border-dark-gray pb-4': activeItem.includes(item.id)
							})}
						>
							{item.content}
						</p>
					</div>
					<IconChevronDown
						className={classNames('transition-all duration-300 absolute right-0 top-0', {
							'rotate-180': activeItem.includes(item.id)
						})}
					/>
				</button>
			))}
		</div>
	)
}
