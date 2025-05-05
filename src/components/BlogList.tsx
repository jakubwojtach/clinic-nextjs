import { client } from '@/sanity/lib/client'
import { BlogPost } from '@/types/sanity'
import Image from 'next/legacy/image'
import { urlFor } from '@/sanity/lib/image'
import { Title } from './common/Title'
import { Button } from './common/Button'
import Link from 'next/link'
import { getContainerClass } from './common/utils'

export const BlogList = async ({ withButton = true, limit = 3 }: { withButton?: boolean; limit?: number }) => {
	const blogPosts = await client.fetch<BlogPost[]>(`*[_type == "blogPost"][0...${limit}]`)

	return (
		<div className={getContainerClass('centered')}>
			<Title
				sectionName='Baza wiedzy'
				title='Najnowsze artykuły'
				className='text-light-pink'
				longText='Przeczytaj nasze najnowsze artykuły, aby poznać nasze zdrowotne porady i informacje.'
			/>
			<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 w-full'>
				{blogPosts.map((post: BlogPost) => (
					<Link
						key={post._id}
						href={`/blog/${post._id}`}
						className='flex flex-col bg-white rounded-lg rounded-tl-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105'
					>
						<div className='relative h-[200px] sm:h-[250px]'>
							<Image
								src={urlFor(post.mainImage).url()}
								alt={post.title}
								layout='fill'
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='p-6 flex gap-2 flex-col'>
							<div className='grid grid-cols-2 gap-2 text-sm '>
								<p className='text-gray-500'>{new Date(post.publishedAt).toLocaleDateString()}</p>
							</div>
							<h3 className='text-lg font-bold'>{post.title}</h3>
							<p className='pb-4'>{post.content[0].children[0].text.slice(0, 50)}...</p>
							<p className='text-blue-500 underline mt-auto'>Czytaj więcej</p>
						</div>
					</Link>
				))}
			</div>
			{withButton && (
				<Link href='/blog' className='w-full sm:w-fit px-8'>
					<Button variant='lightPink'>Czytaj więcej postów</Button>
				</Link>
			)}
		</div>
	)
}
