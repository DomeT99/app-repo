<script setup lang="ts">
import { type Card } from "../../types/components"; 

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
          <i class="pi pi-pencil cursor-pointer" @click="data.editFn!()"></i>
          &nbsp;
          <i
            class="pi pi-trash text-red-600 cursor-pointer"
            @click="data.deleteFn!()"
          ></i>
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
            :disabled="data.website == undefined || data.website == ''"
          />
        </div>
        <div class="flex-1 align-items-center justify-content-center">
          <Button
            @click="openLink(data.repository!)"
            label="Source Code"
            class="w-full"
            :disabled="data.repository == undefined || data.repository == ''"
          />
        </div>
      </section>
    </template>
  </Card>
</template>
