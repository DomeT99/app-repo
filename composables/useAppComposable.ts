import { useAppStore } from "~/store/appStore";
export const useAppComposable = async () => {
  const appStore = useAppStore();
  const platformModel = ref<string[]>([]);

  if (appStore.appList.length == 0) {
    await appStore.getAppList();
  }

  function changeInputText(event: Event) {
    appStore.setFilters({ keyword: event.target!.value });
  }

  const visible = ref(false);

  return { changeInputText, visible, appStore, platformModel };
};
