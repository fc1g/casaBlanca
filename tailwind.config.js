/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '440px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary-50': '#e8f7ff',
        'primary-100': '#d5f0ff',
        'primary-200': '#b3e1ff',
        'primary-300': '#85cbff',
        'primary-400': '#56a6ff',
        'primary-500': '#2f80ff',
        'primary-600': '#0c54ff',
        'primary-700': '#0049ff',
        'primary-800': '#0642cd',
        'primary-900': '#103f9f',
        'primary-950': '#0a235c',

        'secondary-50': '#f2fbf8',
        'secondary-100': '#d3f4e9',
        'secondary-200': '#a6e9d4',
        'secondary-300': '#72d6ba',
        'secondary-400': '#49bea1',
        'secondary-500': '#2ba186',
        'secondary-600': '#20816c',
        'secondary-700': '#1e6759',
        'secondary-800': '#1c5349',
        'secondary-900': '#1b463e',
        'secondary-950': '#0a2924',

        dark: '#181b20',
        lightDark: '#23272f',
        lightGrayish: '#f0f0f0',
      },
    },
  },
  plugins: [],
};
