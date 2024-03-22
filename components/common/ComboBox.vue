<script setup lang="ts">
import { type ComboBox } from "../../types/components";

defineProps<{
  data: ComboBox;
}>();
</script>

<template>
  <MultiSelect
    v-model="data.model"
    :placeholder="data.placeholder"
    :options="data.options"
    :maxSelectedLabels="data.maxSelectedLabels"
    class="w-full lg:w-20rem"
    display="chip"
    optionLabel="key"
  />
</template>
