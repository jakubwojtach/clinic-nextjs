import { Doctor, Footer } from '@/types/sanity'
import { client } from '@/sanity/lib/client'
import { ContactFormClient } from './ContactFormClient'

export const ContactForm = async () => {
	const doctors = await client.fetch<Doctor[]>(`*[_type == "doctor"]`)
	const footer = await client.fetch<Footer>(`*[_type == "footer"][0]`)

	return <ContactFormClient doctors={doctors} mailTo={footer.email} />
}
