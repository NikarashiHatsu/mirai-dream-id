const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
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
      }
    },
    fontFamily: {
      lexend: ['"Lexend"', 'serif'],
      valeraRound: ['"Varela Round"', 'serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
