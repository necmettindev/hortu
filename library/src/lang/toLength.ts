import { toInteger } from './toInteger.ts';

const MAX_ARRAY_LENGTH = 4294967295;

/**
 * Converts a value to a valid array-like length.
 *
 * @param value - The value to convert.
 * @returns Returns the converted length.
 */
export function toLength(value: any): number {
  if (!value) {
    return 0;
  }

  value = toInteger(value);

  if (isNaN(value) || value <= 0) {
    return 0;
  }

  if (value > MAX_ARRAY_LENGTH) {
    return MAX_ARRAY_LENGTH;
  }

  return value;
}
