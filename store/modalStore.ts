import { defineStore } from "pinia";
export const useModalStore = defineStore("modal", () => {
  let visibleDeleteModal = ref<boolean>(false);

  function handleDeleteModal() {
    visibleDeleteModal.value = !visibleDeleteModal.value;
  }

  return { visibleDeleteModal, handleDeleteModal };
});
