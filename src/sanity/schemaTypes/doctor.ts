import { defineField, defineType } from 'sanity'

export const doctor = defineType({
	name: 'doctor',
	title: 'Lekarze',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Imię i nazwisko',
			type: 'string'
		}),
		defineField({
			name: 'image',
			title: 'Zdjęcie',
			type: 'image'
		}),
		defineField({
			name: 'description',
			title: 'Opis',
			type: 'text'
		}),
		defineField({
			name: 'specialization',
			title: 'Specjalizacja',
			type: 'string'
		}),
		defineField({
			name: 'experience',
			title: 'Doświadczenie',
			type: 'number'
		}),
		defineField({
			name: 'education',
			title: 'Wykształcenie',
			type: 'string'
		}),
		defineField({
			name: 'awards',
			title: 'Odznaczenia',
			type: 'array',
			of: [{ type: 'string' }]
		}),
		defineField({
			name: 'publications',
			title: 'Publikacje',
			type: 'array',
			of: [{ type: 'string' }]
		})
	]
})
