import { defineStore } from "pinia";
import type { Card } from "~/types/components";

export const useAppStore = defineStore("app", () => {
  let appList: Card[] = [];

  async function getAppList() {
    try {
      const { data } = await useFetch("/api/appController/get/list");

      data.value?.data.forEach((app: Card) => appList.push(app));
    } catch (e) {
      console.log(e);
    }
  }

  return { appList, getAppList };
});
