import { describe, expect, test } from 'vitest';
import { isSymbol } from './isSymbol';

describe('isSymbol', () => {
  test('if value is symbol, return true', () => {
    expect(isSymbol(Symbol('a'))).toBe(true);
  });

  test('if value is boxed symbol, return true', () => {
    expect(isSymbol(Object(Symbol('a')))).toBe(true);
  });

  test('if value is not symbol, return false', () => {
    expect(isSymbol('a')).toBe(false);
  });

  test('if value is null, return false', () => {
    expect(isSymbol(null)).toBe(false);
  });

  test('if value is undefined, return false', () => {
    expect(isSymbol(undefined)).toBe(false);
  });

  test('if value is object, return false', () => {
    expect(isSymbol({})).toBe(false);
  });

  test('if value is function, return false', () => {
    expect(isSymbol(() => {})).toBe(false);
  });

  test('if value is number, return false', () => {
    expect(isSymbol(1)).toBe(false);
  });

  test('if value is string, return false', () => {
    expect(isSymbol('a')).toBe(false);
  });

  test('if value is boolean, return false', () => {
    expect(isSymbol(true)).toBe(false);
  });

  test('if value is array, return false', () => {
    expect(isSymbol([])).toBe(false);
  });

  test('if value is regexp, return false', () => {
    expect(isSymbol(/a/)).toBe(false);
  });

  test('if value is date, return false', () => {
    expect(isSymbol(new Date())).toBe(false);
  });

  test('if value is error, return false', () => {
    expect(isSymbol(new Error())).toBe(false);
  });

  test('if value is promise, return false', () => {
    expect(isSymbol(new Promise(() => {}))).toBe(false);
  });

  test('if value is set, return false', () => {
    expect(isSymbol(new Set())).toBe(false);
  });

  test('if value is map, return false', () => {
    expect(isSymbol(new Map())).toBe(false);
  });

  test('if value is weakset, return false', () => {
    expect(isSymbol(new WeakSet())).toBe(false);
  });

  test('if value is weakmap, return false', () => {
    expect(isSymbol(new WeakMap())).toBe(false);
  });

  test('if value is bigint, return false', () => {
    expect(isSymbol(BigInt(1))).toBe(false);
  });

  test('if value is int8array, return false', () => {
    expect(isSymbol(new Int8Array())).toBe(false);
  });

  test('if value is uint8array, return false', () => {
    expect(isSymbol(new Uint8Array())).toBe(false);
  });

  test('if value is uint8clampedarray, return false', () => {
    expect(isSymbol(new Uint8ClampedArray())).toBe(false);
  });

  test('if value is int16array, return false', () => {
    expect(isSymbol(new Int16Array())).toBe(false);
  });
});
