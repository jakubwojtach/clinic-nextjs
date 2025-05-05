import { Accordion } from '@/components/common/Accordion'
import { getContainerClass } from '@/components/common/utils'
import { ContactForm } from '@/components/ContactForm'
import { Header } from '@/components/Header'
import { client } from '@/sanity/lib/client'
import { FAQ } from '@/types/sanity'
import classNames from 'classnames'

export default async function ContactPage() {
	const images = await client.fetch(`*[_type == "images"][name == "contact-top"]`)
	const faq = await client.fetch<FAQ[]>(`*[_type == "faq"]`)

	const preparedFAQItems = faq.map((item) => ({
		title: item.question,
		content: item.answer,
		id: item._id
	}))

	return (
		<>
			<div className='bg-light-pink w-full'>
				<Header
					title='Kontakt'
					description='laborum voluptate in irure nulla incididunt quis minim aute ipsum deserunt et mollit quis elit pariatur laborum ea officia et qui esse quis mollit labore non proident id et do culpa aliqua ut dolore dolore ullamco nulla nisi eu in cillum Lorem ipsum incididunt ut ipsum eiusmod incididunt aliquip id'
					textColor='text-dark-gray'
					imageUrl={images[0].image}
					imageAlt={images[0].name}
				/>
			</div>
			<div className={classNames(getContainerClass('withPadding'), 'text-light-pink gap-10 flex flex-col w-full')}>
				<div className='flex flex-col gap-2'>
					<h3 className='text-title font-bold'>Wskazówki dojazdu</h3>
					<p className='font-semibold'>Ginekologia by Dr. Grochecka</p>
				</div>
				<div className='flex flex-col gap-1'>
					<p>ul. Jana Pawła II 12/34</p>
					<p>00-000 Warszawa</p>
					<p>
						Telefon:{' '}
						<a className='underline hover:text-pink transition-all duration-300' href='tel:+48123456789'>
							+48 123 456 789
						</a>
					</p>
					<p>
						Email:{' '}
						<a className='underline hover:text-pink transition-all duration-300' href='mailto:kontakt@ginekologia.pl'>
							kontakt@ginekologia.pl
						</a>
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
