import { defineType, defineField } from 'sanity'

export const separatorWithButton = defineType({
	name: 'separatorWithButton',
	title: 'Separator z przyciskiem',
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
			name: 'buttonTitle',
			title: 'Tytuł przycisku',
			type: 'string'
		}),
		defineField({
			name: 'buttonLink',
			title: 'Link przycisku',
			type: 'string',
			options: {
				list: ['about', 'doctors', 'contact', 'blog', 'homepage']
			}
		}),
		defineField({
			name: 'allowedPages',
			title: 'Strony',
			type: 'array',
			of: [{ type: 'string', options: { list: ['about', 'doctors', 'contact', 'blog', 'homepage'] } }],
			initialValue: ['homepage']
		}),
		defineField({
			name: 'enable',
			title: 'Włączony',
			type: 'boolean',
			initialValue: true
		})
	]
})
