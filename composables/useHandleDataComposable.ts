import { useAppStore } from "~/store/appStore";
import { useModalStore } from "~/store/modalStore";
import type { Card } from "~/types/components";
export const useHandleDataComposable = () => {
  const appStore = useAppStore();
  const modalStore = useModalStore();

  function handleDataModal() {
    modalStore.handleDataModal();
    appStore.setCurrentApp({} as Card);
  }

  return { modalStore, appStore, handleDataModal };
};
