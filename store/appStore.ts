import { defineStore } from "pinia";
import type { Card } from "~/types/components";
import type { Filter } from "~/types/store";
import { isUndefined, isEmptyString } from "~/utils/utility";

export const useAppStore = defineStore("app", () => {
  let _appListOriginal = ref<Card[]>([]);
  let appList = ref<Card[]>([]);
  let filters = ref<Filter>({ keyword: "" });

  async function getAppList() {
    try {
      const { data } = await useFetch("/api/appController/get/list");

      data.value?.data.forEach((app: Card) => {
        _appListOriginal.value.push(app);
        appList.value.push(app);
      });
    } catch (e) {
      console.log(e);
    }
  }

  function setFilters(filter: Filter) {
    if (!isUndefined(filter.keyword)) {
      filters.value.keyword = filter.keyword;
    }

    if (!isEmptyString(filters.value.keyword!)) {
      _searchApp();
    } else {
      _resetFilters();
    }
  }

  function _resetFilters() {
    filters.value = { keyword: "" };

    appList.value = _appListOriginal.value;
  }

  function _searchApp() {
    appList.value = _appListOriginal.value.filter((x) =>
      x.title.toLowerCase().includes(filters.value.keyword!.toLowerCase())
    );
  }

  return { appList, _appListOriginal, filters, getAppList, setFilters };
});
