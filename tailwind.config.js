/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      // Bootstrap colors
      colors: {
        primary: '#0d6efd', 
        secondary: '#6c757d',
        success: '#198754',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#0dcaf0',
        light: '#f8f9fa',
        dark: '#212529',

      },
      animation: {
        fadeOut: 'fadeOut .3s ease-out both',
        fadeIn: 'fadeIn .3s ease',
        progress: 'progress 10s linear'
      },
      transitionProperty: {
        'margin-left': 'margin-left',
        'margin-left-width': 'margin-left, width',
        'margin-left-opacity': 'margin-left, opacity'
      },
      boxShadow: {
        'dark-mode-sm': '0px 0px 5px 0px rgba(255,255,255, 0.2), inset 0px 0px 1px 2px rgba(49, 65, 84, 0.1)',
      },
      keyframes: {
        fadeOut: {
            '0%': { opacity: 1},
            '99%': { opacity: 0.01, marginLeft: '-10px'},
            '100%': { opacity: 0},
        },
        fadeIn: {
            from: { opacity: 0.1, marginLeft: '-10px'},
            to: { opacity: 1, marginLeft: '0'},
        },
        progress: {
          '0%, 100%': { transition: 'width 10s linear' },
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
  ],
}