export default async function BlogPostPage({ params }: { params: { id: string } }) {
	const { id } = await params
	return <div>Blog post {id}</div>
}
