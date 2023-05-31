/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    // borderRadius: {
    //   '5xl': "60px 0px 0px 60px;",

    // },
    // colors: {
    //     transparent: 'transparent',
    //     current: 'currentColor',
    //     lightblue: '#DFF1FF',
    //     blue: '#B5DAF8',
    //     darkblue: '#35AFD6',
    //     white: '#FFFFFF',
    //   },
    extend: {
      backgroundImage: {
        'orang': "url('./src/assets/First-page.png')",
      },
      
    },
  },
  plugins: [],
}
