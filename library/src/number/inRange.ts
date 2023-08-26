/**
 * Checks if `number` is between `start` and up to, but not including, `end`.
 * If `end` is not specified, it's set to `start` with `start` then set to `0`.
 *
 * @param number - The number to check.
 * @param start - The start of the range.
 * @param end - The end of the range.
 * @returns Returns `true` if `number` is in the range, else `false`.
 */
export function inRange(
  number: number,
  start: number = 0,
  end: number = start
): boolean {
  if (isNaN(end)) {
    return false;
  }

  if (start === end) {
    [start, end] = [0, start];
  }

  return number >= Math.min(start, end) && number < Math.max(start, end);
}
