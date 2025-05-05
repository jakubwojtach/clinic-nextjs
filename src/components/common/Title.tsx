import { PropsWithChildren } from 'react'

interface TitleProps extends PropsWithChildren {
	sectionName?: string
	title: string
	className?: string
	longText?: string
}

export const Title = ({ sectionName, title, longText, className, children }: TitleProps) => {
	return (
		<div className={`container ${className}`}>
			<div className='w-full flex flex-col gap-4'>
				{sectionName && <h4 className='uppercase sm:text-sm font-bold text-xs'>{sectionName}</h4>}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
					<h2 className='text-title font-bold'>{title}</h2>
					{longText && <p className='text-sm sm:text-base'>{longText}</p>}
					{children}
				</div>
			</div>
		</div>
	)
}
