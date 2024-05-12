export function openLink(url: string) {
  window.open(url, "_blank");
}

export function isUndefined<T>(value: T): boolean {
  if (value === undefined || value === null) {
    return true;
  }
  return false;
}

export function isNull<T>(value: T): boolean {
  if (value === null) {
    return true;
  }
  return false;
}

export function isEmptyString(value: string): boolean {
  if (value === "") {
    return true;
  }
  return false;
}

export function isEmptyArray<T>(value: T[]): boolean {
  if (value.length === 0) {
    return true;
  }
  return false;
}

export function isEmptyObject<T>(value: T): boolean {
  if (Object.keys(value!).length === 0) {
    return true;
  }
  return false;
}
