export function openLink(url: string) {
  window.open(url, "_blank");
}

export function isEmptyObject<T>(value: T): boolean {
  if (Object.keys(value!).length === 0) {
    return true;
  }
  return false;
}
