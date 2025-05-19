import { client } from '@/sanity/lib/client'
import { Doctor, SectionTitles } from '@/types/sanity'
import { Title } from './common/Title'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { Button } from './common/Button'
import { getContainerClass } from '../utils/utils'

export const Doctors = async ({ limit = 4, withButton = true }: { limit?: number; withButton?: boolean }) => {
	const doctors = await client.fetch<Doctor[]>(`*[_type == "doctor"][0...${limit}]`)
	const sectionTitle = await client.fetch<SectionTitles>(
		`*[_type == "sectionTitles" && slug.current == "poznaj-naszych-specjalistow"][0]`
	)
	return (
		<div className={getContainerClass('centered')}>
			<Title
				className='text-light-pink'
				sectionName={sectionTitle?.subtitle}
				title={sectionTitle?.title}
				longText={sectionTitle?.description}
			/>
			<div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 w-full mx-auto'>
				{doctors.map((doctor) => (
					<Link
						href={`/doctors/${doctor._id}`}
						className='flex flex-col gap-4 lg:gap-8 group transition-all duration-300'
						key={doctor._id}
					>
						<div className='relative max-w-full lg:max-w-[250px] md:h-[250px] h-[200px] lg:h-[350px] rounded-lg lg:rounded-tl-3xl overflow-hidden group-hover:scale-105 transition-all duration-300 group-hover:shadow-2xl border-[1px] border-light-pink/10'>
							<Image
								src={urlFor(doctor.image).url()}
								alt={doctor.name}
								layout='fill'
								className='object-cover object-top'
							/>
						</div>
						<div className='flex flex-col gap-2 items-center lg:items-start'>
							<h3 className='text-lg font-bold text-light-pink'>{doctor.name}</h3>
							<p className='text-sm text-black'>{doctor.specialization}</p>
						</div>
						<p className='text-sm text-light-pink font-bold underline group-hover:text-pink transition-all duration-300 self-center lg:self-start'>
							Czytaj o lekarzu
						</p>
					</Link>
				))}
			</div>
			{withButton && (
				<Link href='/doctors' className='w-full sm:w-fit sm:px-8'>
					<Button variant='lightPink' className='w-full sm:w-fit'>
						Poznaj naszą kadrę
					</Button>
				</Link>
			)}
		</div>
	)
}
