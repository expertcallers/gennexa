import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  outDir: './docs',
  site: 'https://expertcallers.github.io',
  base: '/gennexa',
  build: {
    assets: "static",
  },
  integrations: [tailwind(), mdx()]
});