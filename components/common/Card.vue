<script setup lang="ts">
import { type Card } from "../../types/components";
import { openLink } from "@/utils/utility";

defineProps<{
  data: Card;
}>();
</script>

<template>
  <Card style="overflow: hidden" :id="data.id">
    <template #title>
      <section class="flex">
        <div class="flex-1">{{ data.title }}</div>
        <div>
          <i class="pi pi-pencil cursor-pointer"></i> &nbsp;
          <i class="pi pi-trash text-red-600 cursor-pointer"></i>
        </div>
      </section>
    </template>
    <template #subtitle>
      <section class="flex gap-1 mt-4">
        <div v-for="platform in data.platforms" :key="platform">
          <Badge severity="secondary" :value="platform" />
        </div>
      </section>
    </template>
    <template #content>
      <p>{{ data.description }}</p>
    </template>
    <template #footer>
      <section class="flex justify-content-center gap-3">
        <div class="flex-1 align-items-center justify-content-center">
          <Button
            @click="openLink(data.website!)"
            label="Website"
            severity="secondary"
            outlined
            class="w-full"
          />
        </div>
        <div class="flex-1 align-items-center justify-content-center">
          <Button
            @click="openLink(data.repository!)"
            label="Source Code"
            class="w-full"
          />
        </div>
      </section>
    </template>
  </Card>
</template>
