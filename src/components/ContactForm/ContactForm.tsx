import { ContactFormClient } from './ContactFormClient'
import { getCompanyDetails } from '@/lib/sanity-queries'

export const ContactForm = async () => {
	const companyDetails = await getCompanyDetails()
	return <ContactFormClient mailTo={companyDetails.email} />
}
