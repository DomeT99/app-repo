import type { FirebaseError } from "~/types/error";
export function handleResult(data: any, error: any) {
  if (!error.value) {
    return data;
  } else {
    _handleError({
      statusCode: error.value.statusCode,
      statusMessage: error.value.statusMessage,
    });
  }
}

function _handleError(error: FirebaseError) {
  throw showError({
    statusCode: error.statusCode,
    statusMessage: error.statusMessage,
  });
}
