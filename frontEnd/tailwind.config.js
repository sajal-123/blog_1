/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#1565D8',
        dark:{
            light:'#5A7184',
            hard:'#0D2436',
            soft:'#183B56' 
        }
      },
      fontFamily:{
        openSans:["Open Sans", 'sans-serif'],
        Roboto:["Roboto", 'sans-serif']
      },
      backgroundImage: {
        // 'hero-gradient': 'linear-gradient(to bottom, blue, #7373FF)',
        // 'article-gradient': 'linear-gradient(to bottom, #7373FF, #ffff)',
      },
    },
  },
  plugins: [],
}

