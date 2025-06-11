import { CompanyDetails } from '@/types/sanity'
import { client } from '@/sanity/lib/client'
import { ContactFormClient } from './ContactFormClient'

export const ContactForm = async () => {
	//const doctors = await client.fetch<Doctor[]>(`*[_type == "doctor"]`)
	const companyDetails = await client.fetch<CompanyDetails>(`*[_type == "companyDetails"][0]`)

	return <ContactFormClient mailTo={companyDetails.email} />
}
