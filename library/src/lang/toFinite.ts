import { toNumber } from './toNumber.ts';

const INFINITY: number = 1 / 0;
const MAX_INTEGER: number = 1.7976931348623157e308;

/**
 * Converts a value to a finite number.
 *
 * @param value - The value to convert.
 * @returns Returns the converted finite number.
 */
export function toFinite(value: any): number {
  if (!value) {
    return 0;
  }

  value = toNumber(value);

  if (value === INFINITY) {
    return MAX_INTEGER;
  }
  if (value === -INFINITY) {
    return -MAX_INTEGER;
  }

  return isNaN(value) ? 0 : value;
}
