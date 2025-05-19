import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'cdn.sanity.io'
			}
		],
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 60,
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
	},
	// Enable React strict mode for better development experience
	reactStrictMode: true,
	// Enable SWC minification
	swcMinify: true,
	// Enable compression
	compress: true,
	// Enable production source maps
	productionBrowserSourceMaps: false
}

export default nextConfig
