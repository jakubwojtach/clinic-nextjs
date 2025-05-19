import { IconInfoCircle } from '@tabler/icons-react'
import { defineField, defineType } from 'sanity'

export const aboutHeader = defineType({
	name: 'aboutHeader',
	title: 'Nagłówek - O nas',
	type: 'document',
	icon: IconInfoCircle,
	fields: [
		defineField({
			name: 'title',
			title: 'Tytuł nagłówka',
			type: 'string'
		}),
		defineField({
			name: 'description',
			title: 'Opis nagłówka',
			type: 'text'
		}),
		defineField({
			name: 'image',
			title: 'Obrazek nagłówka',
			type: 'image'
		}),
		defineField({
			name: 'imageAlt',
			title: 'Tekst alternatywny obrazka nagłówka',
			type: 'string'
		})
	],
	preview: {
		select: {
			title: 'title'
		}
	}
})
