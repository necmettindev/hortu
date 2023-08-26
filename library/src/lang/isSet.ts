const isMapAvailable = typeof Map === 'function' && Map.prototype;
const isSetAvailable = typeof Set === 'function' && Set.prototype;

/**
 * Checks if the given value is a Set object.
 * @param value - The value to check.
 * @returns Returns `true` if the value is a Set object, otherwise returns `false`.
 */
export function isSet(value: unknown): boolean {
  if (!isSetAvailable || !value || typeof value !== 'object') {
    return false;
  }

  if (isMapAvailable && value instanceof Map) {
    return false;
  }

  return value instanceof Set;
}
