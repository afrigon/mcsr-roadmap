import mdx from "@astrojs/mdx";
import { satteri } from "@astrojs/markdown-satteri";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { alertsPlugin } from "./src/markdown/alertsPlugin";

export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [mdx()],
  markdown: {
    processor: satteri({ mdastPlugins: [alertsPlugin] }),
  },
  prerenderConflictBehavior: "error",
  vite: {
    plugins: [tailwindcss()],
  },
});
