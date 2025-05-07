import { getContainerClass } from '@/components/common/utils'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { BlogPost } from '@/types/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { BlogList } from '@/components/BlogList'

// This function tells Next.js which paths to pre-render at build time
export async function generateStaticParams() {
	const posts = await client.fetch(`*[_type == "blogPost"]._id`)
	return posts.map((id: string) => ({
		id: id
	}))
}

export default async function BlogPostPage(props: { params: Promise<{ id: string }> }) {
	const params = await props.params
	const blogPost = await client.fetch<BlogPost>(
		`*[_type == "blogPost" && _id == $id][0]{
		...,
		tags[]->{
			_id,
			name
		}
	}`,
		{ id: params.id }
	)

	if (!blogPost) {
		return <div>Blog post not found</div>
	}

	return (
		<>
			<div className='bg-white'>
				<div className={getContainerClass('withPadding')}>
					<div className='flex flex-col gap-2'>
						<p className='text-dark-gray'>
							{new Date(blogPost.publishedAt).toLocaleDateString('pl-PL', {
								day: '2-digit',
								month: '2-digit',
								year: 'numeric'
							})}
						</p>
						<h3 className='text-title font-bold text-dark-gray'>{blogPost.title}</h3>
						<div className='flex flex-wrap gap-3'>
							{blogPost.tags.map((tag) => (
								<Link
									key={tag._id}
									href={`/blog?tag=${tag.name}`}
									className='text-dark-gray bg-pink px-3 py-1 rounded-full text-xs sm:text-sm font-semibold'
								>
									{tag.name}
								</Link>
							))}
						</div>
					</div>
					<div className='flex flex-col gap-4 mt-8'>
						<Image
							src={urlFor(blogPost.mainImage).url()}
							alt={blogPost.title}
							width={1000}
							height={100}
							className='w-full max-h-[250px] sm:max-h-[400px] rounded-lg object-cover'
						/>
						<div className='prose prose-lg w-full'>
							<PortableText value={blogPost.content} />
						</div>
					</div>
				</div>
			</div>
			<BlogList />
		</>
	)
}
