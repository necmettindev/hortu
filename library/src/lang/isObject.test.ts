import { describe, expect, test } from 'vitest';
import { isObject } from './isObject';

describe('isObject', () => {
  test('if value is null, return false', () => {
    expect(isObject(null)).toBe(false);
  });

  test('if value is undefined, return false', () => {
    expect(isObject(undefined)).toBe(false);
  });

  test('if value is object, return true', () => {
    expect(isObject({})).toBe(true);
  });

  test('if value is function, return true', () => {
    expect(isObject(() => {})).toBe(true);
  });

  test('if value is number, return false', () => {
    expect(isObject(1)).toBe(false);
  });

  test('if value is string, return false', () => {
    expect(isObject('a')).toBe(false);
  });

  test('if value is boolean, return false', () => {
    expect(isObject(true)).toBe(false);
  });

  test('if value is symbol, return false', () => {
    expect(isObject(Symbol('a'))).toBe(false);
  });

  test('if value is bigint, return false', () => {
    expect(isObject(BigInt(1))).toBe(false);
  });

  test('if value is array, return true', () => {
    expect(isObject([])).toBe(true);
  });

  test('if value is date, return true', () => {
    expect(isObject(new Date())).toBe(true);
  });

  test('if value is regexp, return true', () => {
    expect(isObject(/a/)).toBe(true);
  });

  test('if value is error, return true', () => {
    expect(isObject(new Error())).toBe(true);
  });

  test('if value is map, return true', () => {
    expect(isObject(new Map())).toBe(true);
  });

  test('if value is set, return true', () => {
    expect(isObject(new Set())).toBe(true);
  });

  test('if value is weakmap, return true', () => {
    expect(isObject(new WeakMap())).toBe(true);
  });

  test('if value is weakset, return true', () => {
    expect(isObject(new WeakSet())).toBe(true);
  });

  test('if value is arraybuffer, return true', () => {
    expect(isObject(new ArrayBuffer(1))).toBe(true);
  });

  test('if value is dataview, return true', () => {
    expect(isObject(new DataView(new ArrayBuffer(1)))).toBe(true);
  });

  test('if value is int8array, return true', () => {
    expect(isObject(new Int8Array())).toBe(true);
  });
});
