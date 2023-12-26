// TEXT THEME
const blackText = '#212121';
const whiteText = '#f5f7f8';

// BACKGROUND THEME
const blackBg = "#1c1c1c";
const whiteBg = "#f2f5fa";

// CONTENT THEME
const blackContent = "#3c3c3c";
const whiteContent = "#f8fafc";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors: {
        primary: {
          '900': '#501F16',
          '500': '#FF6347',
          '400': '#FD5F43',
          '100': "#FF2700",
        },
        text: {
          dark: whiteText,
          light: blackText,
        },
        bg: {
          dark: blackBg,
          light: whiteBg,
        },
        content: {
          dark: blackContent,
          light: whiteContent,
        },
        'black-op75': "#000000c1",
        'white-op75': "#ffffffc1",
      },

      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },

      gridTemplateColumns: {
        '12': 'repeat(12.minmax(0,1fr))',
      },

      height: {
        max: 'max-content',
        fit: 'fit-content',
      },

      width: {
        max: 'max-content',
        fit: 'fit-content',
        'vw-3': 'calc(100vw / 3)',
        slider: 'calc(100vw - 3em)',
      }, 
      
    },
  },
  darkMode: 'media',
  plugins: [],
}
