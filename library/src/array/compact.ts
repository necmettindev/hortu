/**
 * Filters out the falsy values from an array. This includes values like `false`, `0`, `""`, `null`,
 * `undefined`, and `NaN`.
 *
 * @param array The array to compact
 * @returns A new array with only truthy values.
 */
export function compact(array: any[] = []): any[] {
  if (!array || array?.length === 0) return [];
  return array?.filter((value) => Boolean(value));
}
