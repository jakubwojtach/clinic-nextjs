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
