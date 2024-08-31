/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        base: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        darkBackground: "#1a1a1a", // Dark mode background color
        darkText: "#e0e0e0", // Dark mode text color
        whiteBackground: "#ffffff",
        whiteText: "#333333",
        borderLight: "#dcdcdc",
        borderDark: "#444444",
      },
      borderColor: {
        DEFAULT: "#dcdcdc",
        dark: "#444444",
      },
      borderWidth: {
        1: "1px",
        2: "2px",
        4: "4px",
        8: "8px",
      },
      borderRadius: {
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
