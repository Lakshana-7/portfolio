/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        'bg-alt': '#F8F9FD',
        surface: {
          DEFAULT: '#FFFFFF',
          raised: '#F1F4F9',
          dark: '#07080E',
          'dark-raised': '#121422',
        },
        border: 'rgba(0, 0, 0, 0.08)',
        'border-dark': 'rgba(255, 255, 255, 0.1)',
        text: '#0B0D17',
        muted: '#525A6C',
        highlight: '#D97706',
        available: '#10B981',
        accent: {
          from: '#4F46E5',
          to: '#2563EB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Barlow Condensed"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #4F46E5 0%, #2563EB 100%)',
        'accent-gradient-horizontal': 'linear-gradient(90deg, #4F46E5 0%, #2563EB 100%)',
      },
      maxWidth: {
        'site': '1200px',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
