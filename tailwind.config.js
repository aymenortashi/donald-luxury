/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',       
        secondary: '#F5F5F5',     
        accent: '#D4AF37',        
        grayLux: {
          100: '#f5f5f5',
          500: '#7d7d7d',
          700: '#4a4a4a',
          900: '#1a1a1a',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-5px)' },
        },
       moveLeft: {
  '0%': { opacity: 0, transform: 'translateX(0) translateY(0)' },
  '100%': { opacity: 1, transform: 'translateX(-120px) translateY(-50px)' },
},
moveCenter: {
  '0%': { opacity: 0, transform: 'translateX(0) translateY(0)' },
  '100%': { opacity: 1, transform: 'translateX(0) translateY(-50px)' },
},
moveRight: {
  '0%': { opacity: 0, transform: 'translateX(0) translateY(0)' },
  '100%': { opacity: 1, transform: 'translateX(120px) translateY(-50px)' },
},
      },
      animation: {
        fadeIn: 'fadeIn 1s ease forwards',
        fadeOut: 'fadeOut 1s ease forwards',
        pulseSlow: 'pulse 2.5s ease-in-out infinite',
        moveLeft: 'moveLeft 1s ease forwards',
        moveCenter: 'moveCenter 1s ease forwards',
        moveRight: 'moveRight 1s ease forwards',
      },
    },
  },
  plugins: [],
};

