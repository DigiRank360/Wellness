/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#0B5D2E', light: '#2DA55A', dark: '#064420' },
        teal: { DEFAULT: '#1FBFA8' },
        accent: { DEFAULT: '#D91018', dark: '#B00D14' },
        mint: '#EEF7F0',
        ink: '#2F343B',
      },
      fontFamily: {
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
        display: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': { '0%': { opacity: 0, transform: 'translateY(32px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        'fade-in': { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        'pulse-ring': { '0%': { transform: 'scale(1)', opacity: 0.6 }, '100%': { transform: 'scale(1.9)', opacity: 0 } },
        'gradient-x': { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        'wave': { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      animation: {
        'fade-up': 'fade-up .8s ease-out both',
        'fade-in': 'fade-in 1s ease-out both',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        wave: 'wave 14s linear infinite',
      },
    },
  },
  plugins: [],
}
