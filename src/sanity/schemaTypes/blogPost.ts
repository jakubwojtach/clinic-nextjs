import { defineType, defineField } from 'sanity'

export const blogPost = defineType({
	name: 'blogPost',
	title: 'Posty baza wiedzy',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Tytuł posta',
			type: 'string'
		}),

		defineField({
			name: 'content',
			title: 'Treść posta',
			type: 'array',
			of: [{ type: 'block' }]
		}),
		defineField({
			name: 'author',
			title: 'Autor',
			type: 'string'
		}),
		defineField({
			name: 'publishedAt',
			title: 'Data publikacji',
			type: 'datetime',
			initialValue: new Date().toISOString(),
			validation: (Rule) => Rule.required()
		}),
		//defineField({
		//	name: 'categories',
		//	title: 'Categories',
		//	type: 'array',
		//	of: [{ type: 'reference', to: { type: 'category' } }]
		//}),
		defineField({
			name: 'mainImage',
			title: 'Główne zdjęcie',
			type: 'image'
		}),
		defineField({
			name: 'tags',
			title: 'Tagi',
			type: 'array',
			of: [{ type: 'string' }]
		})
	]
})
