import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // ALLOW HTTPS CONNECTIONS ///////////////////////////////////

  // server: {
  //   https: {
  //     key: "./eruption_app-privateKey.key",
  //     cert: "./eruption_app.crt",
  //   },
  // },

  ////////////////////////////////////////////////////////////////
  plugins: [react()],
  define: {
    "process.env.VITE_STRIPE_PK": JSON.stringify(
      process.env.VITE_STRIPE_PK
    ),
    "process.env.VITE_STRIPE_SK": JSON.stringify(
      process.env.VITE_STRIPE_SK
    ),
  },
});
