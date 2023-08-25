/**
 * Slices `array` from `start` up to, but not including, `end`.
 *
 * @param array - The array to slice.
 * @param start - The start position.
 * @param end - The end position.
 * @returns Returns the slice of `array`.
 */
export function slice<T>(
  array: T[],
  start: number = 0,
  end: number = array.length
): T[] {
  const length = array ? array.length : 0;

  if (!length) {
    return [];
  }

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }

  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  const resultLength = start > end ? 0 : end - start;
  const result = new Array(resultLength);

  for (let index = 0; index < resultLength; index++) {
    result[index] = array[index + start];
  }

  return result;
}
