import { defineStore } from "pinia";
export const useModalStore = defineStore("modal", () => {
  let visibleDeleteModal = ref<boolean>(false);
  let visibleHandleDataModal = ref<boolean>(false);

  function handleDeleteModal() {
    visibleDeleteModal.value = !visibleDeleteModal.value;
  }

  function handleDataModal() {
    visibleHandleDataModal.value = !visibleHandleDataModal.value;
  }

  return {
    visibleDeleteModal,
    visibleHandleDataModal,
    handleDeleteModal,
    handleDataModal,
  };
});
