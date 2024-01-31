/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'main': '#b72f3f',
      'black': '#101010',
      'white': '#e3e3e3',
      'grey': '#1a1a1a'
    },
    extend: {
      boxShadow: {
        'inner-soft': 'inset 0 2px 6px 0 rgba(0, 0, 0, 0.1)'
      }
    }
  },
  
}
