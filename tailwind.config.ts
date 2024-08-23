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

// <h1 class="text-4xl font-bold leading-tight">Heading 1</h1>
// <h2 class="text-3xl font-semibold leading-snug">Heading 2</h2>
// <h3 class="text-2xl font-semibold leading-normal">Heading 3</h3>
// <h4 class="text-xl font-medium leading-relaxed">Heading 4</h4>
// <h5 class="text-lg font-medium leading-relaxed">Heading 5</h5>
// <h6 class="text-base font-medium leading-relaxed">Heading 6</h6>