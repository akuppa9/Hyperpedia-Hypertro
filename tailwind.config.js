/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {boxShadow: {
      'red-glow': '0 0 10px #ff0000',
      'blue-glow': '0 0 10px #0000ff',
      'purple-glow':'0 0 10px #800080',
      'green-glow':'0 0 10px #008000',
      'yellow-glow':'0 0 10px #FFFF00',
    }},
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [require("daisyui")],
}

