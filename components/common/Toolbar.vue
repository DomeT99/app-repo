<script setup lang="ts">
import { openLink } from "@/utils/utility";
</script>
<template>
  <MegaMenu style="border-radius: 1.5rem">
    <template #start>
      <div style="display: inline-flex">
        <figure>
          <img width="40" height="40" src="/public/logo.png" />
        </figure>
        <h2>App Repo</h2>
      </div>
    </template>

    <template #end>
      <div class="flex align-items-center">
        <i
          @click="openLink('https://github.com/DomeT99/app-repo')"
          class="pi pi-github pointer"
          style="font-size: 1.5rem; margin-right: 1.5rem"
        />
      </div>
    </template>
  </MegaMenu>
</template>
<style scoped>
.pointer{
  cursor: pointer;
}
</style>