/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // 開啟 jit(快速編譯)
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      md: '18px',
      lg: '20px',
      xl: '24px',
      '2xl': '28px',
      '3xl': '32px',
      '4xl': '48px',
      '5xl': '80px',
    },
    extend: {
      colors: {
        black: '#020202',
        'gray-100': '#f2f2f2',
        'gray-200': '#d1d1d1',
        'gray-300': '#919191',
        'gray-350': '#515151',
        'gray-400': '#525252',
        primary: '#f18724',
        secondary: '#f2efe7',
      },
      screens: {
        '2xs': '320px',
        xs: '640px',
        sm: '767px',
        md: '979px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
