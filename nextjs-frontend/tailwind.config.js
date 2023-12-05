/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		borderWidth: {
			DEFAULT: '0.063rem',
		},
		borderRadius: {
			DEFAULT: '3.75rem',
		},
		boxShadow: {
			'none': '0 0 #0000',
			'button-1': '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
		},
		colors: {
			green: {
				100: '#2E4845',
				200: '#253F3C',
				success: '#00B453',
			},

			white: {
				DEFAULT: '#ffffff',
				100: '#F7FAF6',
				200: '#F1F3F0',
				300: '#CAD1CE',
			},

			red: {
				DEFAULT: '#E83644',
			},

			orange: {
				DEFAULT: '#FF8C21',
			},

			transparent: {
				DEFAULT: 'transparent',
			},

			disabled: {
				'button-1': '#D9D9D9',
				'button-2': '#959595',
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1.25rem',
			},
		},

		fontFamily: {
			'open-sans': ['Open Sans', 'sans-serif'],
		},
		fontSize: {
			'heading-l': [
				'2.1875rem',
				{
					lineHeight: '2.813rem',
					letterSpacing: '-0.0625rem',
					fontWeight: 400,
				},
			],

			'desktop-heading-l': [
				'3.125rem',
				{
					lineHeight: '3.75rem',
					letterSpacing: '-0.0625rem',
					fontWeight: '400',
				},
			],

			'heading-m': [
				'1.875rem',
				{
					lineHeight: '2.375rem',
					letterSpacing: '-0.0625rem',
					fontWeight: '400',
				},
			],

			'desktop-heading-m': [
				'2.5rem',
				{
					lineHeight: '2.9375rem',
					letterSpacing: '-0.0625rem',
					fontWeight: '400',
				},
			],

			'heading-s': [
				'1.875rem',
				{
					lineHeight: '2.5rem',
					letterSpacing: '-0.0625rem',
					fontWeight: '400',
				},
			],

			'heading-xs': [
				'1.125rem',
				{
					lineHeight: '1.625rem',
					fontWeight: '400',
				},
			],

			'desktop-heading-xs': [
				'1.25rem',
				{
					lineHeight: '2.5rem',
					fontWeight: '400',
				},
			],

			'heading-sub': [
				'0.625rem',
				{
					lineHeight: 'normal',
					letterSpacing: '0.125rem',
					fontWeight: '400',
				},
			],

			'body': [
				'2rem',
				{
					lineHeight: 'normal',
					letterSpacing: '-0.03125rem',
					fontWeight: '400',
				},
			],

			'copy': [
				'0.875rem',
				{
					lineHeight: '1.625rem',
					fontWeight: '300',
				},
			],

			'copy-s': [
				'0.625rem',
				{
					lineHeight: '1rem',
					fontWeight: '300',
				},
			],

			'button': [
				'0.75rem',
				{
					lineHeight: 'normal',
					fontWeight: '400',
				},
			],

			'button-2': [
				'0.875rem',
				{
					lineHeight: '1.625rem',
					fontWeight: '400',
				},
			],

			'site-logo-text': [
				'0.875rem',
				{
					lineHeight: '1.625rem',
					letterSpacing: '0.1875rem',
					fontWeight: 700,
				},
			],
		},
		spacing: {
			0: 0,
			1: '0.063rem',
			4: '0.25rem',
			8: '0.5rem',
			10: '0.625rem',
			12: '0.75rem',
			15: '0.938rem',
			16: '1rem',
			20: '1.25rem',
			21: '1.313rem',
			24: '1.5rem',
			26: '1.625rem',
			30: '1.88rem',
			32: '2rem',
			37: '2.313rem',
			40: '2.5rem',
			50: '3.125rem',
			60: '3.75rem',
			80: '5rem',
			100: '6.25rem',
			120: '7.5rem',
			160: '10rem',
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
};
