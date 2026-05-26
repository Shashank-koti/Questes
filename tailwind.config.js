/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // primary: '#064C9D',
          primary: '#084995',
          secondary: '#0A2E5C',
          modern: '#1E6FD9',
          // accent: '#DE1283',
          accent: '#d42278',
          soft: '#F04FA2',
          dark: '#1A1F36',
          light: '#FFFFFF',
          faint: '#F5F9FF',
          muted: '#5C6B8A',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      }
    },
  },
  plugins: [],
}
