/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        // Map to existing CSS variables so brand stays consistent
        brand: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
        },
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
        text: {
          DEFAULT: 'var(--color-text)',
          secondary: 'var(--color-text-secondary)',
        },
        bg: 'var(--color-bg)',
        subtle: 'var(--color-subtle-bg)',
        danger: 'var(--color-error)',
      },
      borderColor: {
        DEFAULT: 'var(--color-border)'
      },
      fontWeight: {
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)'
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)'
      }
    },
  },
  plugins: [],
};
