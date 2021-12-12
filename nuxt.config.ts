import { defineNuxtConfig } from 'nuxt3';

defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  buildModules: [
    '@nuxt/postcss8'
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
