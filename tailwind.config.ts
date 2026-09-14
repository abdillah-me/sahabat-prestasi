import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Hijau tosca — warna utama (mengikuti referensi Coursespace)
        brand: {
          50: "#eafaf4",
          100: "#cdf2e5",
          200: "#9ce5cd",
          300: "#63d0b0",
          400: "#33b592",
          500: "#159b7a",
          600: "#0d7d63",
          700: "#0f6353",
          800: "#125044",
          900: "#123f38",
        },
        // Kuning/oranye — aksen (mengikuti referensi + selaras logo)
        accent: {
          50: "#fff8eb",
          100: "#feefc7",
          200: "#fddd8a",
          300: "#fbc44d",
          400: "#f9ad24",
          500: "#f38b0b",
          600: "#d76806",
          700: "#b24809",
          800: "#90380e",
          900: "#762f0f",
        },
        // Merah — dipakai tipis untuk label/aksen kecil (dari logo)
        redx: {
          50: "#fef2f2",
          100: "#fde3e3",
          200: "#fbcccc",
          300: "#f7a3a3",
          400: "#f06f6f",
          500: "#e23d3d",
          600: "#cf2626",
          700: "#ad1d1d",
          800: "#8f1c1c",
          900: "#771d1d",
        },
        cream: "#f1f6f3",
        ink: "#123f38",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(18, 63, 56, 0.15)",
        card: "0 12px 32px -14px rgba(18, 63, 56, 0.22)",
        float: "0 20px 50px -20px rgba(18, 63, 56, 0.32)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
