import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": new URL("./src/", import.meta.url),
      },
    },
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "inter-tight",
        cssVariable: "--font-inter-tight",
        weights: ["100 900"],
      },
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
        weights: ["100 900"],
      },
    ],
  },
});
