/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sky: '#f0f9ff',
        background: '#0ea5e9',
        borderColor: '#38bdf8',
      },
    },
  },
  plugins: [],
}
