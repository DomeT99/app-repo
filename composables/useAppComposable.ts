import { useAppStore } from "~/store/appStore";
import { useModalStore } from "~/store/modalStore";
import type { Card } from "~/types/components";
export const useAppComposable = async () => {
  const appStore = useAppStore();
  const modalStore = useModalStore();

  if (appStore.appList.length == 0) {
    await appStore.getAppList();
  }

  function changeInputText(event: Event) {
    appStore.setFilters({ keyword: event.target!.value });
  }

  function setStateDeleteModal(currentApp?: Card) {
    modalStore.handleDeleteModal();

    if (isUndefined(currentApp)) {
      appStore.setCurrentApp({} as Card);
    } else {
      appStore.setCurrentApp(currentApp!);
    }
  }

  return { changeInputText, setStateDeleteModal, modalStore, appStore };
};
