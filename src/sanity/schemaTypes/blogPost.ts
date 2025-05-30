import { IconFileText } from '@tabler/icons-react'
import { defineType, defineField } from 'sanity'

export const blogPost = defineType({
	name: 'blogPost',
	title: 'Posty - Blog',
	type: 'document',
	icon: IconFileText,
	fields: [
		defineField({
			name: 'title',
			title: 'Tytuł posta',
			type: 'string',
			description: 'Tutaj wpisz tytuł posta'
		}),
		defineField({
			name: 'content',
			title: 'Treść posta',
			description: 'Tutaj wpisz treść posta',
			type: 'array',
			of: [{ type: 'block' }]
		}),
		defineField({
			name: 'author',
			title: 'Autor',
			type: 'string',
			description: 'Tutaj wpisz autora posta'
		}),
		defineField({
			name: 'publishedAt',
			title: 'Data publikacji',
			type: 'datetime',
			initialValue: new Date().toISOString(),
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: 'isFeatured',
			title: 'Wyróżniony post',
			type: 'boolean',
			initialValue: false,
			validation: (Rule) =>
				Rule.custom(async (value, context) => {
					if (!value) return true // If not featured, always allow
					if (!context.document?._id) return 'Document ID is required'

					const { getClient } = context
					const client = getClient({ apiVersion: '2023-01-01' })

					// Find any other featured posts
					const otherFeatured = await client.fetch(`*[_type == "blogPost" && isFeatured == true && _id != $id][0]`, {
						id: context.document._id
					})

					if (otherFeatured) {
						// Automatically unfeature the other post
						await client.patch(otherFeatured._id).set({ isFeatured: false }).commit()
					}

					return true
				})
		}),
		defineField({
			name: 'mainImage',
			title: 'Główne zdjęcie',
			type: 'image'
		}),
		defineField({
			name: 'tags',
			title: 'Tagi',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'tags' }] }]
		})
	],
	orderings: [
		{
			title: 'Od najnowszego',
			name: 'publishedAtDesc',
			by: [{ field: 'publishedAt', direction: 'desc' }]
		},
		{
			title: 'Od najstarszego',
			name: 'publishedAtAsc',
			by: [{ field: 'publishedAt', direction: 'asc' }]
		},
		{
			title: 'Autor rosnąco',
			name: 'authorAsc',
			by: [{ field: 'author', direction: 'asc' }]
		},
		{
			title: 'Autor malejąco',
			name: 'authorDesc',
			by: [{ field: 'author', direction: 'desc' }]
		}
	]
})
