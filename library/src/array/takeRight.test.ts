import { takeRight } from './takeRight.ts';
import { describe, expect, test } from 'vitest';

describe('takeRight', () => {
  test('if array is empty, return empty array', () => {
    expect(takeRight([])).toEqual([]);
  });

  test('if array is not empty, return last element', () => {
    expect(takeRight([1])).toEqual([1]);
  });

  test('if array is not empty and take is empty return last two elements', () => {
    expect(takeRight([1, 2, 3])).toEqual([3]);
  });

  test('if array is not empty and take is 2, return last two elements', () => {
    expect(takeRight([1, 2, 3], 2)).toEqual([2, 3]);
  });

  test('if array is not empty and take is 5, return all elements', () => {
    expect(takeRight([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test('if array is not empty and take is -1, return blank []', () => {
    expect(takeRight([1, 2, 3], -1)).toEqual([]);
  });
});
