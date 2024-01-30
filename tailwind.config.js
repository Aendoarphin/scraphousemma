/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  colors: {
    'main': '#b72f3f',
    'black': '#101010',
    'white': '#e3e3e3',
    'grey': '#1a1a1a'
  }
};
export const plugins = [];
