<script setup lang="ts">
import type { NuxtError } from "#app";
import { useAppStore } from "~/store/appStore";
import { useModalStore } from "~/store/modalStore";

const appStore = useAppStore();
const modalStore = useModalStore();

const props = defineProps({
  error: Object as () => NuxtError,
});

function handleError() {
  appStore.resetState();
  modalStore.resetState();
  clearError({ redirect: "/" });
}
</script>

<template>
  <CommonToolbar />
  <section class="min-h-screen">
    <div class="text-center mt-8">
      <h2>{{ props.error?.statusCode }} - {{ props.error?.statusMessage }}</h2>
    </div>
    <div class="flex justify-content-center mt-6">
      <Button @click="handleError">Return to home</Button>
    </div>
  </section>
  <CommonFooter />
</template>
