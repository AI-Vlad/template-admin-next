module.exports = {
  purge:{
    enabled: process.env.PURGE_CSS === 'production' ? true : false,
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/components/template/**/*.{js,ts,jsx,tsx}']
  },
 
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
