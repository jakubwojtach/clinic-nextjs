import { ICON_OPTIONS } from '@/constants/icon-list'
import { IconTableShare } from '@tabler/icons-react'
import { defineField, defineType } from 'sanity'

export const aboutTabs = defineType({
	name: 'aboutTabs',
	title: 'Górna sekcja - o nas',
	type: 'document',
	icon: IconTableShare,
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
			description: 'Tutaj wstaw obrazek'
		}),
		defineField({
			name: 'icon',
			title: 'Ikona',
			type: 'string',
			description: 'Ikony do podejrzenia tutaj: https://tabler.io/icons',
			options: {
				list: ICON_OPTIONS
			}
		})
	]
})
