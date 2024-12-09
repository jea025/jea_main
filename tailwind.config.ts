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
        customCyan3: "rgb(46, 194, 206);",
      },
      dropShadow: {
        custom: "3px 3px 4px #c4c4c4",
      },
      fontSize: {
        'xxs': '0.65rem',
        'xl2' : '1.45rem'
      },
      backgroundImage: {
        'radio': "url('../public/radio.png')",
        'mision': "url('../public/mision.PNG')",
        'vision': "url('../public/vision.png')",
      },
      height: {
        'size': "550px",
        '600': "600px"
      },
      width: {
        '400': "400px",
      },
      perspective: {
        '1000': '1000px',
      }
    },
  },
  plugins: [],
} satisfies Config;
