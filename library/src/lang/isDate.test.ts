import { isDate } from './isDate.ts';
import { describe, test, expect } from 'vitest';

describe('isDate', () => {
  test('should return `true` for dates', () => {
    expect(isDate(new Date())).toBe(true);
  });

  test('should return `true` for non-dates only tag check', () => {
    expect(
      isDate(new Date('invalid'), {
        onlyTagCheck: true,
      })
    ).toBe(true);
  });

  test('should return `false` for string date', () => {
    expect(isDate('Mon April 23 2012')).toBe(false);
  });

  test('should return `false` for non-dates', () => {
    const nonDates = [
      undefined,
      null,
      true,
      false,
      1,
      0,
      NaN,
      Infinity,
      '',
      'abc',
      [],
      {},
      () => {},
      /./,
      new Error(),
      Symbol(''),
      1n,
      Object(1n),
    ];

    for (const value of nonDates) {
      expect(isDate(value)).toBe(false);
    }
  });
});
