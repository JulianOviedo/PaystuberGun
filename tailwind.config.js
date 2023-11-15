/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      '1': '#6B9080',
      '2': '#A4C3B2',
      '3': '#CCE3DE',
      '4': '#EAF4F4',
      '5': '#F6FFF8', //fondos
    }
  },
  plugins: [],
}