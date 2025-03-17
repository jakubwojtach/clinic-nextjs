/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: process.env.NODE_ENV === 'production' ? '/clinic' : '',
	images: {
		unoptimized: true
	},
	// Ensure trailing slashes are handled correctly
	trailingSlash: true
}

export default nextConfig
