import { getTag } from './getTag.ts';
import { isObjectLike } from './isObjectLike.ts';

type IsDateOptions = {
  onlyTagCheck: boolean;
};

/**
 * Checks if the given value is a date object.
 *
 * @param value - The value to check.
 * @returns Returns `true` if the value is a date object, otherwise returns `false`.
 */
export function isDate(value: unknown, options?: IsDateOptions): boolean {
  const { onlyTagCheck = false } = options ?? {};
  if (!isObjectLike(value)) {
    return false;
  }

  if (typeof Symbol === 'function' && Symbol.toStringTag && !onlyTagCheck) {
    try {
      return !isNaN((value as Date).getTime());
    } catch {
      return false;
    }
  }

  return getTag(value) === '[object Date]';
}
