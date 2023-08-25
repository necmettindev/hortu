/**
 * Checks if the provided value is null.
 *
 * @param value - The value to check.
 * @returns Returns true if the value is null, otherwise false.
 */
export function isNull(value: any): value is null {
  return value === null;
}

export const isNil = isNull;
