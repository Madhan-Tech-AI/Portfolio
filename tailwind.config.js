/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C63FF',
          hover: '#5a52d5',
          light: '#8f88ff',
        },
        secondary: {
          DEFAULT: '#F9F7F7',
          dark: '#F7C5CC',
        },
        accent: {
          DEFAULT: '#00BFA6',
          hover: '#00a892',
          light: '#33ccb8',
        },
        dark: {
          DEFAULT: '#1B1B1D',
          light: '#2C2C2E',
        },
        light: {
          DEFAULT: '#FAFAFA',
          dark: '#f0f0f0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(108, 99, 255, 0.5)',
        'glow-accent': '0 0 15px rgba(0, 191, 166, 0.5)',
      },
    },
  },
  plugins: [],
};
