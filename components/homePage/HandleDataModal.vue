<script setup lang="ts">
import { useHandleDataComposable } from "~/composables/useHandleDataComposable";

const { modalStore, appStore, handleDataModal } = useHandleDataComposable();
</script>

<template>
  <Dialog
    v-model:visible="modalStore.visibleHandleDataModal"
    modal
    :header="
      appStore.currentApp.title != undefined ? 'Edit tool' : 'Add new tool'
    "
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <div class="grid gap-3">
      <div class="col-12 inline-flex flex-column gap-2">
        <label for="title" class="text-primary-50">Title(*)</label>
        <CommonInputText
          v-model="appStore.currentApp.title"
          id="title"
          class="w-full"
          :data="{
            placeholder: '',
          }"
        />
      </div>
      <div class="col-12 inline-flex flex-column gap-2">
        <label for="description" class="text-primary-50">Description</label>
        <CommonInputText
          v-model="appStore.currentApp.description"
          id="title"
          class="w-full"
          :data="{
            placeholder: '',
          }"
        />
      </div>
      <div class="col-12 inline-flex flex-column gap-2">
        <label for="website" class="text-primary-50">Website</label>
        <CommonInputText
          v-model="appStore.currentApp.website"
          id="website"
          class="w-full"
          :data="{
            placeholder: '',
          }"
        />
      </div>
      <div class="col-12 inline-flex flex-column gap-2">
        <label for="source" class="text-primary-50">Source Code</label>
        <CommonInputText
          v-model="appStore.currentApp.repository"
          id="source"
          class="w-full"
          :data="{
            placeholder: '',
          }"
        />
      </div>
      <div class="col-12 inline-flex flex-column gap-2">
        <label class="text-primary-50">Platforms(*)</label>
        <CommonComboBox
          v-model="appStore.currentApp.platforms"
          style="width: 100% !important"
          :data="{
            options: [
              { key: 'iOS', value: 'iOS' },
              { key: 'Android', value: 'Android' },
              { key: 'Linux', value: 'Linux' },
              { key: 'MacOS', value: 'MacOS' },
              { key: 'Windows', value: 'Windows' },
            ],
          }"
        />
      </div>
    </div>
    <div class="flex align-items-center gap-3 mt-5">
      <Button
        label="Close"
        text
        class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
        @click="handleDataModal"
      ></Button>
      <Button
        label="Save"
        text
        class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
      ></Button>
    </div>
  </Dialog>
</template>
