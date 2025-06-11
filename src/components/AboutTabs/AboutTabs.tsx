import { AboutTabsClient } from './AboutTabsClient'
import { getAboutTabs } from '@/lib/sanity-queries'

export const AboutTabs = async () => {
	const aboutTabs = await getAboutTabs()
	return <AboutTabsClient aboutTabs={aboutTabs} />
}
