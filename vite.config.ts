import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // Exclude any "* - Copy" folders (e.g. node_modules - Copy) to prevent EBUSY errors
      ignored: ["**/* - Copy/**", "**/dist - Copy/**"],
    },
  },
});
