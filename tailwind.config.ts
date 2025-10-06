import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#f8dd67',
        },
      },
      boxShadow: {
        panel: '0 12px 30px rgba(0,0,0,.25)',
      },
    },
  },
  plugins: [],
}
export default config
