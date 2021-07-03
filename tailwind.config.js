const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './public/**/*.html',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        gray: colors.blueGray,
      },
      spacing: {
        '120': '30rem'
      },
      fontFamily: {
        lexend: ['"Lexend"', 'serif'],
        valeraRound: ['"Varela Round"', 'serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
