import { defineNuxtConfig } from 'nuxt3';

defineNuxtConfig({
  routes: {
    '/*': { prerender: true },
  },
});
