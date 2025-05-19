import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { getContainerClass } from '../utils/utils'

interface HeaderProps extends PropsWithChildren {
	title: string
	description: string
	imageUrl?: string
	imageAlt?: string
	textColor?: string
	backgroundColor?: string
}

export const Header = async ({
	title,
	description,
	imageUrl,
	imageAlt,
	children,
	textColor = 'text-light-pink',
	backgroundColor = 'bg-transparent'
}: HeaderProps) => {
	return (
		<header
			className={`${getContainerClass('withGap')} grid grid-cols-1 lg:grid-cols-2 ${textColor} ${backgroundColor}`}
		>
			<div className='flex flex-col justify-center items-start gap-2 xl:gap-4 w-full order-2 lg:order-1'>
				<h1 className='text-title font-bold'>{title}</h1>
				<p>{description}</p>
				{children}
			</div>
			{imageUrl && (
				<div className='w-full min-h-[200px] md:min-h-[300px] lg:min-h-[350px] py-16 bg-light-pink rounded-xl lg:rounded-tl-[80px] border-[1px] border-black/10 hover:shadow-2xl transition-all duration-300 hover:scale-105 lg:block relative overflow-hidden order-1 lg:order-last'>
					<Image
						src={urlFor(imageUrl).url()}
						alt={imageAlt || ''}
						layout='fill'
						className='w-full h-full object-cover'
					/>
				</div>
			)}
		</header>
	)
}
