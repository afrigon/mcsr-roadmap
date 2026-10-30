import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { roadmapIntegration } from "./src/roadmap/roadmapIntegration";

export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [mdx(), roadmapIntegration()],
  vite: {
    plugins: [tailwindcss()],
  },
});
