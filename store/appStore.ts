import { defineStore } from "pinia";
import type { Card } from "~/types/components";
import type { Filter } from "~/types/store";
import { isUndefined, isEmptyString } from "~/utils/utility";

export const useAppStore = defineStore("app", () => {
  let _appListOriginal = ref<Card[]>([]);
  let appList = ref<Card[]>([]);
  let filters = ref<Filter>({ keyword: "", platforms: [] });

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

    // if (!isUndefined(filter.platforms) && !isEmptyArray(filter.platforms!)) {
    //   filter.platforms?.forEach((x) => {
    //     if (!filters.value.platforms?.includes(x.value)) {
    //       filters.value.platforms?.push(x.value);
    //     }
    //   });
    // }

    if (!isEmptyString(filters.value.keyword!)) {
      _searchApp();
    } else {
      _resetFilters();
    }
  }

  function _resetFilters() {
    filters.value = { keyword: "", platforms: [] };

    appList.value = _appListOriginal.value;
  }

  function _searchApp() {
    if (
      !isEmptyString(filters.value.keyword!) &&
      !isUndefined(filters.value.keyword)
    ) {
      appList.value = _appListOriginal.value.filter((x) =>
        x.title.toLowerCase().includes(filters.value.keyword!.toLowerCase())
      );
    } else {
      appList.value = _appListOriginal.value.filter(
        (x) =>
          x.title
            .toLowerCase()
            .includes(filters.value.keyword!.toLowerCase()) &&
          x.platforms.some((y: string) => filters.value.platforms!.includes(y))
      );
    }

    // else if (
    //   !isUndefined(filters.value.platforms) &&
    //   !isEmptyArray(filters.value.platforms!)
    // ) {
    //   appList.value = _appListOriginal.value.filter((x) =>
    //     x.platforms.some((y: string) => filters.value.platforms!.includes(y))
    //   );
    // }
  }

  return { appList, _appListOriginal, filters, getAppList, setFilters };
});
