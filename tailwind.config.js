/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#4E598C',
        txtPrimary: '#050A24',
        secondary: '#F5F5F5',
        accent: '#A18276'
      }
    },
    fontFamily: {
      playfairDisplay: ['PlayfairDisplay', 'serif'],
      sourceSansPro: ['SourceSansPro', 'sans-serif']
    }
  },
  plugins: [],
}

