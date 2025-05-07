import { Doctors } from '@/components/Doctors'
import Image from 'next/legacy/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

export default async function DoctorPage({ params }: { params: { id: string } }) {
	const doctor = await client.fetch(`*[_type == "doctor" && _id == $id][0]`, { id: params.id })
	return (
		<>
			<div className='bg-white'>
				<div className='container grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16 px-6 xl:px-0 py-8 sm:py-16'>
					<div className='flex flex-col gap-4'>
						<h2 className='text-title font-bold'>{doctor.name}</h2>
						<strong>{doctor.specialization}</strong>
						<p>{doctor.description}</p>
					</div>
					<div className='relative h-[500px] rounded-lg overflow-hidden rounded-tl-4xl'>
						<Image
							src={urlFor(doctor.image).url()}
							alt={doctor.name}
							layout='fill'
							className='object-cover object-top'
						/>
					</div>
				</div>
			</div>
			<Doctors limit={4} />
		</>
	)
}
