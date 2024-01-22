/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'vue.html'],
  darkMode:'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      backgroundImage: {
        'gambar': "url('/img/5137894.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        primary: '#6d28d9',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

