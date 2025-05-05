import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./index.html', './src/components/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: 'none'
					}
				}
			}
		},
		container: {
			center: true,
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1200px',
				'2xl': '1200px'
			}
		}
	}
}

export default config
