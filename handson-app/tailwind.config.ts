import type { Config } from 'tailwindcss';
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      boxShadow: {
        soft: '0 2px 20px -4px rgba(0, 0, 0, 0.12)'
      }
    }
  },
  plugins: [],
} satisfies Config;