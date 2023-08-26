import { toFinite } from '../lang/toFinite.ts';

/**
 * Generates a random number between lower and upper bounds.
 *
 * @param lower - The lower bound.
 * @param upper - The upper bound.
 * @param floating - Whether the result should be floating or not.
 * @returns Returns a random number between the bounds.
 */
export function random(
  lower: number | boolean = 0,
  upper: number | boolean = 1,
  floating: boolean = false
): number {
  if (typeof lower === 'boolean' || typeof upper === 'boolean') {
    [floating, lower, upper] = [lower === true || upper === true, 0, 1];
  }
  if (isNaN(lower) || isNaN(upper)) {
    return NaN;
  }

  lower = toFinite(+lower);
  upper = toFinite(+upper);

  const lowerBound = Math.min(lower, upper);
  const upperBound = Math.max(lower, upper);

  if (floating || lowerBound % 1 || upperBound % 1) {
    const rand = Math.random();
    return (
      lowerBound +
      rand *
        (upperBound - lowerBound + parseFloat(`1e-${`${rand}`.length - 1}`))
    );
  }
  return lowerBound + Math.floor(Math.random() * (upperBound - lowerBound + 1));
}
