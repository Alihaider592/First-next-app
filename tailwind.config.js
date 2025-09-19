/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       
    "./pages/**/*.{js,ts,jsx,tsx}",     
    "./components/**/*.{js,ts,jsx,tsx}" 
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',   
        secondary: '#F59E0B', 
        accent: '#10B981',    
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        128: '32rem',  
        144: '36rem',
      },
      borderRadius: {
        'xl': '1rem',
      }
    },
  },
  plugins: [],
}
