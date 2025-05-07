import { defineField, defineType } from 'sanity'

export const tags = defineType({
	name: 'tags',
	title: 'Tagi',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Nazwa',
			type: 'string'
		})
	]
})
