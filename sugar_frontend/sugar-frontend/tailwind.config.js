/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Poppins"],
    },
    fontSize: {
      navFont: "15px",
    },
    screens: {
      mobile: "320px",
      tablet: "640px",
      laptop: "1024px",
    },
    extend: {
      fontWeight: {
        heading: "900",
        para: "600",
      },
      padding: {
        paddingSectionX: "0.75rem",
        paddingSectionT: "4.75rem",
        paddingSectionB: "2.75rem",
      },
      minHeight: {
        chota: "20rem",
      },
      backgroundImage: {
        navTopImage: "url('./assets/images/pinkNav_images/pinkNav_bg.jpg')",
      },
    },
  },
  plugins: [],
};
