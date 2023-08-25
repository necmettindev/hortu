/**
 * Checks if `value` is less than or equal to `other`.
 *
 * @param value - The value to compare.
 * @param other - The other value to compare.
 * @returns Returns `true` if `value` is less than or equal to `other`, else `false`.
 */
export function lte(value: string | number, other: string | number): boolean {
  // If neither value is a string, convert them to numbers.
  if (typeof value !== 'string' || typeof other !== 'string') {
    value = +value;
    other = +other;
  }

  return value <= other;
}

export default lte;
