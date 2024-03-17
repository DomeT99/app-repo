export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "App Repo",
    },
  },
  devtools: { enabled: true },
  modules: ["nuxt-primevue", "@pinia/nuxt"],
  css: [
    "primevue/resources/themes/lara-dark-amber/theme.css",
    "primeicons/primeicons.css",
  ],
});
