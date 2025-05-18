import { IconCopyright } from '@tabler/icons-react'
import { defineType, defineField } from 'sanity'

export const footer = defineType({
	name: 'footer',
	title: 'Stopka',
	type: 'document',
	icon: IconCopyright,
	fields: [
		defineField({
			name: 'leftTitle',
			title: 'Tytuł - lewa kolumna',
			type: 'string',
			description: 'Tutaj wpisz tytuł lewej kolumny'
		}),
		defineField({
			name: 'leftDescription',
			title: 'Opis - lewa kolumna',
			type: 'text',
			description: 'Tutaj wpisz opis lewej kolumny'
		}),
		defineField({
			name: 'rightTitle',
			title: 'Tytuł - prawa kolumna',
			type: 'string',
			description: 'Tutaj wpisz tytuł prawej kolumny'
		}),
		defineField({
			name: 'rightDescription',
			title: 'Opis - prawa kolumna',
			type: 'text',
			description: 'Tutaj wpisz opis prawej kolumny'
		}),
		defineField({
			name: 'address',
			title: 'Address',
			type: 'string',
			description: 'Tutaj wpisz adres'
		}),
		defineField({
			name: 'phone',
			title: 'Phone',
			type: 'string',
			description: 'Tutaj wpisz numer telefonu'
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
			description: 'Tutaj wpisz adres email'
		}),
		defineField({
			name: 'socialMedia',
			title: 'Social Media',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'socialMedia' }] }]
		})
	]
})
