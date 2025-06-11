import { type SchemaTypeDefinition } from 'sanity'
import { blogPost } from './blogPost'
import { testimonials } from './testimonials'
import { doctor } from './doctor'
import { faq } from './faq'
import { socialMedia } from './socialMedia'
import { image } from './image'
import { accordionHomepage } from './accordionHomepage'
import { tags } from './tags'
import { aboutTabs } from './aboutTabs'
import { homepageHeader } from './homepage/header'
import { separatorWithButton } from './separatorWithButton'
import { sectionTitles } from './sectionTitles'
import { footer } from './footer'
import { achievements } from './homepage/achievements'
import { aboutHeader } from './about/header'
import { contactHeader } from './contact/contactHeader'
import companyDetails from './companyDetails'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		blogPost,
		testimonials,
		doctor,
		faq,
		socialMedia,
		image,
		accordionHomepage,
		tags,
		aboutTabs,
		homepageHeader,
		separatorWithButton,
		sectionTitles,
		achievements,
		footer,
		aboutHeader,
		contactHeader,
		companyDetails
	]
}
