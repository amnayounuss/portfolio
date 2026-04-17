/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: "var(--primary)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      keyframes: {
        "text-reveal": {
          "0%": { transform: "translateY(100%) skewY(10deg)", opacity: 0 },
          "100%": { transform: "translateY(0) skewY(0deg)", opacity: 1 },
        },
      },
      animation: {
        "text-reveal": "text-reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}