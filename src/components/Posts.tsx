'use client'

import { gql, useQuery } from '@apollo/client'
import { PostsQuery, WordPressPost } from '@/types/wordpress'

export const GET_POSTS = gql`
	query GetPosts {
		posts {
			nodes {
				id
				title
				content
				date
			}
		}
	}
`

export function Posts() {
	const { loading, error, data } = useQuery<PostsQuery>(GET_POSTS)

	if (loading) {
		return (
			<div className='flex items-center justify-center min-h-[200px]'>
				<p className='text-gray-600'>Loading posts...</p>
			</div>
		)
	}

	if (error) {
		return (
			<div className='flex items-center justify-center min-h-[200px]'>
				<p className='text-red-500'>Error: {error.message}</p>
			</div>
		)
	}

	return (
		<div className='grid gap-8 max-w-4xl mx-auto'>
			{data?.posts.nodes.map((post: WordPressPost) => (
				<article key={post.id} className='border border-gray-200 rounded-lg p-6 shadow-sm'>
					<h2 className='text-2xl font-bold mb-4'>{post.title}</h2>
					<div className='prose prose-sm max-w-none' dangerouslySetInnerHTML={{ __html: post.content }} />
					<time className='text-sm text-gray-500 mt-4 block'>{new Date(post.date).toLocaleDateString()}</time>
				</article>
			))}
		</div>
	)
}
