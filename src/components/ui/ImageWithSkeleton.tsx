import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface ImageWithSkeletonProps {
	src: string
	alt: string
	width: number
	height: number
	className?: string
	priority?: boolean
	quality?: number
	sizes?: string
}

export function ImageWithSkeleton({
	src,
	alt,
	width,
	height,
	className,
	priority = false,
	quality = 75,
	sizes = '100vw'
}: ImageWithSkeletonProps) {
	const [isLoading, setIsLoading] = useState(true)

	return (
		<div className='relative overflow-hidden'>
			{/* Skeleton loader */}
			{isLoading && (
				<div
					className={cn(
						'absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer',
						className
					)}
					style={{
						backgroundSize: '200% 100%',
						animation: 'shimmer 1.5s infinite'
					}}
				/>
			)}

			{/* Actual image */}
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={cn('transition-opacity duration-300', isLoading ? 'opacity-0' : 'opacity-100', className)}
				onLoadingComplete={() => setIsLoading(false)}
				priority={priority}
				quality={quality}
				sizes={sizes}
			/>
		</div>
	)
}
