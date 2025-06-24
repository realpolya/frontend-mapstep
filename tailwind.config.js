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
            redColor: "#BB4141",
            greyColor: "#ADACB5",
            lightGreyColor: "#D9D9D9",
            green1Color: "#C3D6D4",
            green2Color: "#CDD7C7",
            
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

