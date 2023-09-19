// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-headlessui",
    "nuxt-tailwind-heroicons",
  ],
  alias: {
    assets: "/<rootDir>/assets",
  },
  image: {
    dir: "assets/",
  },
});
