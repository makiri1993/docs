const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
  important: true,
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        code: {
          green: 'var(--color-code-green)',
          yellow: 'var(--color-code-yellow)',
          purple: 'var(--color-code-purple)',
          red: 'var(--color-code-red)',
          blue: 'var(--color-code-blue)',
          white: 'var(--color-code-white)',
        }
      },
      spacing: {
        '7': '1.75rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '80': '20rem',
        '128': '32rem',
        '(screen-16)': 'calc(100vh - 4rem)',
      },
      inset: {
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
      },
      borderWidth: {
        '6': '6px',
      },
      maxWidth: theme => {
        return {
          'screen-xl': theme('screens.xl'),
        }
      },
      maxHeight: {
        'xs': '20rem',
        'sm': '30rem',
        '(screen-16)': 'calc(100vh - 4rem)',
      },
      boxShadow: {
        'md-light': '0 0 12px 8px rgb(255,255,255)'
      },
      zIndex: {
        '90': '90',
        '100': '100',
      },
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderWidth: ['responsive', 'hover', 'focus'],
  }
}
