import { describe, expect, test } from 'vitest';
import { isNull, isNil } from './isNull.ts';

describe('isNull', () => {
  test('if value is null, return true', () => {
    expect(isNull(null)).toBe(true);
  });

  test('if value is undefined, return false', () => {
    expect(isNull(undefined)).toBe(false);
  });

  test('if value is object, return false', () => {
    expect(isNull({})).toBe(false);
  });

  test('if value is function, return false', () => {
    expect(isNull(() => {})).toBe(false);
  });

  test('if value is number, return false', () => {
    expect(isNull(1)).toBe(false);
  });

  test('if value is string, return false', () => {
    expect(isNull('a')).toBe(false);
  });

  test('if value is boolean, return false', () => {
    expect(isNull(true)).toBe(false);
  });

  test('if value is symbol, return false', () => {
    expect(isNull(Symbol('a'))).toBe(false);
  });

  test('if value is bigint, return false', () => {
    expect(isNull(BigInt(1))).toBe(false);
  });

  test('if value is array, return false', () => {
    expect(isNull([])).toBe(false);
  });

  test('if value is date, return false', () => {
    expect(isNull(new Date())).toBe(false);
  });

  test('if value is regexp, return false', () => {
    expect(isNull(/a/)).toBe(false);
  });

  test('if value is error, return false', () => {
    expect(isNull(new Error())).toBe(false);
  });

  test('if value is map, return false', () => {
    expect(isNull(new Map())).toBe(false);
  });
});

describe('isNil', () => {
  test('if value is null, return true', () => {
    expect(isNil(null)).toBe(true);
  });

  test('if value is undefined, return false', () => {
    expect(isNil(undefined)).toBe(false);
  });

  test('if value is object, return false', () => {
    expect(isNil({})).toBe(false);
  });

  test('if value is function, return false', () => {
    expect(isNil(() => {})).toBe(false);
  });

  test('if value is number, return false', () => {
    expect(isNil(1)).toBe(false);
  });

  test('if value is string, return false', () => {
    expect(isNil('a')).toBe(false);
  });

  test('if value is boolean, return false', () => {
    expect(isNil(true)).toBe(false);
  });

  test('if value is symbol, return false', () => {
    expect(isNil(Symbol('a'))).toBe(false);
  });

  test('if value is bigint, return false', () => {
    expect(isNil(BigInt(1))).toBe(false);
  });

  test('if value is array, return false', () => {
    expect(isNil([])).toBe(false);
  });

  test('if value is date, return false', () => {
    expect(isNil(new Date())).toBe(false);
  });

  test('if value is regexp, return false', () => {
    expect(isNil(/a/)).toBe(false);
  });

  test('if value is error, return false', () => {
    expect(isNil(new Error())).toBe(false);
  });

  test('if value is map, return false', () => {
    expect(isNil(new Map())).toBe(false);
  });
});
