import { ICON_VALUES } from '@/constants/icon-list'
import { IconTrophy } from '@tabler/icons-react'
import { defineType, defineField } from 'sanity'

export const achievements = defineType({
	name: 'achievements',
	title: 'Osiągnięcia',
	type: 'document',
	icon: IconTrophy,
	fields: [
		defineField({
			name: 'title',
			title: 'Tytuł',
			type: 'string'
		}),
		defineField({
			name: 'icon',
			title: 'Ikonka',
			type: 'string',
			description: 'Ikony do podejrzenia tutaj: https://tabler.io/icons',
			options: {
				list: ICON_VALUES
			}
		})
	]
})
