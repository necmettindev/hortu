import { take } from './take.ts';
import { describe, expect, test } from 'vitest';

describe('take', () => {
  test('if array is empty, return empty array', () => {
    expect(take([])).toEqual([]);
  });

  test('if array is not empty, return first element', () => {
    expect(take([1])).toEqual([1]);
  });

  test('if array is not empty and take is empty return first two elements', () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });

  test('if array is not empty and take is 2, return first two elements', () => {
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
  });

  test('if array is not empty and take is 5, return all elementss', () => {
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test('if array is not empty and take is -1, return blank []', () => {
    expect(take([1, 2, 3], -1)).toEqual([]);
  });
});
