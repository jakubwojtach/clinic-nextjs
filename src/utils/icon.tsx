import { ICON_OPTIONS } from '../constants/icon-list'
import dynamic from 'next/dynamic'
import type { ComponentType } from 'react'

// Create a dynamic import map for all icons
const iconComponents = ICON_OPTIONS.reduce(
	(acc, { value }) => {
		acc[value] = dynamic<Record<string, never>>(() =>
			import('@tabler/icons-react').then((mod) => {
				const Icon = mod[value] as ComponentType
				return Icon
			})
		)
		return acc
	},
	{} as Record<string, ComponentType>
)

export const renderIcon = (icon: (typeof ICON_OPTIONS)[number]['value']) => {
	const IconComponent = iconComponents[icon]
	return IconComponent ? <IconComponent /> : null
}
