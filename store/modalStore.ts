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

  function resetState() {
    visibleDeleteModal.value = false;
    visibleHandleDataModal.value = false;
    visibleErrorModal.value = false;
    isEditMode.value = false;
  }

  return {
    visibleDeleteModal,
    visibleHandleDataModal,
    visibleErrorModal,
    isEditMode,
    handleDeleteModal,
    handleDataModal,
    handleErrorModal,
    resetState,
  };
});
