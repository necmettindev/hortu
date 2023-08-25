import { slice } from './slice.ts';
import { describe, expect, test } from 'vitest';

describe('slice', () => {
  test('if array is empty, return empty array', () => {
    expect(slice([])).toEqual([]);
  });

  test('if array is not empty, return array', () => {
    expect(slice([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('if start is negative, return array', () => {
    expect(slice([1, 2, 3], -1)).toEqual([3]);
  });

  test('if start is greater than array length, return empty array', () => {
    expect(slice([1, 2, 3], 4)).toEqual([]);
  });

  test('if start is greater than end, return empty array', () => {
    expect(slice([1, 2, 3], 2, 1)).toEqual([]);
  });

  test('if end is negative, return array', () => {
    expect(slice([1, 2, 3], 0, -1)).toEqual([1, 2]);
  });

  test('if end is greater than array length, return array', () => {
    expect(slice([1, 2, 3], 0, 4)).toEqual([1, 2, 3]);
  });

  test('if start and end are negative, return array', () => {
    expect(slice([1, 2, 3], -2, -1)).toEqual([2]);
  });

  test('should return empty array for null input', () => {
    expect(slice(null as unknown as [])).toEqual([]);
  });

  test('should handle negative start values less than negative length', () => {
    expect(slice([1, 2, 3], -4)).toEqual([1, 2, 3]);
  });
});
