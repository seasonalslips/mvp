/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary) / <alpha-value>)",
        "primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: "hsl(var(--muted, 210 40% 96%) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground, 215 16% 47%) / <alpha-value>)",
        card: "hsl(var(--card, var(--background)) / <alpha-value>)",
        accent: "hsl(var(--accent, 210 40% 96%) / <alpha-value>)",
        "accent-foreground": "hsl(var(--accent-foreground, var(--foreground)) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
