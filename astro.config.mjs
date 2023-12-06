import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  outDir: './docs',
  build: {
    assetsPrefix: "."
  },
  integrations: [tailwind(), mdx()]
});