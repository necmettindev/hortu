import { isObjectLike } from './isObjectLike.ts';

/**
 * Checks if the given value is a plain object.
 * @param value - The value to check.
 * @returns Returns `true` if the value is a plain object, otherwise returns `false`.
 */
export function isPlainObject(value: unknown): boolean {
  if (!isObjectLike(value) || typeof value !== 'object' || value === null) {
    return false;
  }

  if (Object.getPrototypeOf(value) === null) {
    return true;
  }

  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}
