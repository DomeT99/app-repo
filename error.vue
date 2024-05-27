<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <CommonToolbar />
  <section class="min-h-screen">
    <div class="text-center mt-8">
      <h2>{{ error?.statusCode }} - {{ error?.statusMessage }}</h2>
    </div>
    <div class="flex justify-content-center mt-6">
      <Button @click="handleError">Return to home</Button>
    </div>
  </section>
  <CommonFooter />
</template>
