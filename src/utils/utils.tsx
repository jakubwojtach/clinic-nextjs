export const commonClassName = 'container py-8 sm:py-16 px-6 xl:px-0 gap-8 xl:gap-16'

export const containerStyles = {
	base: 'container',
	withPadding: 'container py-8 sm:py-16 px-6 xl:px-0',
	withGap: 'container py-8 sm:py-16 px-6 xl:px-0 gap-8 xl:gap-16',
	centered: 'container py-8 sm:py-16 px-6 xl:px-0 flex flex-col items-center gap-8 xl:gap-16'
}

export const getContainerClass = (variant: keyof typeof containerStyles = 'withGap') => {
	return containerStyles[variant]
}

export const convertToSortingString = (sorting: string) => {
	switch (sorting) {
		case 'newest':
			return 'publishedAt desc'
		case 'oldest':
			return 'publishedAt asc'
		case 'a-z':
			return 'title asc'
		case 'z-a':
			return 'title desc'
		default:
			return 'publishedAt desc'
	}
}

export const convertFromSortingString = (sorting: string) => {
	switch (sorting) {
		case 'publishedAt desc':
			return 'newest'
		case 'publishedAt asc':
			return 'oldest'
		case 'title asc':
			return 'a-z'
		case 'title desc':
			return 'z-a'
		default:
			return 'newest'
	}
}
