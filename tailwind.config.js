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
    "./src/root_user/pages/CheckoutForm.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

