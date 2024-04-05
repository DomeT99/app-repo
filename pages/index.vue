<script setup lang="ts">
const visible = ref(false);
</script>

<template>
  <CommonModal
    :data="{
      visible: visible,
      title: 'Deleting ',
      content: 'Are you sure you want to delete this item?',
      confirmLabel: 'Delete',
      confirm: () => {},
    }"
  />
  <section class="flex lg:flex-row flex-column m-3 mt-6 mb-6 gap-4">
    <div class="flex flex-column gap-2">
      <label>Keyword</label>
      <CommonInputText
        :data="{ placeholder: 'Search for keyword', model: '' }"
      />
    </div>
    <div class="flex flex-column gap-2">
      <label>Platform</label>
      <CommonComboBox
        :data="{
          options: [
            { key: 'iOS', value: 'iOS' },
            { key: 'Android', value: 'Android' },
            { key: 'Linux', value: 'Linux' },
            { key: 'MacOS', value: 'MacOS' },
            { key: 'Windows', value: 'Windows' },
          ],
          maxSelectedLabels: 5,
          placeholder: 'Search for platform',
        }"
      />
    </div>
    <div class="flex flex-1 flex-row justify-content-end mt-4">
      <Button
        icon="pi pi-plus"
        label="Add new tool"
        severity="danger"
        class="w-full lg:w-2"
      />
    </div>
  </section>

  <section
    class="flex lg:flex-row flex-column justify-content-center gap-4 m-3 mt-6 mb-6"
  >
    <div class="flex-auto">
      <CommonCard
        :data="{
          id: '1',
          title: 'Google',
          description: 'Search engine',
          platforms: ['iOS', 'Android'],
        }"
      />
    </div>
  </section>
</template>
