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
          50: '#F1F8F1',
          100: '#E8F5E9',
          200: '#C8E6C9',
          300: '#A5D6A7',
          400: '#66BB6A',
          500: '#2E7D32', // Primary brand color
          600: '#256629',
          700: '#1B4D1F',
          800: '#133515',
          900: '#0B200D',
        },
        surface: {
          cream: '#FAF9F6',
          dark: '#17201A',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px rgba(23, 32, 26, 0.04)',
        'soft': '0 4px 20px rgba(23, 32, 26, 0.06)',
        'soft-lg': '0 10px 30px rgba(23, 32, 26, 0.08)',
        'soft-xl': '0 20px 40px rgba(23, 32, 26, 0.10)',
        'green-glow': '0 8px 24px rgba(46, 125, 50, 0.25)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
}
