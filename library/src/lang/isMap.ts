const isMapAvailable = typeof Map === 'function' && Map.prototype;
const isSetAvailable = typeof Set === 'function' && Set.prototype;

/**
 * Checks if the given value is a Map object.
 * @param value - The value to check.
 * @returns Returns `true` if the value is a Map object, otherwise returns `false`.
 */
export function isMap(value: unknown): boolean {
  if (!isMapAvailable || !value || typeof value !== 'object') {
    return false;
  }

  if (isSetAvailable && value instanceof Set) {
    return false;
  }

  return value instanceof Map;
}
