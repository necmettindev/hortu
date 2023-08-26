import { isPlainObject } from './isPlainObject.ts';
import { test, describe, expect } from 'vitest';

describe('isPlainObject', () => {
  test('should return `true` for plain objects', () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ a: 1 })).toBe(true);
    expect(isPlainObject({ constructor: Object })).toBe(true);
    expect(isPlainObject(Object.create(null))).toBe(true);
  });

  test('should return `false` for non plain objects', () => {
    expect(isPlainObject(/x/)).toBe(false);
    expect(isPlainObject(1)).toBe(false);
    expect(isPlainObject('a')).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(null)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject([1, 2, 3])).toBe(false);
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(new Error())).toBe(false);
    expect(isPlainObject(Array.prototype.slice)).toBe(false);
    expect(isPlainObject({ a: 1 }.hasOwnProperty)).toBe(false);
    expect(isPlainObject(document.body)).toBe(false);
  });
});
