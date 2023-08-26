import { isElement } from './isElement.ts';
import { test, describe, expect } from 'vitest';

describe('isElement', () => {
  test('should return `true` for pure html object', () => {
    expect(isElement(document.createElement('div'))).toBe(true);
  });

  test('should return `true` for element objects', () => {
    expect(isElement(document.body)).toBe(true);
  });

  test('should return `false` for non element objects', () => {
    expect(isElement(/x/)).toBe(false);
    expect(isElement(1)).toBe(false);
    expect(isElement('a')).toBe(false);
    expect(isElement(true)).toBe(false);
    expect(isElement(null)).toBe(false);
    expect(isElement(undefined)).toBe(false);
    expect(isElement([1, 2, 3])).toBe(false);
    expect(isElement(new Date())).toBe(false);
    expect(isElement(new Error())).toBe(false);
    expect(isElement(Array.prototype.slice)).toBe(false);
    expect(isElement({ a: 1 }.hasOwnProperty)).toBe(false);
  });
});
