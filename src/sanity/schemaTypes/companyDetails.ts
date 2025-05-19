import { IconBuilding } from '@tabler/icons-react'
import { defineType } from 'sanity'

export default defineType({
	name: 'companyDetails',
	title: 'Dane firmy',
	type: 'document',
	icon: IconBuilding,
	fields: [
		{
			name: 'name',
			title: 'Nazwa firmy',
			type: 'string',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'address',
			title: 'Adres',
			type: 'string',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'phone',
			title: 'Telefon',
			type: 'string',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'email',
			title: 'Email',
			type: 'string',
			validation: (Rule) => Rule.required()
		}
	],
	preview: {
		select: {
			title: 'name'
		}
	}
})
