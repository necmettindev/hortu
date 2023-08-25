import { getTag } from './getTag.ts';

/**
 * Checks if the provided value is a symbol or a boxed symbol object.
 *
 * @param value - The value to check.
 * @returns Returns `true` if `value` is a symbol or a boxed symbol object, else `false`.
 */
export function isSymbol(value: any): boolean {
  // Directly checking for a symbol type.
  if (typeof value === 'symbol') {
    return true;
  }

  // Further check for boxed symbol objects.
  return (
    typeof value === 'object' &&
    value !== null &&
    getTag(value) === '[object Symbol]'
  );
}
