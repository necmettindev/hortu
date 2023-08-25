const toString = Object.prototype.toString;

/**
 * Gets the string representation of the value's type.
 *
 * @param value - The value to get the type of.
 * @returns Returns the string representation of the type.
 */
export function getTag(value: any): string {
  // Directly checking for undefined or null.
  if (value === undefined) {
    return '[object Undefined]';
  }
  if (value === null) {
    return '[object Null]';
  }

  // Use the cached toString to get the type tag.
  return toString.call(value);
}
