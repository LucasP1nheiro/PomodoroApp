/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'forest': 'url(./assets/forest.jpg)',
        'trees': 'url(./assets/trees.jpg)',
        'aurora': 'url(./assets/aurora.jpg)',
        'blue': 'url(./assets/blue.jpg)',
        'fall': 'url(./assets/fall-forest.jpg)',
        'sunset': 'url(./assets/sunset.jpg)',
      }
    },
  },
  plugins: [],
}
