/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [require("daisyui")],
}
