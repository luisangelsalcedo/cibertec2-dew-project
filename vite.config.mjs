import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5000,
    host: true,
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@styles": resolve(__dirname, "src/assets/scss"),
    },
  },
});
