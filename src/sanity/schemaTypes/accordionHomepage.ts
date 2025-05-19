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
			type: 'string',
			description: 'Tutaj wpisz tytuł sekcji'
		}),
		defineField({
			name: 'description',
			title: 'Opis',
			type: 'text',
			description: 'Tutaj wpisz opis sekcji'
		}),
		defineField({
			name: 'image',
			title: 'Obrazek',
			type: 'image',
			description: 'Tutaj wstaw obrazek. Najlepiej w formacie 16:9'
		})
	]
})
