import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customCyan: "rgb(32, 170, 182)",
        customCyan2: "rgb(32, 172, 184)",
      },
      dropShadow: {
        custom: "3px 3px 4px #c4c4c4",
      },
      fontSize: {
        'xxs': '0.65rem',
        'xl2' : '1.45rem'
      },
    },
  },
  plugins: [],
} satisfies Config;
