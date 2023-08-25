import { toFinite } from './toFinite.ts';

/**
 * Converts a value to an integer by truncating the fractional part.
 *
 * @param value - The value to convert.
 * @returns Returns the converted integer.
 */
export function toInteger(value: any): number {
  const numberValue = toFinite(value);
  if (numberValue === 0 || isNaN(numberValue)) {
    return 0;
  }

  const fractionalPart = numberValue % 1;

  return fractionalPart ? numberValue - fractionalPart : numberValue;
}
