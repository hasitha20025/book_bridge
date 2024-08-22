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
        
        primary: '#FFC107',           // Golden Yellow for Positivity
        secondary: '#FF7043',         // Warm Orange
        accent: '#4DB6AC',            // Calming Teal
        background: '#F1F8E9',        // Light Soft Green
        text: '#212121',              // Dark Gray for Readability
        complementary: '#00BFA5',     // Vibrant Green
        primary_hover: '#e6ac00',     // Darker shade of Primary
        primary_hover_alt: '#ffa500', // Vibrant orange alternative
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
