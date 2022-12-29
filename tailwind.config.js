/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'blue': '#011e5d',
      'blue-dark': '#011e5d58',
      'white': '#f7f7f7',
      'white-clear': '#fff',
      'red': '#ff0000',
      'gray-light': '#0000008c',
      'gray-dark' : '#000000b3',
      'black-light': '#000000db',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      lg: '1.1rem',
      xl: '1.2rem',
      '2xl': '1.8rem',
      '3xl': '2.25rem',
      '4xl': '2.5rem',
    },
    extend: {
      spacing: {
        '3cus': '3%',
        '5cus': '5%',
        '10cus': '10%',
      },
      borderRadius: {
        '5cus': '5px',
        '10cus': '10px',
      },
      scale: {
        '103': '1.03',
      }
    }
  },
  plugins: [],
}