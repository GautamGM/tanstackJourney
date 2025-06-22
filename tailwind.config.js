/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust if your files are elsewhere
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // or 'media' if you want system preference
  theme: {
    extend: {
      colors: {
        // Optional custom colors to match Grok AI vibe
        grok: {
          background: "#0f0f1a",
          card: "#1a1a2e",
          accent: "#5c62ec",
          soft: "#23233b",
          glow: "#6d6cff",
        },
      },
      boxShadow: {
        glow: "0 0 10px rgba(93, 95, 239, 0.6)",
        soft: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      scale: {
        102: "1.02",
        103: "1.03",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [
    "@tailwindcss/forms",
    "@tailwindcss/typography",
    "@tailwindcss/aspect-ratio",
  ],
};
