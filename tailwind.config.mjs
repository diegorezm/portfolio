/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary-foreground)',
        secondary: 'var(--secondary-foreground)',
        accent: 'var(--accent-foreground)',
        'background-alt': 'var(--background-alt)',
        'foreground-alt': 'var(--foreground-alt)',
        'warning-foreground': 'var(--warning-foreground)',
      },
      borderRadius: {
        "default": "var(--radius)"
      }
    },
  },
  plugins: [],
}
