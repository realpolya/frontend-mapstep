/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            textColor: "#000000", // main text color
            backgroundColor: "#F3F0F0", // honeydew for background
            textColor2: "#759CC2",
            textAlterColor: "#FFFFFF"
        },
        fontFamily: {
            mainFont: ["Karla", "sans-serif"],
            secondFont: ["Montserrat", "sans-serif"]
        },
        maxHeight: {
            'amenities': '20rem',
        }
    },
  },
  plugins: [],
}

