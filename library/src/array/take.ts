import { slice } from './slice.ts';

/**
 * Take the first n elements from an array.
 *
 * @param array - The array to query.
 * @param n - The number of elements to take.
 *
 * @returns - Returns the sliced array.
 */
export function take<T>(array: T[], n: number = 1): T[] {
  if (!array?.length) {
    return [];
  }

  return slice(array, 0, n < 0 ? 0 : n);
}
