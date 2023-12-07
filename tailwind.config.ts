import type { Config } from 'tailwindcss';

const pxToRem = (px: number, base = 16) => `${px / base}rem`;
const range = (start: number, end: number): number[] =>
	Array.from({ length: end - start + 1 }, (_, index) => start + index);

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'color-214': 'rgb(214,214,214)',
				'color-112': 'rgb(112,112,112)',
				'color-194': 'rgb(194,194,194)',
				'color-light-blue': 'rgb(18,115,228)',
			},
			boxShadow: {
				box: '0px 2px 16px rgba(0, 0, 0, 0.08)',
			},
			spacing: Array.from({ length: 1000 }, (_, index) => {
				const value = pxToRem(index + 1);
				return { [`${index + 1}pxr`]: value };
			}).reduce((acc, obj) => ({ ...acc, ...obj }), {}),
			fontSize: Array.from({ length: 1000 }, (_, index) => {
				const value = pxToRem(index + 1);
				return { [`${index + 1}pxr`]: value };
			}).reduce((acc, obj) => ({ ...acc, ...obj }), {}),
		},
		screens: {
			sm: '640px',
			md: '920px',
			lg: '1024px',
			xl: '1280px',
		},
	},
	plugins: [],
};
export default config;
