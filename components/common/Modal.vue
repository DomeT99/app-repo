<script setup lang="ts">
import { type Modal } from "../../types/components";

defineProps<{
  data: Modal;
}>();
</script>

<template>
  <Dialog
    v-model:visible="data.visible"
    modal
    :header="data.title"
    :style="{ width: '50vw' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <p class="m-0">
      {{ data.content }}
    </p>
    <template #footer>
      <Button
        label="Close"
        text
        severity="secondary"
        autofocus
        @click="data.close()"
      />
      <Button
        outlined
        severity="secondary"
        autofocus
        :label="data.confirmLabel"
        @click="data.confirm"
      />
    </template>
  </Dialog>
</template>
