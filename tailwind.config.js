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
      'dark-grey': '#1a1a1a',
      'light-grey': '#cccccc',
      'gold': '#ffb85c6d',
    },
    extend: {
      boxShadow: {
        'inner-soft': '0 2px 2px 0 rgba(0, 0, 0, .1)'
      },
      fontWeight: {
        'heading': 'bold'
      },
      transitionDuration: {
        'default': '.2s'
      }
    }
  },
  
}
