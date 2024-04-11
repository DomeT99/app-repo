import { useAppStore } from "../appStore";
import { afterEach, expect, it, describe, vi } from "vitest";

describe("appStore tests", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const { appList, getAppList } = useAppStore();

  it("GET list from store it's ok", async () => {
    const mock = vi.fn().mockImplementation(getAppList);
    await mock();
    expect(appList).not.toBeUndefined();
    expect(appList).not.toBe([]);
  });
});