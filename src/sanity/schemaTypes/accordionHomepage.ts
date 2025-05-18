import { IconGrid3x3 } from '@tabler/icons-react'
import { defineField, defineType } from 'sanity'

export const accordionHomepage = defineType({
	name: 'accordionHomepage',
	title: 'Akordeon z obrazkami',
	type: 'document',
	icon: IconGrid3x3,
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
