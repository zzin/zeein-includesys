module.exports = {
	darkMode: 'class',
	content: [
		'./assets/src/**/*.php',
		'./template-parts/**/*.php',
		'./*.php',
		'./**/*.php',
		'./inc/**/*.php',
		'./inc/*.php',
		'./assets/src/**/*.js',
		'./assets/src/*.js',
		'./assets/src/**/*.scss',
	],
	theme: {
		fontFamily: {
			sans: ['roboto', 'elandChoice'],
			playfair: ['playfair', 'sans-serif', 'roboto', 'elandChoice'],
		},
		extend: {
			colors: {
				'black-dark': '#0A0F19',
			},
			height: (theme) => ({
				'100px': '100px',
				'screen-20': '20vh',
				'screen-40': '40vh',
				'screen-60': '60vh',
				'screen-80': '80vh',
				'screen/2': '50vh',
				'screen/3': 'calc(100vh / 3)',
				'screen/4': 'calc(100vh / 4)',
				'screen/5': 'calc(100vh / 5)',
			}),
			boxShadow: {
				'3xl':
					'0px 60px 50px -30px rgba(0, 0, 0, 0.1), 0px 20px 30px -10px rgba(0, 0, 0, 0.1)',
			},
		},
	},
	plugins: [],
	// plugins: [require('@tailwindcss/forms')],
};
