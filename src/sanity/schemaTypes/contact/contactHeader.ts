import { IconPhone } from '@tabler/icons-react'
import { defineField, defineType } from 'sanity'

export const contactHeader = defineType({
	name: 'contactHeader',
	title: 'Nagłówek - Kontakt',
	type: 'document',
	icon: IconPhone,
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
	]
})
