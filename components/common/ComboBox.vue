<template>
  <div class="card flex justify-content-center">
    <MultiSelect
      v-model="selectedCities"
      display="chip"
      :options="cities"
      optionLabel="name"
      placeholder="Select Cities"
      :maxSelectedLabels="3"
      class="w-full lg:w-20rem"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
</script>
