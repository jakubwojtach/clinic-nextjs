import { ICON_VALUES } from '@/constants/icon-list'
import { SanityDocument } from 'next-sanity'

export type AllowedPages = 'about' | 'doctors' | 'contact' | 'blog' | 'homepage'
export const ALLOWED_PAGES: AllowedPages[] = ['about', 'doctors', 'contact', 'blog', 'homepage']
export type Block = {
	_type: 'block'
	children: {
		_type: 'span'
		text: string
		_key: string
	}[]
	markDefs: {
		_type: 'link'
		href: string
	}[]
	style: string
	_key: string
}

export type Image = {
	_type: 'image'
	asset: {
		_ref: string
		_type: 'reference'
	}
}

export interface BlogPost extends SanityDocument {
	title: string
	content: Block[]
	author: string
	publishedAt: string
	mainImage: Image
	tags: {
		_id: string
		name: string
	}[]
	isFeatured?: boolean
}

export interface Testimonial extends SanityDocument {
	name: string
	rating: number
	publishedAt: string
	review: string
}

export interface Doctor extends SanityDocument {
	name: string
	specialization: string
	image: Image
	description: string
	experience: string
	education: string
	publications: string[]
	awards: string[]
}

export interface AccordionHomepage extends SanityDocument {
	title: string
	description: string
	image: Image
}

export interface FAQ extends SanityDocument {
	question: string
	answer: string
}

export interface AboutTab extends SanityDocument {
	title: string
	description: string
	image: Image
	icon: (typeof ICON_VALUES)[number]
}

export interface GenericHeader extends SanityDocument {
	title: string
	description: string
	image: Image
	imageAlt: string
}

export interface HomepageHeader extends GenericHeader {
	cta1Title: string
	cta1Link: AllowedPages
	cta2Title: string
	cta2Link: AllowedPages
}

export interface SeparatorWithButton extends SanityDocument {
	title: string
	description: string
	buttonTitle: string
	buttonLink: AllowedPages
	allowedPages: AllowedPages[]
	enable: boolean
}

export interface SectionTitles extends SanityDocument {
	subtitle: string
	title: string
	description: string
	slug: {
		_type: 'slug'
		current: string
	}
}

export interface Footer extends SanityDocument {
	leftTitle: string
	leftDescription: string
	rightTitle: string
	rightDescription: string
	address: string
	phone: string
	email: string
	socialMedia: SanityDocument[]
}

export interface CompanyDetails extends SanityDocument {
	name: string
	address: string
	phone: string
	email: string
}

export interface Achievements extends SanityDocument {
	title: string
	icon: (typeof ICON_VALUES)[number]
}

export interface ContactForm extends SanityDocument {
	form: {
		name: string
		email: string
		message: string
		prefferedDoctor: string
		submitButtonText: string
	}
}

export interface ContactSections extends SanityDocument {
	leftSectionTitle: string
	leftSectionDescription: string
	rightSectionTitle: string
	rightSectionDescription: string
}
