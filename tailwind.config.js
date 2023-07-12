/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yellow-bg': '#f9e97c',
        'red-bg-button': `#EC0000`,
        'green-bg-button': '#0F0',
      },
      boxShadow: {
        '3xl': '-6px 4px 20px 5px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
