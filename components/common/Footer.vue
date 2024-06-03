<script setup lang="ts">
const dateNow = computed(() => new Date().getFullYear());
</script>
<template>
  <footer>
    &copy; {{ dateNow }} Made with ❤️ by
    <b class="pointer" @click="openLink('https://linktr.ee/domenicotenace')"
      >Domenico Tenace</b
    >
  </footer>
</template>

<style scoped>
footer {
  padding: 1rem;
  border-top: 1px solid #374151;
  text-align: center;
}
.pointer {
  cursor: pointer;
}
</style>
