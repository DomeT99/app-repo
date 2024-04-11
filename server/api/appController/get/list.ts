import { tryGetList } from "~/server/service/appService";

export default defineEventHandler(async (event) => {
  let response = await tryGetList();

  return {
    data: response,
  };
});
