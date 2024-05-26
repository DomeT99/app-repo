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
      await _handleData(false);
    } else {
      modalStore.handleErrorModal();
    }
  }

  async function editCurrentApp() {
    let result = await appStore.editApp();

    if (result) {
      await _handleData(true);
    } else {
      modalStore.handleErrorModal();
    }
  }

  async function _handleData(mode: boolean) {
    appStore.resetState();
    handleDataModal(mode);
    await appStore.getAppList();
  }

  return { modalStore, appStore, handleDataModal, addNewApp, editCurrentApp };
};
