/**
 * Casts a value to an array. If it's already an array, it returns the value.
 * If no arguments are provided, returns an empty array.
 *
 * @param value - The value to cast.
 * @returns The casted array.
 */
export function castArray<T>(value?: T | T[]): T[] {
  // If the value is not provided or is undefined, return an empty array.
  if (value === undefined) {
    return [];
  }

  // If the value is already an array, return it directly.
  if (Array.isArray(value)) {
    return value;
  }

  // Otherwise, convert the value to an array and return.
  return [value];
}
