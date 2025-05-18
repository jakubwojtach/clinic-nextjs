import { AboutTab } from '@/types/sanity'
import { AboutTabsClient } from './AboutTabsClient'
import { client } from '@/sanity/lib/client'

export const AboutTabs = async () => {
	const aboutTabs = await client.fetch<AboutTab[]>(`*[_type == "aboutTabs"] | order(title asc)`)
	return <AboutTabsClient aboutTabs={aboutTabs} />
}
