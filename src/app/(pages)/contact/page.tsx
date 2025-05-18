import { Accordion } from '@/components/common/Accordion'
import { getContainerClass } from '@/utils/utils'
import { ContactForm } from '@/components/ContactForm/ContactForm'
import { Header } from '@/components/Header'
import { client } from '@/sanity/lib/client'
import { FAQ, Footer, GenericHeader } from '@/types/sanity'
import classNames from 'classnames'
import { urlFor } from '@/sanity/lib/image'

export default async function ContactPage() {
	const faq = await client.fetch<FAQ[]>(`*[_type == "faq"]`)
	const contactHeader = await client.fetch<GenericHeader>(`*[_type == "contactHeader"][0]`)
	const footer = await client.fetch<Footer>(`*[_type == "footer"][0]`)

	const preparedFAQItems = faq.map((item) => ({
		title: item.question,
		content: item.answer,
		id: item._id
	}))

	return (
		<>
			<div className='bg-light-pink w-full'>
				<Header
					title={contactHeader.title}
					description={contactHeader.description}
					textColor='text-dark-gray'
					imageUrl={urlFor(contactHeader.image).url()}
					imageAlt={contactHeader.imageAlt}
				/>
			</div>
			<div className={classNames(getContainerClass('withPadding'), 'text-light-pink gap-10 flex flex-col w-full')}>
				<div className='flex flex-col gap-2'>
					<h3 className='text-title font-bold'>Wskazówki dojazdu</h3>
					<p className='font-semibold'>Ginekologia by Dr. Grochecka</p>
				</div>
				<div className='flex flex-col gap-1'>
					<p>
						<strong>Adres:</strong> {footer.address}
					</p>
					<p>
						<strong>Telefon:</strong> <a href={`tel:${footer.phone}`}>{footer.phone}</a>
					</p>
					<p>
						<strong>Email:</strong> <a href={`mailto:${footer.email}`}>{footer.email}</a>
					</p>
				</div>
				<div className='w-full flex items-center justify-center h-[200px] sm:h-[400px] bg-dark-gray/10 rounded-2xl group cursor-pointer shadow-2xl'>
					<p className='opacity-50 group-hover:opacity-100 transition-all duration-300'>Mapa będzie tutaj</p>
				</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 w-full'>
				<div className='flex flex-col gap-4 bg-dark-gray text-white py-8 sm:py-16 '>
					<div className='sm:w-[540px]  sm:ml-auto sm:mr-[60px] mx-6 flex flex-col gap-8'>
						<div className='gap-2'>
							<h3 className='text-title font-bold'>Napisz do nas</h3>
							<p>Skorzystaj z formularza poniżej, aby skontaktować się z nami.</p>
						</div>
						<ContactForm />
					</div>
				</div>
				<div className='flex flex-col gap-4 bg-pink text-dark-gray py-8 sm:py-16'>
					<div className='sm:w-[540px] sm:mr-auto sm:ml-[60px] mx-6 gap-8 flex flex-col'>
						<div className='flex flex-col gap-2'>
							<h3 className='text-title font-bold'>FAQ</h3>
							<p>Odpowiedzi na najczęstsze pytania</p>
						</div>
						<Accordion items={preparedFAQItems} />
					</div>
				</div>
			</div>
		</>
	)
}
