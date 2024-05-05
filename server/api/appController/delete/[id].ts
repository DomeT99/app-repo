import { tryDeleteApp } from "~/server/service/appService";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  await tryDeleteApp(id!);
  return {
    data: true,
  };
});
