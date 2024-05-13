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
    :position="data.position ?? 'center'"
    :header="data.title"
    :style="{ width: data.width ?? '25vw' }"
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
      <template v-if="data.confirm != undefined">
        <Button
          outlined
          severity="secondary"
          autofocus
          :label="data.confirmLabel"
          @click="data.confirm"
        />
      </template>
    </template>
  </Dialog>
</template>
