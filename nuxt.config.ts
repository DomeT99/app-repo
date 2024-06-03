export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "App Repo",
    },
  },
  devtools: { enabled: true },
  modules: ["nuxt-primevue", "@pinia/nuxt", "@nuxt/test-utils/module"],
  css: [
    "primevue/resources/themes/lara-dark-amber/theme.css",
    "primeicons/primeicons.css",
    "/node_modules/primeflex/primeflex.css",
  ],
  runtimeConfig: {
    public: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      appCollection: process.env.FIREBASE_APP_COLLECTION,
    },
  },
  imports: {
    presets: [{ from: "@pinia/nuxt", imports: ["defineStore"] }],
  },
});
