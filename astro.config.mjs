import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://miro86.github.io',
  base: '/stoopidcartoons',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    server: {
      host: true,
    },
  },
});