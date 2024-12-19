/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'container' : "1170px"
      },
      backgroundImage: {
        'body-bg': "url('./assets/bgi.png')", 
      },
      fontFamily :{
        'pap': ["Paprika","sarif"]
      }
    },
  },
  plugins: [],
}