/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      /* kalo mau customize bisa disini */
      spacing: {
        13: "3.25rem",
      },
      colors: {
        wpu: "#bada55",
        kopi: "#c0ffee",
      },
      backgroundImage: {
        hero: "url('img/1.jpg')",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
