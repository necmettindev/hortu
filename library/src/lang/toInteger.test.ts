import { toInteger } from './toInteger.ts';
import { describe, test, expect } from 'vitest';

describe('toInteger', () => {
  test('if value is number, return number', () => {
    expect(toInteger(1)).toBe(1);
  });

  test('if value is string, return number', () => {
    expect(toInteger('1')).toBe(1);
  });

  test('if value is boolean, return number', () => {
    expect(toInteger(true)).toBe(1);
  });

  test('if value is symbol, return 0', () => {
    expect(toInteger(Symbol('a'))).toBe(0);
  });

  test('if value is null, return 0', () => {
    expect(toInteger(null)).toBe(0);
  });

  test('if value is undefined, return 0', () => {
    expect(toInteger(undefined)).toBe(0);
  });

  test('if value is object, return 0', () => {
    expect(toInteger({})).toBe(0);
  });

  test('if value is function, return 0', () => {
    expect(toInteger(() => {})).toBe(0);
  });

  test('if value is array, return 0', () => {
    expect(toInteger([])).toBe(0);
  });

  test('if value is regexp, return 0', () => {
    expect(toInteger(/a/)).toBe(0);
  });

  test('if value is date, return 0', () => {
    expect(toInteger(new Date(0))).toBe(0);
  });

  test('if value is error, return 0', () => {
    expect(toInteger(new Error())).toBe(0);
  });

  test('if value is binary, return number', () => {
    expect(toInteger('0b1')).toBe(1);
  });

  test('if value is octal, return number', () => {
    expect(toInteger('0o1')).toBe(1);
  });

  test('if value is float, return number', () => {
    expect(toInteger(1.1)).toBe(1);
  });

  test('if value is negative float, return number', () => {
    expect(toInteger(-1.1)).toBe(-1);
  });
});
