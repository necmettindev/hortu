import { toInteger } from '../lang/toInteger.ts';
import { slice } from './slice.ts';

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 * @param array The array to process
 * @param size The length of each chunk
 * @param removeEmptyArrays Remove empty arrays from the result
 * Returns the new array of chunks.
 */
export function chunk(
  array: any[] = [],
  size: number = 1,
  removeEmptyArrays: boolean = false
): any[][] {
  size = Math.max(toInteger(size), 0);
  const length = array?.length;

  if (!length || size < 1) {
    return [];
  }

  const result: any[][] = [];
  for (let index = 0; index < length; index += size) {
    const chunk = slice(array, index, index + size);
    if (!removeEmptyArrays || chunk.length > 0) {
      result.push(chunk);
    }
  }

  return result;
}
