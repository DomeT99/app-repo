import { tryEditAppStatus } from "~/server/service/appService";
import { App } from "~/types/generic";

export default defineEventHandler(async (event) => {
  return {
    data: null,
  };
});
