/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B0000',
          hover: '#660000',
          light: '#A91D3A',
        },
        secondary: {
          DEFAULT: '#FAF0E6',
          dark: '#EADDCA',
        },
        accent: {
          DEFAULT: '#A91D3A',
          hover: '#8B0000',
          light: '#C43653',
        },
        dark: {
          DEFAULT: '#1A0F0F',
          light: '#2A1B1B',
        },
        light: {
          DEFAULT: '#FAF0E6',
          dark: '#F0E4D5',
        },
        cream: {
          DEFAULT: '#F5F5DC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
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
