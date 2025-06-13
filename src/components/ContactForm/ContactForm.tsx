import { ContactFormClient } from './ContactFormClient'
import { getCompanyDetails, getContactForm } from '@/lib/sanity-queries'

export const ContactForm = async () => {
	const companyDetails = await getCompanyDetails()
	const contactForm = await getContactForm()

	return <ContactFormClient mailTo={companyDetails.email} form={contactForm.form} />
}
