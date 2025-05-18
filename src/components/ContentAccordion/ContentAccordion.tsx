import { AccordionHomepage } from '@/types/sanity'
import { ContentAccordionClient } from './ContentAccordionClient'
import { client } from '@/sanity/lib/client'

interface ContentAccordionProps {
	limit?: number
}

export const ContentAccordion = async ({ limit }: ContentAccordionProps) => {
	const accordions = await client.fetch<AccordionHomepage[]>(
		`*[_type == "accordionHomepage"]${limit ? `[0...${limit}]` : ''}`
	)
	const sectionTitle = await client.fetch(`*[_type == "sectionTitles" && slug.current == "czym-sie-kierujemy"][0]`)
	return <ContentAccordionClient accordions={accordions} sectionTitle={sectionTitle} />
}
