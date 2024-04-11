import { tryGetList } from "../service/appService";
import { afterEach, expect, it, describe, vi } from "vitest";

describe("appService tests", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("GET it's ok", async () => {
    const mock = vi.fn().mockImplementation(tryGetList);
    expect(await mock()).not.toBeUndefined();
  });
});
