'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from 'sanity'
import { structureTool, StructureBuilder } from 'sanity/structure'
import { CogIcon, DocumentIcon, ImagesIcon } from '@sanity/icons'
import { dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { plPLLocale } from '@sanity/locale-pl-pl'
import { IconPhone } from '@tabler/icons-react'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

// Helper function to create a singleton document
const createSingleton = (S: StructureBuilder, title: string, schemaType: string, documentId: string) =>
	S.listItem().title(title).child(S.document().schemaType(schemaType).documentId(documentId))

// Helper function to create a document list
const createDocumentList = (S: StructureBuilder, title: string, type: string) =>
	S.listItem()
		.title(title)
		.child(S.documentList().title(title).filter(`_type == "${type}"`))

// Structure configuration
const structure = (S: StructureBuilder) => {
	const contactFormItem = createSingleton(S, 'Formularz kontaktowy', 'contactForm', 'contactForm')
	const contactSectionsItem = createSingleton(S, 'Sekcje kontaktu', 'contactSections', 'contactSections')

	// Contact sections section
	const contactSectionsItems = [contactSectionsItem, contactFormItem]

	// Settings section
	const settingsItems = [
		createSingleton(S, 'Dane firmy', 'companyDetails', 'companyDetails'),
		createSingleton(S, 'Stopka', 'footer', 'footer')
	]

	// Headers section
	const headerItems = [
		createSingleton(S, 'Nagłówek - Strona główna', 'homepageHeader', 'homepageHeader'),
		createSingleton(S, 'Nagłówek - O nas', 'aboutHeader', 'aboutHeader'),
		createSingleton(S, 'Nagłówek - Kontakt', 'contactHeader', 'contactHeader')
	]

	// Media and metadata section
	const mediaItems = [
		createDocumentList(S, 'Obrazki', 'images'),
		createDocumentList(S, 'Tagi', 'tags'),
		createDocumentList(S, 'Social Media', 'socialMedia')
	]

	// List of document types to exclude from regular list
	const excludedTypes = [
		'companyDetails',
		'footer',
		'aboutHeader',
		'contactHeader',
		'homepageHeader',
		'images',
		'tags',
		'socialMedia',
		'contactForm',
		'contactSections'
	]

	return S.list()
		.title('Dane Dr. Grochecka')
		.items([
			// Settings section
			S.listItem().title('Ustawienia').icon(CogIcon).child(S.list().title('Ustawienia').items(settingsItems)),
			S.listItem()
				.title('Kontakt - formularz i sekcje')
				.icon(IconPhone)
				.child(S.list().title('Kontakt - formularz i sekcje').items(contactSectionsItems)),

			// Headers section
			S.listItem().title('Nagłówki').icon(DocumentIcon).child(S.list().title('Nagłówki').items(headerItems)),

			// Media and metadata section
			S.listItem()
				.title('Media i metadane')
				.icon(ImagesIcon)
				.child(S.list().title('Media i metadane').items(mediaItems)),

			// Regular document types
			...S.documentTypeListItems().filter(
				(listItem: { getId: () => string | undefined }) => !excludedTypes.includes(listItem.getId() || '')
			)
		])
}

export default defineConfig({
	basePath: '/studio',
	projectId,
	dataset,
	// Add and edit the content schema in the './sanity/schemaTypes' folder
	schema,
	plugins: [structureTool({ structure }), plPLLocale()]
})
