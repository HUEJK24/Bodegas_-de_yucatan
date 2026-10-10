import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://bodegasdeyucatan.mx",
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: true },
  },
});
