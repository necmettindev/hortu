import { isMap } from './isMap.ts';
import { test, describe, expect } from 'vitest';

describe('isMap', () => {
  test('should return `true` for map objects', () => {
    expect(isMap(new Map())).toBe(true);
  });

  test('should return `false` for non map objects', () => {
    expect(isMap(new Set())).toBe(false);
    expect(isMap(/x/)).toBe(false);
    expect(isMap(1)).toBe(false);
    expect(isMap('a')).toBe(false);
    expect(isMap(true)).toBe(false);
    expect(isMap(null)).toBe(false);
    expect(isMap(undefined)).toBe(false);
    expect(isMap([1, 2, 3])).toBe(false);
    expect(isMap(new Date())).toBe(false);
    expect(isMap(new Error())).toBe(false);
    expect(isMap(Array.prototype.slice)).toBe(false);
    expect(isMap({ a: 1 }.hasOwnProperty)).toBe(false);
  });
});
