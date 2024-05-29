import { tryDeleteApp } from "~/server/service/appService";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  let result = await tryDeleteApp(id!);
  return {
    data: result,
  };
});
