<script setup lang="ts"> 
const {
  modalStore,
  appStore,
  changeInputText,
  setStateDeleteModal,
  deleteApplication,
  setStateHandleDataModal,
  setErrorModal
} = await useAppComposable();
</script>

<template>
  <HomePageHandleDataModal />
  <GenericModal
    :data="{
      visible: modalStore.visibleErrorModal,
      position:'top',
      title: 'Warning',
      content: `Fields marked with an asterisk are required`,
      close: () => setErrorModal(),
    }"
  />
  <GenericModal
    :data="{
      visible: modalStore.visibleDeleteModal,
      title: 'Deleting',
      content: `Are you sure you want to delete ${appStore.currentApp.title}?`,
      confirmLabel: 'Delete',
      confirm: async () => await deleteApplication(),
      close: () => setStateDeleteModal(),
    }"
  />
  <section class="flex lg:flex-row flex-column m-3 mt-6 mb-6 gap-4">
    <div class="flex flex-column gap-2">
      <label>Keyword</label>
      <GenericInputText
        :data="{
          placeholder: 'Search for keyword',
        }"
        @input="(e:Event) => changeInputText(e)"
      />
    </div>
    <div class="flex flex-1 flex-row justify-content-end mt-4">
      <Button
        icon="pi pi-plus"
        label="Add new tool"
        severity="danger"
        class="w-full lg:w-2"
        @click="modalStore.handleDataModal(false)"
      />
    </div>
  </section>

  <section class="grid m-3 mt-6 mb-6">
    <div class="lg:col-3 col-12" v-for="app in appStore.appList" :key="app.id">
      <GenericCard
        :data="{
          id: app.id,
          title: app.title,
          description: app.description,
          platforms: app.platforms,
          website: app.website,
          repository: app.repository,
          deleteFn: () => setStateDeleteModal(app),
          editFn: () => setStateHandleDataModal(app),
        }"
      />
    </div>
  </section>
</template>
