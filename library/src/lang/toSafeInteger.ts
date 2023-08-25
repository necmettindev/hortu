import { toInteger } from './toInteger.ts';

/**
 * Converts a value to a safe integer.
 * A safe integer is an integer that can be accurately represented in JavaScript.
 *
 * @param value - The value to convert.
 * @returns Returns the converted safe integer.
 */
export function toSafeInteger(value: any): number {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toInteger(value);
  if (value <= -Number.MAX_SAFE_INTEGER) {
    return -Number.MAX_SAFE_INTEGER;
  }
  if (value >= Number.MAX_SAFE_INTEGER) {
    return Number.MAX_SAFE_INTEGER;
  }
  return value;
}
