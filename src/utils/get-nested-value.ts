export function getNestedValue(obj: object, path: string) {
  const keys = path.split('.');
  let result = obj;

  for (const key of keys) {
    result = result?.[key];
    if (result === undefined) {
      return undefined; // If any part of the path is undefined, return undefined
    }
  }

  return result;
}
