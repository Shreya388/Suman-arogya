import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or 'Lato', sans-serif
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          600: '#059669', // Main Brand Color
          700: '#047857',
          800: '#065F46',
          950: '#022C22',
        },
        amber: {
          100: '#FEF3C7',
          200: '#FDE68A', // Accent Color
        },
        slate: {
          700: '#404040',
          800: '#262626',
          950: '#171717',
        },
      },
    },
  },
  plugins: [],
};
export default config;