import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: "spa",
  root: ".",
  build: {
    chunkSizeWarningLimit: 1024,
    outDir: "../dist",
  },
});
