import { defineField, defineType } from 'sanity'

export const accordionHomepage = defineType({
	name: 'accordionHomepage',
	title: 'Akordeon na stronie głównej',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Tytuł',
			type: 'string'
		}),
		defineField({
			name: 'description',
			title: 'Opis',
			type: 'text'
		}),
		defineField({
			name: 'image',
			title: 'Obrazek',
			type: 'image'
		})
	]
})
