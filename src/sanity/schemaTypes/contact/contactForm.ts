import { IconPhone } from '@tabler/icons-react'
import { defineField, defineType } from 'sanity'

export const contactForm = defineType({
	name: 'contactForm',
	title: 'Formularz kontaktowy',
	type: 'document',
	icon: IconPhone,
	fields: [
		defineField({
			name: 'form',
			description: 'Formularz kontaktowy',
			type: 'object',
			fields: [
				defineField({
					name: 'name',
					description: 'Imię i nazwisko - labelka',
					type: 'string',
					initialValue: 'Imię i nazwisko'
				}),
				defineField({
					name: 'email',
					description: 'Email - labelka',
					type: 'string',
					initialValue: 'Email'
				}),
				defineField({
					name: 'message',
					description: 'Wiadomość - labelka',
					type: 'string',
					initialValue: 'Twoja wiadomość'
				}),
				defineField({
					name: 'prefferedDoctor',
					description: 'Preferowany lekarz - labelka',
					type: 'string',
					initialValue: 'Preferowany lekarz'
				}),
				defineField({
					name: 'submitButtonText',
					description: 'Tekst przycisku submit',
					type: 'string',
					initialValue: 'Wyślij'
				})
			]
		})
	]
})
