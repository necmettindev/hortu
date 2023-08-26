import { compact } from './compact.ts';
import { test, describe, expect } from 'vitest';

describe('compact', () => {
  test('should return an empty array when provided `null` or `undefined`', () => {
    const falsyValues = [null, undefined] as any[];
    for (const value of falsyValues) {
      expect(compact(value)).toEqual([]);
    }
  });

  test('should return an empty array when provided an empty array', () => {
    expect(compact([])).toEqual([]);
  });

  test('should return an array with truthy values', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  });

  test('should filter out falsy values', () => {
    expect(compact([0, 1, false, 2, '', 3, null, undefined, NaN])).toEqual([
      1, 2, 3,
    ]);
  });
});
