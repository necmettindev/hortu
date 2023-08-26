import { random } from './random.ts';
import { describe, test, expect } from 'vitest';

describe('random', () => {
  test('should return a number between the given bounds', () => {
    const actual = random(5, 10);
    expect(actual).toBeGreaterThanOrEqual(5);
    expect(actual).toBeLessThanOrEqual(10);
  });

  test('should return a floating point number when `floating` is true', () => {
    const actual = random(5, 10, true);
    expect(actual).toBeGreaterThanOrEqual(5);
    expect(actual).toBeLessThanOrEqual(10);
    expect(actual % 1).not.toBe(0);
  });

  test('should return an integer when `floating` is false', () => {
    const actual = random(5, 10, false);
    expect(actual).toBeGreaterThanOrEqual(5);
    expect(actual).toBeLessThanOrEqual(10);
    expect(actual % 1).toBe(0);
  });

  test('should return a random number between 0 and 1 when no arguments are given', () => {
    const actual = random();
    expect(actual).toBeGreaterThanOrEqual(0);
    expect(actual).toBeLessThanOrEqual(1);
  });

  test('should return `NaN` when at least one of the given bounds is `NaN`', () => {
    expect(random(NaN, 10)).toBeNaN();
    expect(random(0, NaN)).toBeNaN();
  });

  test('should swap `lower` and `upper` when `lower` > `upper`', () => {
    const actual = random(10, 5);
    expect(actual).toBeGreaterThanOrEqual(5);
    expect(actual).toBeLessThanOrEqual(10);
  });

  test('should return a random number between 0 and 1 when both bounds are booleans', () => {
    const result = random(true, true);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1);
  });

  test('should return a random integer between 0 and the provided upper bound when only upper is a boolean (true)', () => {
    const upperBound = 5;
    const result = random(upperBound, true);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(upperBound);
  });
});
