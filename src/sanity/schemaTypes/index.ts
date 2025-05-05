import { type SchemaTypeDefinition } from 'sanity'
import { blogPost } from './blogPost'
import { testimonials } from './testimonials'
import { doctor } from './doctor'
import { faq } from './faq'
import { socialMedia } from './socialMedia'
import { image } from './image'
import { accordionHomepage } from './accordionHomepage'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blogPost, testimonials, doctor, faq, socialMedia, image, accordionHomepage]
}
