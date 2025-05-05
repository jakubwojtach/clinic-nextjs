export default function BlogPostPage({ params }: { params: { id: string } }) {
	return <div>Blog post {params.id}</div>
}
