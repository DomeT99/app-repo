import { defineStore } from "pinia";
export const useModalStore = defineStore("modal", () => {
  let visibleDeleteModal = ref<boolean>(false);
  let visibleHandleDataModal = ref<boolean>(false);
  let visibleErrorModal = ref<boolean>(false);
  let isEditMode = ref<boolean>(false);

  function handleDeleteModal() {
    visibleDeleteModal.value = !visibleDeleteModal.value;
  }

  function handleErrorModal() {
    visibleErrorModal.value = !visibleErrorModal.value;
  }

  function handleDataModal(editMode: boolean) {
    isEditMode.value = editMode;
    visibleHandleDataModal.value = !visibleHandleDataModal.value;
  }

  return {
    visibleDeleteModal,
    visibleHandleDataModal,
    visibleErrorModal,
    isEditMode,
    handleDeleteModal,
    handleDataModal,
    handleErrorModal,
  };
});
