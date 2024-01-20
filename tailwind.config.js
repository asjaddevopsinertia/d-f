/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      ArialL: ["ANL", "sans-serif"],
      ArialB: ["ANB", "sans-serif"],
      Arial: ["AN", "sans-serif"]
    },
    screens: {
      '2xl': {'max': '1400px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'xmd':{'max': '768px'},

      'md': {'max': '600px'},

      'sm': {'max': '425px'}, 

      'xs': {'max': '375px'}, 
    },
    extend: {},
  },
  plugins: [],
}

