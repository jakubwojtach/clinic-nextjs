import { getContainerClass } from '@/utils/utils'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { BlogList } from '@/components/BlogList'
import { getBlogPost, getBlogPostIds } from '@/lib/sanity-queries'

// This function tells Next.js which paths to pre-render at build time
export async function generateStaticParams() {
	const posts = await getBlogPostIds()
	return posts.map((id: string) => ({
		id: id
	}))
}

const components: PortableTextComponents = {
	block: {
		h1: ({ children }) => <h1 className='text-4xl font-bold text-dark-gray mb-6'>{children}</h1>,
		h2: ({ children }) => <h2 className='text-3xl font-bold text-dark-gray mb-4'>{children}</h2>,
		h3: ({ children }) => <h3 className='text-2xl font-bold text-dark-gray mb-3'>{children}</h3>,
		h4: ({ children }) => <h4 className='text-xl font-bold text-dark-gray mb-2'>{children}</h4>,
		normal: ({ children }) => <p className='text-base text-dark-gray mb-4 leading-relaxed'>{children}</p>,
		blockquote: ({ children }) => (
			<blockquote className='border-l-4 border-pink pl-4 italic my-6'>{children}</blockquote>
		)
	},
	list: {
		bullet: ({ children }) => <ul className='list-disc list-inside mb-4 space-y-2'>{children}</ul>,
		number: ({ children }) => <ol className='list-decimal list-inside mb-4 space-y-2'>{children}</ol>
	},
	marks: {
		link: ({ children, value }) => {
			const target = value?.href?.startsWith('http') ? '_blank' : undefined
			return (
				<Link
					href={value?.href || '#'}
					target={target}
					rel={target === '_blank' ? 'noopener noreferrer' : undefined}
					className='text-pink hover:text-dark-gray underline transition-colors'
				>
					{children}
				</Link>
			)
		},
		strong: ({ children }) => <strong className='font-bold'>{children}</strong>,
		em: ({ children }) => <em className='italic'>{children}</em>
	}
}

export default async function BlogPostPage(props: { params: Promise<{ id: string }> }) {
	const params = await props.params
	const blogPost = await getBlogPost(params.id)

	if (!blogPost) {
		return <div>Blog post not found</div>
	}

	return (
		<>
			<div className='bg-white'>
				<div className={getContainerClass('withPadding')}>
					<div className='flex flex-col gap-2'>
						<div className='flex justify-between text-sm '>
							<p className='text-dark-gray'>
								{new Date(blogPost.publishedAt).toLocaleDateString('pl-PL', {
									day: '2-digit',
									month: '2-digit',
									year: 'numeric'
								})}
							</p>
							<p className='text-gray-500 text-sm'>
								{'Autor: '}
								<strong>{blogPost.author}</strong>
							</p>
						</div>
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
							<PortableText value={blogPost.content} components={components} />
						</div>
					</div>
				</div>
			</div>
			<BlogList />
		</>
	)
}
