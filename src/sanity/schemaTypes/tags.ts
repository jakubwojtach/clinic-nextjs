import { IconTags } from '@tabler/icons-react'
import { defineField, defineType } from 'sanity'

export const tags = defineType({
	name: 'tags',
	title: 'Tagi',
	type: 'document',
	icon: IconTags,
	fields: [
		defineField({
			name: 'name',
			title: 'Nazwa',
			type: 'string'
		})
	]
})
