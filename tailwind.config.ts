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
        
        primary: '#FFC107',      // Vibrant Green
        secondary: '',    // Warm Orange
        accent: '',       // Calming Teal
        background: '#F1F8E9',   // Light Soft Green
        text: '#212121',         // Dark Gray for Readability
        complementary: '#00BFA5' // Golden Yellow for Positivity
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
