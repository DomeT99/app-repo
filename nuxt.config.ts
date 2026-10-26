/**
 * COLOR THEME
 */
const customLightTheme = {
  dark: false,
  colors: {
    background: "#f1f1f1",
    surface: "#FFFFFF",
    primary: "#fa892d",
    secondary: "#fa892d",
    error: "#BA1A1A",
    info: "#2196F3",
    success: "#006045",
    warning: "#FB8C00",
  },
};
const customDarkTheme = {
  dark: true,
  colors: {
    background: "#1e1e2e",
    surface: "#1a1a2a",
    primary: "#fa892d",
    secondary: "#fa892d",
    error: "#FFB4AB",
    info: "#2196F3",
    success: "#006045",
    warning: "#FB8C00",
  },
};

/**
 * COMPONENTS
 */
const customVBtn = {
  rounded: true,
  elevation: 0,
};
const customVSelect = {
  rounded: true,
  clearable: true,
  variant: "outlined",
};
const customVTextField = {
  rounded: true,
  clearable: true,
  variant: "outlined",
};
const customVCard = {
  rounded: true,
  elevation: 0,
  variant: "flat",
};
const customChip = {
  elevation: 0,
  variant: "elevated",
};

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module", "@pinia/nuxt"],
  vuetify: {
    vuetifyOptions: {
      theme: {
        themes: {
          light: customLightTheme,
          dark: customDarkTheme,
        },
      },
      defaults: {
        VBtn: customVBtn,
        VSelect: customVSelect,
        VChip: customChip,
        VTextField: customVTextField,
        VCard: customVCard,
      },
    },
  },
});
