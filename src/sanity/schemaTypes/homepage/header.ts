import { ALLOWED_PAGES } from '@/types/sanity'
import { IconHome } from '@tabler/icons-react'
import { defineType, defineField } from 'sanity'

export const homepageHeader = defineType({
	name: 'homepageHeader',
	title: 'Nagłówek - strona główna',
	type: 'document',
	icon: IconHome,
	fields: [
		defineField({
			name: 'title',
			title: 'Tytuł header',
			type: 'string'
		}),
		defineField({
			name: 'description',
			title: 'Opis header',
			type: 'text'
		}),
		defineField({
			name: 'image',
			title: 'Obrazek header',
			type: 'image'
		}),
		defineField({
			name: 'imageAlt',
			title: 'Tekst alternatywny obrazka header',
			type: 'string'
		}),
		defineField({
			name: 'cta1Title',
			title: 'Tytuł przycisku 1',
			type: 'string'
		}),
		defineField({
			name: 'cta1Link',
			title: 'Link przycisku 1',
			type: 'string',
			options: {
				list: ALLOWED_PAGES
			}
		}),
		defineField({
			name: 'cta2Title',
			title: 'Tytuł przycisku 2',
			type: 'string'
		}),
		defineField({
			name: 'cta2Link',
			title: 'Link przycisku 2',
			type: 'string',
			options: {
				list: ALLOWED_PAGES
			}
		})
	],
	preview: {
		select: {
			title: 'title'
		}
	}
})
