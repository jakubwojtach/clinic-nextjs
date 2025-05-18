import { IconMenu2 } from '@tabler/icons-react'
import { defineType, defineField } from 'sanity'

export const navigation = defineType({
	name: 'navigation',
	title: 'Navigation',
	type: 'document',
	icon: IconMenu2,
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string'
		})
	]
})
