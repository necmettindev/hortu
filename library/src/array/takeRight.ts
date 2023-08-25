import { slice } from './slice.ts';

/**
 * Take the last n elements from an array.
 *
 * @param array - The array to query.
 * @param n - The number of elements to take from the end.
 *
 * @returns - Returns the sliced array.
 */
export function takeRight<T>(array: T[], n: number = 1): T[] {
  const length = array?.length || 0;

  if (!length) {
    return [];
  }

  const startIdx = Math.max(0, length - n);
  return slice(array, startIdx, length);
}
