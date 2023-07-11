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
        'yellow-bg': '#F9FC7C',
        'red-bg-button': `#EC0000`,
      },
      boxShadow: {
        '3xl': '-6px 4px 20px 5px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
