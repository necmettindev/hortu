/**
 * Checks if the provided value is an object or a function.
 *
 * @param value - The value to check.
 * @returns Returns `true` if `value` is an object or a function, else `false`.
 */
export function isObjectLike(value: any): boolean {
  if (value == null) return false;

  return typeof value === 'object';
}
