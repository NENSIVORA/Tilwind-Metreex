/** @type {import('tailwindcss').Config} */
tailwind.config  = {
  content: ["*html"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['Mulish', 'sans-serif'],
    },
    container:{
      screens: {
        'xl':'1140px',
        '2xl': '1140px',
      },
    },
  },
  
  plugins: [],
}