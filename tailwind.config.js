/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    fontSize: {
      xxs: ["0.675rem"],
      xs: ["0.8125rem"],
      sm: ["0.9375rem"],
      base: ["1.0625rem", "1.65rem"],
      "2xl": ["1.25rem", "1.65rem"],
      "3xl": ["1.65rem", "2.0rem"],
      "4xl": ["2rem", "2.5rem"],
    },
    extend: {
      colors: {
        yellow: {
          300: "#fef9ed",
          400: "#fae7be",
          500: "#f7d68e",
          600: "#f4c55e",
          700: "#f0b32f",
          800: "#dc9c10",
        },
        gray: {
          100: "#eceff4",
          200: "#dbdee3",
          400: "#b7b4c7",
          500: "#a6a3b6",
          600: "#35333c",
          700: "#24222b",
          800: "#13111a",
          900: "#02000b",
        },
      },
    },
  },
};
