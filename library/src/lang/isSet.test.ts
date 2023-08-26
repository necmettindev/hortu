import { isSet } from './isSet.ts';
import { test, describe, expect } from 'vitest';

describe('isSet', () => {
  test('should return `true` for set objects', () => {
    expect(isSet(new Set())).toBe(true);
  });

  test('should return `false` for non set objects', () => {
    expect(isSet(new Map())).toBe(false);
    expect(isSet(/x/)).toBe(false);
    expect(isSet(1)).toBe(false);
    expect(isSet('a')).toBe(false);
    expect(isSet(true)).toBe(false);
    expect(isSet(null)).toBe(false);
    expect(isSet(undefined)).toBe(false);
    expect(isSet([1, 2, 3])).toBe(false);
    expect(isSet(new Date())).toBe(false);
    expect(isSet(new Error())).toBe(false);
    expect(isSet(Array.prototype.slice)).toBe(false);
    expect(isSet({ a: 1 }.hasOwnProperty)).toBe(false);
  });
});
