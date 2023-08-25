const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
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
    return NaN;
  }

  value = getCoercedValue(value);

  if (getTag(value) === '[object BigInt]') {
    throw new Error('Cannot convert a BigInt value to a number');
  }

  return typeof value === 'string'
    ? handleStringValue(value)
    : handleNonStringValue(value);
}

function getCoercedValue(value: any): any {
  if (isObject(value)) {
    const other = typeof value.valueOf === 'function' ? value.valueOf() : value;
    return isObject(other) ? `${other}` : other;
  }
  return value;
}

function handleStringValue(value: string): number {
  value = value.trim();

  const isBinary = reIsBinary.test(value);
  if (isBinary || reIsOctal.test(value)) {
    return freeParseInt(value.slice(2), isBinary ? 2 : 8);
  }

  if (reIsBadHex.test(value)) {
    return NaN;
  }

  return +value;
}

function handleNonStringValue(value: any): number {
  return value === 0 ? value : +value;
}
