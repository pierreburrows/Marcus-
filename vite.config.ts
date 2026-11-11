import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this repo at /Marcus-/. When the custom domain
// (marcusfieldbespoke.co.uk) is connected, build with SITE_BASE=/ instead.
export default defineConfig({
  base: process.env.SITE_BASE ?? "/Marcus-/",
  plugins: [react()],
});
