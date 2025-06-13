import { IconPhone } from '@tabler/icons-react'
import { defineField, defineType } from 'sanity'

export const contactSections = defineType({
	name: 'contactSections',
	title: 'Sekcje kontaktu',
	type: 'document',
	icon: IconPhone,
	fields: [
		defineField({
			name: 'leftSectionTitle',
			title: 'Tytuł sekcji lewej',
			type: 'string',
			initialValue: 'Napisz do nas'
		}),
		defineField({
			name: 'leftSectionDescription',
			title: 'Opis sekcji lewej',
			type: 'text',
			initialValue: 'Skorzystaj z formularza poniżej, aby skontaktować się z nami.'
		}),
		defineField({
			name: 'rightSectionTitle',
			title: 'Tytuł sekcji prawej',
			type: 'string',
			initialValue: 'FAQ'
		}),
		defineField({
			name: 'rightSectionDescription',
			title: 'Opis sekcji prawej',
			type: 'text',
			initialValue: 'Odpowiedzi na najczęstsze pytania'
		})
	]
})
