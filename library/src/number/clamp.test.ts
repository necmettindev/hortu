import { clamp } from './clamp.ts';
import { describe, test, expect } from 'vitest';

describe('clamp', () => {
  test('should clamp number within given bounds', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(10, -5, 5)).toBe(5);
  });

  test('should clamp number to lower bound', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(-10, 5, 10)).toBe(5);
  });

  test('should clamp number to upper bound', () => {
    expect(clamp(10, -5, 5)).toBe(5);
    expect(clamp(10, 5, 10)).toBe(10);
  });

  test('should not alter negative zero', () => {
    expect(1 / clamp(-0, -5, 5)).toBe(Infinity);
  });

  test('should clamp to `0` as `lower` and `upper` bounds', () => {
    expect(1 / clamp(-10, 0, 0)).toBe(Infinity);
  });

  test('should not alter NaN values', () => {
    expect(isNaN(clamp(NaN, -5, 5))).toBe(false);
  });
});
