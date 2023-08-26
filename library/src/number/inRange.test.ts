import { inRange } from './inRange.ts';
import { describe, test, expect } from 'vitest';

describe('inRange', () => {
  test('should return `true` when `number` is in the range', () => {
    expect(inRange(3, 2, 4)).toBe(true);
    expect(inRange(4, 8)).toBe(true);
    expect(inRange(2, 2)).toBe(false);
    expect(inRange(1.2, 2)).toBe(true);
    expect(inRange(5.2, 4)).toBe(false);
    expect(inRange(-3, -2, -6)).toBe(true);
  });

  test('should work with a `start` greater than `end`', () => {
    expect(inRange(1, 2, 0)).toBe(true);
    expect(inRange(-3, -2, -6)).toBe(true);
  });

  test('should treat falsey `start` arguments as `0`', () => {
    expect(inRange(-1, NaN, 1)).toBe(false);
    expect(inRange(0, NaN, 1)).toBe(false);
    expect(inRange(1, NaN, 1)).toBe(false);
  });

  test('should treat falsey `end` arguments as `start`', () => {
    expect(inRange(-1, 0, NaN)).toBe(false);
    expect(inRange(0, 0, NaN)).toBe(false);
    expect(inRange(1, 0, NaN)).toBe(false);
  });
});
