import { useAppStore } from "~/store/appStore";
import { useModalStore } from "~/store/modalStore";
import type { Card } from "~/types/components";
export const useHandleDataComposable = () => {
  const appStore = useAppStore();
  const modalStore = useModalStore();

  function handleDataModal(editMode: boolean) {
    modalStore.handleDataModal(editMode);
    appStore.setCurrentApp({} as Card);
  }

  async function addNewApp() {
    let result = appStore.addApp();

    if (result != undefined) {
      appStore.resetState();
      handleDataModal(false);
      await appStore.getAppList();
    }
  }

  async function editCurrentApp() {
    let result = appStore.editApp();

    if (result != undefined) {
      appStore.resetState();
      handleDataModal(true);
      await appStore.getAppList();
    }
  }

  return { modalStore, appStore, handleDataModal, addNewApp, editCurrentApp };
};
