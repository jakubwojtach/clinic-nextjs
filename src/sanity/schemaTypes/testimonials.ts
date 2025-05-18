import { IconQuote } from '@tabler/icons-react'
import { defineField, defineType } from 'sanity'

export const testimonials = defineType({
	name: 'testimonials',
	title: 'Opinie klientów',
	type: 'document',
	icon: IconQuote,
	fields: [
		defineField({
			name: 'name',
			title: 'Imię i nazwisko',
			type: 'string'
		}),
		defineField({
			name: 'rating',
			title: 'Ocena',
			type: 'number'
		}),
		defineField({
			name: 'review',
			title: 'Opinia',
			type: 'text'
		}),
		defineField({
			name: 'source',
			title: 'Źródło',
			type: 'string'
		})
	]
})
