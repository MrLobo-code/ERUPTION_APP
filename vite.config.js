import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // ALLOW HTTPS CONNECTIONS ///////////////////////////////////

  server: {
    https: {
      key: "./eruption_app-privateKey.key",
      cert: "./eruption_app.crt",
    },
  },

  ////////////////////////////////////////////////////////////////
  plugins: [react()],
});
