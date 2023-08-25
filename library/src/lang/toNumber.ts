const NAN: number = 0 / 0;
const reIsBadHex = /^[-+](0x|0X)[0-9a-fA-F]+$/;
const reIsBinary = /^0b[01]+$/i;
const reIsOctal = /^0o[0-7]+$/i;
const freeParseInt = parseInt;

import { isSymbol } from './isSymbol.ts';
import { isObject } from './isObject.ts';
import { getTag } from './getTag.ts';

/**
 * Converts a value to a number.
 *
 * @param value - The value to convert.
 * @returns Returns the converted number or NaN.
 */
export function toNumber(value: any): number {
  if (typeof value === 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    const other = typeof value.valueOf === 'function' ? value.valueOf() : value;
    value = isObject(other) ? `${other}` : other;
  }

  if (getTag(value) === '[object BigInt]') {
    throw new Error('Cannot convert a BigInt value to a number');
  }

  if (typeof value !== 'string') {
    return value === 0 ? value : +value;
  }

  value = value.trim();

  const isBinary = reIsBinary.test(value);
  if (isBinary || reIsOctal.test(value)) {
    return freeParseInt(value.slice(2), isBinary ? 2 : 8);
  }

  return reIsBadHex.test(value) ? NAN : +value;
}
