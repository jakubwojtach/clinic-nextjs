import { client } from '@/sanity/lib/client'
import { Doctor } from '@/types/sanity'
import { Title } from './common/Title'
import Image from 'next/legacy/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { Button } from './common/Button'
import { getContainerClass } from './common/utils'

export const Doctors = async ({ limit = 4, withButton = true }: { limit?: number; withButton?: boolean }) => {
	const doctors = await client.fetch<Doctor[]>(`*[_type == "doctor"][0...${limit}]`)

	return (
		<div className={getContainerClass('centered')}>
			<Title
				className='text-light-pink'
				sectionName='Nasi lekarze'
				title='Poznaj naszych specjalistów'
				longText='Nasza kadra to doświadczeni specjaliści, którzy są zdeterminowani, życzliwi i wnikliwi. Nasi lekarze są wysoko wykwalifikowani i posiadają wieloletnie doświadczenie w swoich dziedzinach.'
			/>
			<div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 w-full mx-auto'>
				{doctors.map((doctor) => (
					<Link
						href={`/doctors/${doctor._id}`}
						className='flex flex-col gap-8 group transition-all duration-300'
						key={doctor._id}
					>
						<div className='relative max-w-full sm:max-w-[250px] h-[250px] sm:h-[350px] rounded-lg rounded-tl-3xl overflow-hidden group-hover:scale-105 transition-all duration-300 group-hover:shadow-2xl border-[1px] border-light-pink/10'>
							<Image src={urlFor(doctor.image).url()} alt={doctor.name} layout='fill' className='object-cover' />
						</div>
						<div className='flex flex-col gap-2'>
							<h3 className='text-lg font-bold text-light-pink'>{doctor.name}</h3>
							<p className='text-sm text-black'>{doctor.specialization}</p>
						</div>
						<p className='text-sm text-light-pink font-bold underline group-hover:text-pink transition-all duration-300'>
							Czytaj o lekarzu
						</p>
					</Link>
				))}
			</div>
			{withButton && (
				<Link href='/doctors' className='w-full sm:w-fit px-8'>
					<Button variant='lightPink'>Poznaj naszą kadrę</Button>
				</Link>
			)}
		</div>
	)
}
