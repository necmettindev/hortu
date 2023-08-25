/**
 * Checks if the provided value is an object or a function.
 *
 * @param value - The value to check.
 * @returns Returns `true` if `value` is an object or a function, else `false`.
 */
export function isObject(value: any): boolean {
  if (value == null) return false;

  const type = typeof value;
  return type === 'object' || type === 'function';
}
