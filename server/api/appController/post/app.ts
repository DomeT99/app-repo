import { tryAddApp } from "~/server/service/appService";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const result = await tryAddApp(body);

  return {
    data: result,
  };
});
