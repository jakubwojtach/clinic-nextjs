import { Doctors } from '@/components/Doctors'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Doctor } from '@/types/sanity'

export default async function DoctorPage(props: { params: Promise<{ id: string }> }) {
	const params = await props.params
	const doctor = await client.fetch<Doctor>(`*[_type == "doctor" && _id == $id][0]`, { id: params.id })
	return (
		<>
			<div className='bg-white'>
				<div className='container grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16 px-6 xl:px-0 py-8 sm:py-16'>
					<div className='flex flex-col gap-4 order-2 md:order-1'>
						<h2 className='text-title font-bold text-dark-gray'>{doctor.name}</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
							<span className='text-sm lg:text-base flex flex-col gap-1 '>
								<strong className='text-gray-500'>Specjalizacja:</strong> {doctor.specialization}
							</span>
							<span className='text-sm lg:text-base flex flex-col gap-1 '>
								<strong className='text-gray-500'>Doświadczenie:</strong> {doctor.experience}{' '}
								{Number(doctor.experience) > 1 ? 'lata' : 'rok'}
							</span>
							<span className='text-sm lg:text-base flex flex-col gap-1 '>
								<strong className='text-gray-500'>Edukacja:</strong> {doctor.education}
							</span>
							<span className='text-sm lg:text-base flex flex-col gap-1 '>
								<strong className='text-gray-500'>Ostatnia publikacja:</strong> {doctor.publications[0]}
							</span>
						</div>
						<p className='text-base lg:text-lg mt-4'>
							<strong>Kilka słów o lekarzu:</strong> <br />
							{doctor.description}
						</p>
					</div>
					<div className='relative h-[200px] md:h-[350px] lg:h-[500px] rounded-lg overflow-hidden rounded-tl-4xl order-1 md:order-2'>
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
