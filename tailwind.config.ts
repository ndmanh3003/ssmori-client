import type { Config } from 'tailwindcss'

export default {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'system-ui'],
      header: ['Marcellus', 'sans-serif'],
      impact: ['Ephesis', 'sans-serif']
    },
    extend: {
      colors: {
        'mr-st': '#DF4601',
        'mr-nd': '#C95017',
        'mr-rd': '#DB7A3F',
        'mr-th': '#FFF7EB'
      },
      boxShadow: {
        menu: '0px 10px 15px -3px rgba(201, 80, 23, 0.1)'
      }
    }
  },
  plugins: []
} satisfies Config
