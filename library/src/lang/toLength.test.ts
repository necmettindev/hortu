import { describe, expect, test } from 'vitest';
import { toLength } from './toLength.ts';

describe('toLength', () => {
  test('if value is number, return number', () => {
    expect(toLength(1)).toBe(1);
  });

  test('if value is string, return number', () => {
    expect(toLength('1')).toBe(1);
  });

  test('if value is boolean, return number', () => {
    expect(toLength(true)).toBe(1);
  });

  test('if value is symbol, return 0', () => {
    expect(toLength(Symbol('a'))).toBe(0);
  });

  test('if value is null, return 0', () => {
    expect(toLength(null)).toBe(0);
  });

  test('if value is undefined, return 0', () => {
    expect(toLength(undefined)).toBe(0);
  });

  test('if value is object, return 0', () => {
    expect(toLength({})).toBe(0);
  });

  test('if value is function, return 0', () => {
    expect(toLength(() => {})).toBe(0);
  });

  test('if value is array, return 0', () => {
    expect(toLength([])).toBe(0);
  });

  test('if value is regexp, return 0', () => {
    expect(toLength(/a/)).toBe(0);
  });

  test('if value is date, return 0', () => {
    expect(toLength(new Date(0))).toBe(0);
  });

  test('if value is error, return 0', () => {
    expect(toLength(new Error())).toBe(0);
  });

  test('if value is binary, return number', () => {
    expect(toLength('0b1')).toBe(1);
  });

  test('if value is octal, return number', () => {
    expect(toLength('0o1')).toBe(1);
  });

  test('if value is number array, return number', () => {
    expect(toLength([1])).toBe(1);
  });

  test('if array length is bigger then max length array, return max length array value', () => {
    expect(toLength(4294967296)).toBe(4294967295);
  });
});
