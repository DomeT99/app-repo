<script setup lang="ts">
import { type InputText } from "../../types/components";

defineProps<{
  data: InputText;
}>();
</script>

<template>
  <InputText :placeholder="data.placeholder" type="text" />
</template>
