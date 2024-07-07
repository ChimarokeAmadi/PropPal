/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      // padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          50: '#eaebfd',
          75: '#ababf5',
          100: '#8889f1',
          200: '#5456ea',
          300: '#3133e6',
          400: '#2224a1',
          500: '#1e1f8c',
        },

        accent: {
          50: '#fdf1ec',
          75: '#f5c6af',
          100: '#f1ae8e',
          200: '#ea8b5d',
          300: '#e6733c',
          400: '#a1512a',
          500: '#8c4625',
        },

        secondary1: {
          50: '#e9f4fc',
          75: '#a6d1f4',
          100: '#81bef0',
          200: '#4aa2e9',
          300: '#258fe5',
          400: '#1a64a0',
          500: '#17578c',
        },

        secondary2: {
          50: '#fdf8e7',
          75: '#f5e49c',
          100: '#f1d873',
          200: '#eac737',
          300: '#e6bc0e',
          400: '#a1840a',
          500: '#8c7309',
        },
      },

      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
      },

      fontSize: {
        h1: '76px',
        h2: '61px',
        body1: ['20px', '120%'],
        body2: ['16px', '120%'],
        button: '13px',
        caption: '10px'
      },

      fontFamily: {
        'lufga': ['lufga', 'sans-serif']
      },

      container: {
        center: true,
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}

