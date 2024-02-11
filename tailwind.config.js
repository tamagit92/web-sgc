/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },

    extend: {
      colors: {
        primblue: '#2096ba',
        primorange: '#df6e21',
        primgrey: '#c5d2db',
        fontgrey: '#64748b',
        fontdark: '#0f172a',
      },

      screens: {
        '2xl': '1320px',
      },


    },
  },
  plugins: [],
}