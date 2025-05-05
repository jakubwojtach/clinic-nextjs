import { defineField, defineType } from 'sanity'

export const faq = defineType({
	name: 'faq',
	title: 'FAQ',
	type: 'document',
	fields: [
		defineField({
			name: 'question',
			title: 'Pytanie',
			type: 'string'
		}),
		defineField({
			name: 'answer',
			title: 'Odpowiedź',
			type: 'text'
		})
	]
})
