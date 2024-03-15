export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "App Repo",
    },
  },
  devtools: { enabled: true },
  modules: ["nuxt-primevue", "@pinia/nuxt", "@vite-pwa/nuxt"],
  css: [
    "primevue/resources/themes/lara-dark-amber/theme.css",
    "primeicons/primeicons.css",
  ],
  pwa: {
    includeAssets: ["favicon.ico"],
    manifest: {
      name: "App Repo",
      short_name: "App Repo",
      description: "Little repo for your favourite apps",
      theme_color: "#ffffff",
      icons: [
        {
          src: "favicon.ico",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "favicon.ico",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  },
});
