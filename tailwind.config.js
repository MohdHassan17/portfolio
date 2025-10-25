/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",       // ✅ App router pages & layouts
    "./src/components/**/*.{js,jsx,ts,tsx}" // ✅ Your components
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1E40AF",          // Custom color name
        accent: "#F59E0B",
        dark: {
          100: "#1A1A1A",
          200: "#141414",
          300: "#0A0A0A",
        },
        light: {
          100: "#F5F5F5",
          200: "#EAEAEA",
        },
      },
    },
  },
  plugins: [],
};
