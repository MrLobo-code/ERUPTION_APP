/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/main.jsx",
    "./src/common_user/MenuNavbar.jsx",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
    "./src/common_user/Carousel.jsx",
    "./src/common_user/Card.jsx",
    "./src/common_user/components/DropdownMenu.jsx",
    "./src/root_user/pages/CheckoutForm.jsx",
    "./src/common_user/pages/ProductPage.jsx",
    "./src/common_user/pages/Login.jsx",

    // Products

    "./src/common_user/components/productsPages/Pro1RogAlly.jsx",
    "./src/common_user/components/productsPages/Pro2SmartTV.jsx",

    // Cards
    "./src/common_user/components/Cards/RogAllyCard.jsx",
    "./src/common_user/components/Cards/SmartTVCard.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
