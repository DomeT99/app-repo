import { useAppStore } from "~/store/appStore";
import { useModalStore } from "~/store/modalStore";
import type { Card } from "~/types/components";
import type { App } from "~/types/generic";
export const useAppComposable = async () => {
  const appStore = useAppStore();
  const modalStore = useModalStore();

  if (appStore.appList.length == 0) {
    await appStore.getAppList();
  }

  function changeInputText(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    appStore.setFilters({ keyword: inputElement.value });
  }

  function setStateDeleteModal(currentApp?: App) {
    modalStore.handleDeleteModal();

    _setCurrentApp(currentApp);
  }

  function setStateHandleDataModal(currentApp?: App) {
    modalStore.handleDataModal(true);

    _setCurrentApp(currentApp);
  }

  async function deleteApplication() {
    const result = await appStore.deleteApp();

    if (result) {
      appStore.resetState();
      setStateDeleteModal();
      await appStore.getAppList();
    }
  }

  function _setCurrentApp(currentApp?: Card) {
    if (isUndefined(currentApp)) {
      appStore.setCurrentApp({} as Card);
    } else {
      appStore.setCurrentApp(currentApp!);
    }
  }

  return {
    changeInputText,
    setStateDeleteModal,
    deleteApplication,
    setStateHandleDataModal,
    modalStore,
    appStore,
  };
};
