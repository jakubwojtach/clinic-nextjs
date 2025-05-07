import { SanityDocument } from 'next-sanity'

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
