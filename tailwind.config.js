/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#EEF1F4',
          dark: '#14181D'
        },
        'grid-line': {
          DEFAULT: '#C9D6E3',
          dark: '#232B33'
        },
        ink: {
          DEFAULT: '#1E2A38',
          soft: '#47525C',
          dark: '#E7EAED',
          'dark-soft': '#A7B0B8'
        },
        surface: {
          DEFAULT: '#F7F9FA',
          dark: '#1A1F25'
        },
        red: {
          DEFAULT: '#B23A28',
          dark: '#E2694F'
        },
        moss: {
          DEFAULT: '#4C7A5E',
          dark: '#74B190'
        }
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      lineHeight: {
        headline: '1.18',
        body: '1.5',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
      },
      borderRadius: {
        none: '0px',
      }
    },
  },
  plugins: [],
}
