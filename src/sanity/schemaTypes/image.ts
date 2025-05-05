import { defineField, defineType } from 'sanity'

export const image = defineType({
	name: 'images',
	title: 'Obrazki',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Nazwa',
			type: 'string'
		}),
		defineField({
			name: 'alt',
			title: 'Tekst alternatywny',
			type: 'string'
		}),
		defineField({
			name: 'caption',
			title: 'Podpis',
			type: 'string'
		}),
		defineField({
			name: 'description',
			title: 'Opis',
			type: 'string'
		}),
		defineField({
			name: 'image',
			title: 'Obrazek',
			type: 'image'
		})
	]
})
