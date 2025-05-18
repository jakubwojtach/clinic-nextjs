import { IconLetterCaseToggle } from '@tabler/icons-react'
import { defineType, defineField } from 'sanity'

export const sectionTitles = defineType({
	name: 'sectionTitles',
	title: 'Sekcje tekstowe',
	type: 'document',
	icon: IconLetterCaseToggle,
	fields: [
		defineField({
			name: 'subtitle',
			title: 'Podtytuł',
			type: 'string'
		}),
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
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title'
			}
		})
	]
})
