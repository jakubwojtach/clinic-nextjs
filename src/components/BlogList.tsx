import { BlogPost } from '@/types/sanity'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { Title } from './common/Title'
import { Button } from './common/Button'
import Link from 'next/link'
import { getContainerClass } from '../utils/utils'
import { Filters } from './Filters'
import { Pagination } from './common/Pagination'
import { getBlogPosts, getTags, getSectionTitle } from '@/lib/sanity-queries'

interface BlogListProps {
	withButton?: boolean
	tag?: string
	sort?: string
	searchQuery?: string
	withTitle?: boolean
	withFilters?: boolean
	perPage?: number
	page?: number
	withPagination?: boolean
	withFeatured?: boolean
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
	const [blogData, tags, sectionTitle] = await Promise.all([
		getBlogPosts(page, perPage, tag, sort, searchQuery, !withFeatured),
		getTags(),
		getSectionTitle('nasze-artykuly')
	])

	const { posts: blogPosts, totalPages, featuredPost } = blogData

	return (
		<div className={getContainerClass('centered')}>
			{withTitle && (
				<Title
					sectionName={sectionTitle?.subtitle}
					title={sectionTitle?.title}
					className='text-light-pink'
					longText={sectionTitle?.description}
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
						<div className='grid grid-cols-1 sm:grid-cols-2 h-auto w-full'>
							<Link href={`/blog/${featuredPost._id}`} className='cursor-pointer relative w-full min-h-[300px]'>
								<Image
									src={urlFor(featuredPost.mainImage).url()}
									alt={featuredPost.title}
									layout='fill'
									className='w-full h-full object-cover rounded-md'
								/>
							</Link>
							<div className='flex flex-col text-dark-gray'>
								<Link href={`/blog/${featuredPost._id}`} className='cursor-pointer flex flex-col'>
									<div className='sm:p-8 pt-4 px-4 flex gap-2 flex-col'>
										<div className='flex justify-between text-sm '>
											<p className='text-gray-500 text-sm'>
												{new Date(featuredPost.publishedAt).toLocaleDateString('pl-PL', {
													day: '2-digit',
													month: '2-digit',
													year: 'numeric'
												})}
											</p>
											<p className='text-gray-500 text-sm'>
												{'Autor: '}
												<strong>{featuredPost.author}</strong>
											</p>
										</div>
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
								<div className='flex justify-between text-sm '>
									<p className='text-gray-500 text-sm'>
										{new Date(post.publishedAt).toLocaleDateString('pl-PL', {
											day: '2-digit',
											month: '2-digit',
											year: 'numeric'
										})}
									</p>
									<p className='text-gray-500 text-sm'>
										{'Autor: '}
										<strong>{post.author}</strong>
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
				<Link href='/blog' className='w-full sm:w-fit sm:px-8'>
					<Button variant='lightPink' className='w-full sm:w-fit'>
						Czytaj więcej postów
					</Button>
				</Link>
			)}
		</div>
	)
}
