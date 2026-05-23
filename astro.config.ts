import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://fi.vicecityboats.nurmio.fi",
  output: "server",
  adapter: vercel(),
  i18n: {
    locales: ["fi", "en"],
    defaultLocale: "fi",
    domains: {
      en: "https://en.vicecityboats.nurmio.fi",
    },
  },
});
