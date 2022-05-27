module.exports = {
    mode: 'jit',
    content: [
      './**/*.html'
    ],
    theme: {
      extend: {
        screens: {
          huge: '2000px',
        },
        colors: {
          'az-blue': '#0078D4',
          'az-accent-light-blue': '#50E6FF',
          'az-dark-gray': '#3C3C41',
          'az-medium-gray': '#75757A',
          'az-light-gray': '#EBEBEB',
          'az-black':'#000000',
          'az-white':'#FFFFFF',
          'ms-orange': '#d83b01',
          'ms-yellow': '#ffb900',
          'ms-green': '#107c10',
          'ms-teal': '#008575',
          'ms-blue': '#0078d4',
          'ms-purple': '#8661c5',
          'ms-dark-orange': '#6b2929',
          'ms-dark-yellow': '#6a4b16',
          'ms-dark-green': '#054b16',
          'ms-dark-teal': '#274b47',
          'ms-dark-blue': '#243a5e',
          'ms-dark-purple': '#3b2e58',
          'ms-light-orange': '#ff9349',
          'ms-light-yellow': '#fef000',
          'ms-light-green': '#9bf00b',
          'ms-light-teal': '#30e5d0',
          'ms-light-blue': '#50e6ff',
          'ms-light-purple': '#d59dff',
          'ms-white': '#ffffff',
          'ms-rich-black': '#000000',
          'ms-extra-light-gray': '#f2f2f2',
          'ms-light-gray': '#e6e6e6',
          'ms-gray': '#d2d2d2',
          'ms-mid-gray': '#737373',
          'ms-dark-gray': '#505050',
          'ms-extra-dark-gray': '#2f2f2f',
          'fb-blue':'#3b5998',
          'tw-blue': '#55acee',
          'li-blue': '#007bb5'

      },
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Segoe UI', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      serif: ['Merriweather', 'serif'],
    },
    boxShadow: {
      'cta': '0 1px 12px rgba(0, 0, 0, 0.25)',
    },
    border: {
      'cta': '1px solid rgba(255,255,255,0.3);'
    }
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}