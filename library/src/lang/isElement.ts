/**
 * Checks if the given value is an element object.
 * @param value - The value to check.
 * @returns Returns `true` if the value is an element object, otherwise returns `false`.
 */
export function isElement(value: unknown): boolean {
  return value instanceof Element;
}
