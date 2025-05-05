import { Header } from '@/components/Header'
import { client } from '@/sanity/lib/client'

export default async function AboutPage() {
	const images = await client.fetch(`*[_type == "images"][name == "about-top"]`)

	return (
		<>
			<div className='bg-light-pink w-full '>
				<Header
					title='O nas'
					description='Commodo in mollit veniam eiusmod sunt qui exercitation minim Lorem nostrud ut magna excepteur anim cillum consectetur amet et reprehenderit ad esse nostrud occaecat non proident aliqua adipisicing tempor excepteur Lorem ipsum voluptate dolor labore minim laborum velit sunt aute dolor officia dolor velit proident laboris esse minim commodo qui'
					imageUrl={images[0].image}
					imageAlt={images[0].name}
					textColor='text-dark-gray'
				/>
			</div>
		</>
	)
}
