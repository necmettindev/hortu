import { describe, expect, test } from 'vitest';
import { toSafeInteger } from './toSafeInteger.ts';

describe('toSafeInteger', () => {
  test('if value is number, return number', () => {
    expect(toSafeInteger(1)).toBe(1);
  });

  test('if value is string, return number', () => {
    expect(toSafeInteger('1')).toBe(1);
  });

  test('if value is boolean, return number', () => {
    expect(toSafeInteger(true)).toBe(1);
  });

  test('if value is symbol, return 0', () => {
    expect(toSafeInteger(Symbol('a'))).toBe(0);
  });

  test('if value is null, return 0', () => {
    expect(toSafeInteger(null)).toBe(0);
  });

  test('if value is undefined, return 0', () => {
    expect(toSafeInteger(undefined)).toBe(0);
  });

  test('if value is object, return 0', () => {
    expect(toSafeInteger({})).toBe(0);
  });

  test('if value is function, return 0', () => {
    expect(toSafeInteger(() => {})).toBe(0);
  });

  test('if value is array, return 0', () => {
    expect(toSafeInteger([])).toBe(0);
  });

  test('if value is regexp, return 0', () => {
    expect(toSafeInteger(/a/)).toBe(0);
  });

  test('if value is date, return 0', () => {
    expect(toSafeInteger(new Date(0))).toBe(0);
  });

  test('if value is error, return 0', () => {
    expect(toSafeInteger(new Error())).toBe(0);
  });

  test('if value is binary, return number', () => {
    expect(toSafeInteger('0b1')).toBe(1);
  });

  test('if value is octal, return number', () => {
    expect(toSafeInteger('0o1')).toBe(1);
  });

  test('if value is number array, return number', () => {
    expect(toSafeInteger([1, 2])).toBe(0);
  });
});
