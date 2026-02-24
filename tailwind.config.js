/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900) / <alpha-value>)',
        },
        accent: {
          100: 'rgb(var(--color-accent-100) / <alpha-value>)',
          200: 'rgb(var(--color-accent-200) / <alpha-value>)',
          500: 'rgb(var(--color-accent-500) / <alpha-value>)',
        },
        surface: {
          base: 'rgb(var(--color-surface-base) / <alpha-value>)',
          card: 'rgb(var(--color-surface-card) / <alpha-value>)',
          muted: 'rgb(var(--color-surface-muted) / <alpha-value>)',
          border: 'rgb(var(--color-surface-border) / <alpha-value>)',
        },
        text: {
          body: 'rgb(var(--color-text-body) / <alpha-value>)',
          heading: 'rgb(var(--color-text-heading) / <alpha-value>)',
          inverted: 'rgb(var(--color-text-inverted) / <alpha-value>)',
        },
      },
      boxShadow: {
        card: '0 10px 30px -15px rgba(15, 23, 42, 0.2)',
      },
    },
  },
  plugins: [],
}

