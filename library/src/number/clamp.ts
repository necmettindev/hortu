/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @param {number} number - The number to clamp.
 * @param {number} lower - The lower bound.
 * @param {number} upper - The upper bound.
 * @returns {number} Returns the clamped number.
 */
export function clamp(number: number, lower: number, upper: number): number {
  const realNumber = +number || 0;
  const realLower = +lower || 0;
  const realUpper = +upper || 0;

  return Math.min(Math.max(realNumber, realLower), realUpper);
}
