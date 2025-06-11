import { unstable_cache } from 'next/cache'
import { client } from '@/sanity/lib/client'
import { REVALIDATE_TIME } from './sanity.config'
import type {
	CompanyDetails,
	SectionTitles,
	Doctor,
	Testimonial,
	AboutTab,
	HomepageHeader,
	Footer,
	FAQ,
	GenericHeader,
	SeparatorWithButton,
	BlogPost
} from '@/types/sanity'

// Common section titles fetch
export const getSectionTitle = unstable_cache(
	async (slug: string) => {
		return await client.fetch<SectionTitles>(`*[_type == "sectionTitles" && slug.current == $slug][0]`, { slug })
	},
	['section-title'],
	{ revalidate: REVALIDATE_TIME }
)

// Company details fetch
export const getCompanyDetails = unstable_cache(
	async () => {
		return await client.fetch<CompanyDetails>(`*[_type == "companyDetails"] | order(_updatedAt desc)[0]`)
	},
	['company-details'],
	{ revalidate: REVALIDATE_TIME }
)

// Doctors fetch
export const getDoctors = unstable_cache(
	async (limit?: number) => {
		return await client.fetch<Doctor[]>(`*[_type == "doctor"]${limit ? `[0...${limit}]` : ''}`)
	},
	['doctors'],
	{ revalidate: REVALIDATE_TIME }
)

// Single doctor fetch
export const getDoctor = unstable_cache(
	async (id: string) => {
		return await client.fetch<Doctor>(`*[_type == "doctor" && _id == $id][0]`, { id })
	},
	['doctor'],
	{ revalidate: REVALIDATE_TIME }
)

// Testimonials fetch
export const getTestimonials = unstable_cache(
	async (limit?: number) => {
		return await client.fetch<Testimonial[]>(`*[_type == "testimonials"]${limit ? `[0...${limit}]` : ''}`)
	},
	['testimonials'],
	{ revalidate: REVALIDATE_TIME }
)

// About tabs fetch
export const getAboutTabs = unstable_cache(
	async () => {
		return await client.fetch<AboutTab[]>(`*[_type == "aboutTabs"] | order(title asc)`)
	},
	['about-tabs'],
	{ revalidate: REVALIDATE_TIME }
)

// Homepage header fetch
export const getHomepageHeader = unstable_cache(
	async () => {
		return await client.fetch<HomepageHeader>(`*[_type == "homepageHeader"] | order(_updatedAt desc)[0]`)
	},
	['homepage-header'],
	{ revalidate: REVALIDATE_TIME }
)

// Footer fetch
export const getFooter = unstable_cache(
	async () => {
		return await client.fetch<Footer>(`*[_type == "footer"] | order(_updatedAt desc)[0] {
      ...,
      socialMedia[]->{_id, name, url, type}
    }`)
	},
	['footer'],
	{ revalidate: REVALIDATE_TIME }
)

// FAQ fetch
export const getFAQ = unstable_cache(
	async () => {
		return await client.fetch<FAQ[]>(`*[_type == "faq"]`)
	},
	['faq'],
	{ revalidate: REVALIDATE_TIME }
)

// Generic header fetch
export const getGenericHeader = unstable_cache(
	async (type: string) => {
		return await client.fetch<GenericHeader>(`*[_type == "${type}"] | order(_updatedAt desc)[0]`)
	},
	['generic-header'],
	{ revalidate: REVALIDATE_TIME }
)

// Separator with button fetch
export const getSeparatorWithButton = unstable_cache(
	async () => {
		return await client.fetch<SeparatorWithButton>(`*[_type == "separatorWithButton"] | order(_updatedAt desc)[0]`)
	},
	['separator-with-button'],
	{ revalidate: REVALIDATE_TIME }
)

// Blog post fetch
export const getBlogPost = unstable_cache(
	async (id: string) => {
		return await client.fetch<BlogPost>(`*[_type == "blogPost" && _id == $id][0]`, { id })
	},
	['blog-post'],
	{ revalidate: REVALIDATE_TIME }
)

// Blog post IDs fetch
export const getBlogPostIds = unstable_cache(
	async () => {
		return await client.fetch(`*[_type == "blogPost"]._id`)
	},
	['blog-post-ids'],
	{ revalidate: REVALIDATE_TIME }
)
