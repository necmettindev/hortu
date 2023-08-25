import { describe, expect, test } from 'vitest';
import { castArray } from './castArray';

describe('castArray', () => {
  test('if value is null, return null array', () => {
    expect(castArray(null)).toEqual([null]);
  });

  test('if there is no value, return empty array', () => {
    expect(castArray()).toEqual([]);
  });

  test('if value is array, return array', () => {
    expect(castArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('if value is object, return array with object value', () => {
    expect(castArray({ a: 1 })).toEqual([{ a: 1 }]);
  });

  test('if value is number, return array with number value', () => {
    expect(castArray(1)).toEqual([1]);
  });

  test('if value is string, return array with string value', () => {
    expect(castArray('a')).toEqual(['a']);
  });
});
