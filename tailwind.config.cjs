/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'pc': '1200px'
		},
		fontFamily: {
			sans: ['Gotham SSm A, sans-serif']
		},
		extend: {
			boxShadow: {
				'underline': '0 1px 0 0 rgba(0,0,0,1)',
			}
		},
	},
	plugins: [],
}
