import { client } from '@/sanity/lib/client'
import { BlogPost } from '@/types/sanity'
import Image from 'next/legacy/image'
import { urlFor } from '@/sanity/lib/image'
import { Title } from './common/Title'
import { Button } from './common/Button'
import Link from 'next/link'
import { getContainerClass } from './common/utils'

import { Filters } from './Filters'
import { Pagination } from './common/Pagination'
import classNames from 'classnames'

// Server component for data fetching
export async function getBlogPosts(page: number, perPage: number, tag?: string, sort?: string, searchQuery?: string) {
	// Debug query to check if we have any blog posts
	const allPosts = await client.fetch<BlogPost[]>(`*[_type == "blogPost"]`)
	console.log('All blog posts:', allPosts)

	const baseQuery = `*[_type == "blogPost" ${tag ? `&& "${tag}" in tags[]->name` : ''} ${
		searchQuery ? `&& (title match "${searchQuery}*" || content[0].children[0].text match "${searchQuery}*")` : ''
	}`

	// Get featured posts first
	const featuredQuery = `${baseQuery} && isFeatured == true]`

	// Get regular posts (excluding featured ones)
	const regularQuery = `${baseQuery} && (isFeatured != true || !defined(isFeatured))]`

	console.log('Featured Query:', featuredQuery)
	console.log('Regular Query:', regularQuery)

	const [featuredPost, regularPosts, total] = await Promise.all([
		client.fetch<BlogPost | null>(
			`${featuredQuery} | order(${sort || 'publishedAt desc'}) [0] {
				...,
				tags[]->{
					_id,
					name
				}
			}`
		),
		client.fetch<BlogPost[]>(
			`${regularQuery} | order(${sort || 'publishedAt desc'}) [${(page - 1) * perPage}...${page * perPage}] {
				...,
				tags[]->{
					_id,
					name
				}
			}`
		),
		client.fetch<number>(`count(${regularQuery})`)
	])

	console.log('Featured Post:', featuredPost)
	console.log('Regular Posts:', regularPosts)
	console.log('Total:', total)

	return {
		featuredPost,
		posts: regularPosts,
		total,
		totalPages: Math.ceil(total / perPage)
	}
}

export async function getTags() {
	return await client.fetch<BlogPost['tags']>(`*[_type == "tags"] {
		_id,
		name
	}`)
}

interface BlogListProps {
	withButton?: boolean
	tag?: string
	sort?: string
	withTitle?: boolean
	withFilters?: boolean
	perPage?: number
	page?: number
	withPagination?: boolean
	withFeatured?: boolean
	searchQuery?: string
}

// Client component for rendering
export const BlogList = async ({
	withButton = true,
	tag,
	sort,
	searchQuery,
	withTitle = true,
	withFilters = false,
	perPage = 10,
	page = 1,
	withPagination = false,
	withFeatured = false
}: BlogListProps) => {
	const { posts: blogPosts, totalPages, featuredPost } = await getBlogPosts(page, perPage, tag, sort, searchQuery)
	const tags = await getTags()

	return (
		<div className={classNames(getContainerClass('centered'), '!px-0')}>
			{withTitle && (
				<Title
					sectionName='Baza wiedzy'
					title={tag ? `Artykuły z tagiem: ${tag}.` : 'Najnowsze artykuły'}
					className='text-light-pink'
					longText={
						tag ?
							`Artykuły z tagiem: ${tag}.`
						:	'Przeczytaj nasze najnowsze artykuły, aby poznać nasze zdrowotne porady i informacje.'
					}
				/>
			)}
			{withFilters && (
				<div className='flex flex-col gap-2 self-start w-full'>
					<Filters tags={tags} />
				</div>
			)}
			{withFeatured && featuredPost && (
				<div className='w-full'>
					<div className='flex bg-pink rounded-md border-[4px] border-pink overflow-hidden hover:shadow-2xl transition-all duration-300'>
						<div className='grid grid-cols-1 sm:grid-cols-2 h-auto'>
							<Link href={`/blog/${featuredPost._id}`} className='cursor-pointer'>
								<img
									src={urlFor(featuredPost.mainImage).url()}
									alt={featuredPost.title}
									className='w-full h-full object-cover rounded-md'
								/>
							</Link>
							<div className='flex flex-col text-dark-gray'>
								<Link href={`/blog/${featuredPost._id}`} className='cursor-pointer flex flex-col'>
									<div className='sm:p-8 pt-4 px-4 flex gap-2 flex-col'>
										<p className='text-gray-500 text-sm'>
											{new Date(featuredPost.publishedAt).toLocaleDateString('pl-PL', {
												day: '2-digit',
												month: '2-digit',
												year: 'numeric'
											})}
										</p>
										<h3 className='text-lg sm:text-2xl font-bold'>{featuredPost.title}</h3>
										<p className='pb-4 sm:text-lg'>{featuredPost.content[0].children[0].text.slice(0, 200)}...</p>
									</div>
								</Link>
								<div className='sm:px-8 px-4 pb-4 flex flex-wrap gap-3 mt-auto'>
									{featuredPost.tags.map((tag) => (
										<Link
											key={tag._id}
											href={`/blog?tag=${tag.name}`}
											className='text-dark-gray bg-light-pink px-3 py-1 rounded-full text-xs sm:text-sm font-semibold'
										>
											{tag.name}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 w-full'>
				{blogPosts.map((post: BlogPost) => (
					<div
						key={post._id}
						className='flex flex-col bg-white rounded-lg rounded-tl-3xl overflow-hidden hover:shadow-2xl transition-all duration-300'
					>
						<Link href={`/blog/${post._id}`} className='cursor-pointer'>
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
									<p className='text-gray-500 text-sm'>
										{new Date(post.publishedAt).toLocaleDateString('pl-PL', {
											day: '2-digit',
											month: '2-digit',
											year: 'numeric'
										})}
									</p>
								</div>
								<h3 className='text-lg font-bold'>{post.title}</h3>
								<p className='pb-4'>{post.content[0].children[0].text.slice(0, 100)}...</p>
							</div>
						</Link>
						<div className='px-6 pb-6 flex flex-wrap gap-3'>
							{post.tags.map((tag) => (
								<Link
									key={tag._id}
									href={`/blog?tag=${tag.name}`}
									className='text-dark-gray bg-pink px-3 py-1 rounded-full text-xs font-semibold'
								>
									{tag.name}
								</Link>
							))}
						</div>
					</div>
				))}
			</div>
			{totalPages > 1 && withPagination && <Pagination className='mx-auto' totalPages={totalPages} />}
			{withButton && (
				<Link href='/blog' className='w-full sm:w-fit px-8'>
					<Button variant='lightPink'>Czytaj więcej postów</Button>
				</Link>
			)}
		</div>
	)
}
