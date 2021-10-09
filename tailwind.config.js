module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			...theme('colors'),
			'semi-white': '#F4F3EF',
			'semi-black': '#242424',
		}),
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
