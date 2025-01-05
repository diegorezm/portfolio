/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        th: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          muted: "var(--muted)",
          red: "var(--red)"
        }
      },
      padding: {
        DEFAULT: "var(--padding)",
        mobile: "var(--padding-sm)"
      }
    },
  },
  plugins: [],
}

