// eslint-disable-next-line no-undef
const config = require('tailwindcss/defaultTheme')

// eslint-disable-next-line no-undef
module.exports = {
  purge: {
    content: ['./components/**/*.js', './pages/**/*.js'],
  },
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        Montserrat: 'Montserrat',
        poppins: 'poppins',
      },
      colors: {
        gray: {
          100: '#3333',
        },
        pink: {
          100: '#3333',
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-bootstrap-grid')({
      gridGutterWidth: '32px',
      containerMaxWidths: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    }),
    // eslint-disable-next-line no-undef
    require('tailwindcss-debug-screens'),
  ],
}
