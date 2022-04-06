module.exports = {
  mode: 'jit',
  content: [
    './**/*.html'
  ],
  theme: {
    extend: {
      screens: {
        huge: '2000px',
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}