import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import alpinejs from '@astrojs/alpinejs';
import tailwincss from '@tailwindcss/vite'
import { SITE } from './src/config.mjs';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ?? 'never',
  output: 'static',

  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },

  integrations: [
    sitemap({
      i18n: {
        locales: ['en-CA', 'fr-CA'],
        defaultLocale: 'en',
      },
    }),
    alpinejs(),
  ],

  vite: {
    plugins: [tailwincss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
