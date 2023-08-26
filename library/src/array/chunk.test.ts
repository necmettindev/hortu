import { chunk } from './chunk.ts';
import { test, describe, expect } from 'vitest';

describe('chunk', () => {
  test('should return chunked arrays', () => {
    expect(chunk([1, 2, 3, 4])).toEqual([[1], [2], [3], [4]]);
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
    expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
  });

  test('should return the last chunk as remaining elements', () => {
    expect(chunk([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]]);
  });

  test('should return an empty array when provided `null` or `undefined`', () => {
    const falsyValues = [null, undefined] as any[];
    for (const value of falsyValues) {
      expect(chunk(value)).toEqual([]);
      expect(chunk(value, 1)).toEqual([]);
    }
  });

  test('should work as an iteratee for methods like `_.map`', () => {
    const array = [
      [1, 2],
      [3, 4],
    ];
    const actual = [[[1, 2]], [[3, 4]]];

    expect(array.map((value) => chunk(value, 2, true))).toEqual(actual);
  });
});
