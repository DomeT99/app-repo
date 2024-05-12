import { tryEditApp } from "~/server/service/appService";
import { App } from "~/types/generic";

export default defineEventHandler(async (event) => {
  const body = await readBody(event) as App;
  const result = await tryEditApp(body);

  return {
    data: result,
  };
});
