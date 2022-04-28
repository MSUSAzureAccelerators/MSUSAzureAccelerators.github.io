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