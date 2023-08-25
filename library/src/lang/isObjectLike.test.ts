import { describe, expect, test } from 'vitest';
import { isObjectLike } from './isObjectLike.ts';

describe('isObjectLike', () => {
  test('if value is null, return false', () => {
    expect(isObjectLike(null)).toBe(false);
  });

  test('if value is undefined, return false', () => {
    expect(isObjectLike(undefined)).toBe(false);
  });

  test('if value is object, return true', () => {
    expect(isObjectLike({})).toBe(true);
  });

  test('if value is function, return true', () => {
    expect(isObjectLike(() => {})).toBe(false);
  });

  test('if value is number, return false', () => {
    expect(isObjectLike(1)).toBe(false);
  });

  test('if value is string, return false', () => {
    expect(isObjectLike('a')).toBe(false);
  });

  test('if value is boolean, return false', () => {
    expect(isObjectLike(true)).toBe(false);
  });

  test('if value is symbol, return false', () => {
    expect(isObjectLike(Symbol('a'))).toBe(false);
  });

  test('if value is bigint, return false', () => {
    expect(isObjectLike(BigInt(1))).toBe(false);
  });

  test('if value is array, return true', () => {
    expect(isObjectLike([])).toBe(true);
  });

  test('if value is date, return true', () => {
    expect(isObjectLike(new Date())).toBe(true);
  });

  test('if value is regexp, return true', () => {
    expect(isObjectLike(/a/)).toBe(true);
  });

  test('if value is error, return true', () => {
    expect(isObjectLike(new Error())).toBe(true);
  });

  test('if value is map, return true', () => {
    expect(isObjectLike(new Map())).toBe(true);
  });

  test('if value is set, return true', () => {
    expect(isObjectLike(new Set())).toBe(true);
  });

  test('if value is weakmap, return true', () => {
    expect(isObjectLike(new WeakMap())).toBe(true);
  });

  test('if value is weakset, return true', () => {
    expect(isObjectLike(new WeakSet())).toBe(true);
  });

  test('if value is arraybuffer, return true', () => {
    expect(isObjectLike(new ArrayBuffer(1))).toBe(true);
  });

  test('if value is dataview, return true', () => {
    expect(isObjectLike(new DataView(new ArrayBuffer(1)))).toBe(true);
  });

  test('if value is int8array, return true', () => {
    expect(isObjectLike(new Int8Array())).toBe(true);
  });
});
