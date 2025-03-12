/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            textColor: "#000000", // main text color
            backgroundColor: "#F3F0F0", // honeydew for background
            blueColor: "#759CC2",
            blueLight: "#BFCCD8",
            textAlterColor: "#FFFFFF",
            darkColor: "#2D3142",
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

