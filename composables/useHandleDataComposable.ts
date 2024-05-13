import { useAppStore } from "~/store/appStore";
import { useModalStore } from "~/store/modalStore"; 
import type { App } from "~/types/generic";
export const useHandleDataComposable = () => {
  const appStore = useAppStore();
  const modalStore = useModalStore();

  function handleDataModal(editMode: boolean) {
    modalStore.handleDataModal(editMode);
    appStore.setCurrentApp({} as App);
  }

  async function addNewApp() {
    let result = await appStore.addApp();

    if (result) {
      appStore.resetState();
      handleDataModal(false);
      await appStore.getAppList();
    } else {
      modalStore.handleErrorModal();
    }
  }

  async function editCurrentApp() {
    let result = await appStore.editApp();

    if (result) {
      appStore.resetState();
      handleDataModal(true);
      await appStore.getAppList();
    } else {
      modalStore.handleErrorModal();
    }
  }

  return { modalStore, appStore, handleDataModal, addNewApp, editCurrentApp };
};
