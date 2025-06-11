import { ContentAccordionClient } from './ContentAccordionClient'
import { getAccordionHomepage, getSectionTitle } from '@/lib/sanity-queries'

interface ContentAccordionProps {
	limit?: number
}

export const ContentAccordion = async ({ limit }: ContentAccordionProps) => {
	const [accordions, sectionTitle] = await Promise.all([
		getAccordionHomepage(limit),
		getSectionTitle('czym-sie-kierujemy')
	])
	return <ContentAccordionClient accordions={accordions} sectionTitle={sectionTitle} />
}
