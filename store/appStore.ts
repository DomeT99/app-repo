import { defineStore } from "pinia";
import type { Card } from "~/types/components";
import type { Filter } from "~/types/store";
import { isUndefined, isEmptyString, isEmptyObject } from "~/utils/utility";

export const useAppStore = defineStore("app", () => {
  let _appListOriginal = ref<Card[]>([]);
  let appList = ref<Card[]>([]);
  let filters = ref<Filter>({ keyword: "" });
  let currentApp = ref<Card>({} as Card);
  let currentAppOriginal = ref<Card>({} as Card);

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

  async function addApp() {
    try {
      currentAppOriginal.value = {
        ...currentApp.value,
        platforms: _setPlatformsKey(currentApp.value.platforms),
      };

      const { data } = await useFetch("/api/appController/post/app", {
        method: "POST",
        body: currentAppOriginal.value,
      });

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteApp() {
    try {
      const { data } = await useFetch(
        `/api/appController/delete/${currentApp.value.id}`,
        {
          method: "DELETE",
        }
      );

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async function editApp() {
    try {
      currentAppOriginal.value = {
        ...currentApp.value,
        platforms: _setPlatformsKey(currentApp.value.platforms),
      };

      const { data } = await useFetch("/api/appController/put/app", {
        method: "PUT",
        body: currentAppOriginal.value,
      });

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  function setCurrentApp(app: Card) {
    if (isEmptyObject(app)) {
      currentApp.value = app;
      return;
    }

    currentApp.value = {
      ...app,
      platforms: _setPlatformsValue(app),
    };
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

  function resetState() {
    filters.value = { keyword: "" };
    appList.value = [];
    _appListOriginal.value = [];
    currentApp.value = {} as Card;
    currentAppOriginal.value = {} as Card;
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

  function _setPlatformsKey(currentPlatforms?: any) {
    let platforms: string[] = [];

    currentPlatforms.map((platform: any) => platforms.push(platform.key));

    return platforms;
  }

  function _setPlatformsValue(app: Card) {
    let platforms: any[] = [];

    app.platforms.map((platform: any) => {
      let platformObj = {
        key: platform,
        value: platform,
      };

      platforms.push(platformObj);
    });

    return platforms;
  }

  return {
    appList,
    _appListOriginal,
    filters,
    currentApp, 
    getAppList,
    deleteApp,
    setFilters,
    setCurrentApp,
    resetState,
    addApp,
    editApp,
  };
});
