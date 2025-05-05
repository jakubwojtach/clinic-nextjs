import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import classNames from 'classnames'
export const BUTTON_VARIANTS = {
	black: 'bg-black text-white',
	blackOutline: 'bg-transparent text-black border-[1px] border-black',
	lightPink: 'bg-light-pink text-black',
	white: 'bg-white text-black',
	lightPinkOutline:
		'bg-transparent text-light-pink border-[1px] border-light-pink hover:bg-light-pink hover:text-black',
	gray: 'bg-dark-gray text-white',
	grayOutline: 'bg-transparent text-white border-[1px] border-dark-gray',
	whiteOutline: 'bg-transparent text-black border-[1px] border-black'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
	variant?: keyof typeof BUTTON_VARIANTS
	className?: string
}

export const Button = ({ children, variant = 'black', className, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={classNames(
				BUTTON_VARIANTS[variant],
				'px-4 py-2 rounded-lg rounded-tl-3xl font-medium hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-2xl',
				className
			)}
		>
			{children}
		</button>
	)
}
