import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainbgColor: "#002134",
        mainColor2: "#f88e4f",
        mainColor3: "#e47900",
        mainColor4: "#f49344",
        secondMainColor: "#e9e8e7",
        bgMain: "#f4f4f4",
        bgMain2: "#ffffff",
        bgMain3: "#16268f",
        bgMain4: "#0d0057",
        bgMain5: "#ab6e53",
        textMain: "#b2aa9c",
        templatePrimary: "#2E496B",
        templateSecondary: "#A9D048",
        templateText: "#171717",
        staragrimain: "#0a7d21",
        bgNewCompMain: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
export default config;
