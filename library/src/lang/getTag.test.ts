import { describe, expect, test } from 'vitest';
import { getTag } from './getTag';

describe('getTag', () => {
  test('if value is null, return [object Null]', () => {
    expect(getTag(null)).toBe('[object Null]');
  });

  test('if value is undefined, return [object Undefined]', () => {
    expect(getTag(undefined)).toBe('[object Undefined]');
  });

  test('if value is object, return [object Object]', () => {
    expect(getTag({})).toBe('[object Object]');
  });

  test('if value is function, return [object Function]', () => {
    expect(getTag(() => {})).toBe('[object Function]');
  });

  test('if value is number, return [object Number]', () => {
    expect(getTag(1)).toBe('[object Number]');
  });

  test('if value is string, return [object String]', () => {
    expect(getTag('a')).toBe('[object String]');
  });

  test('if value is boolean, return [object Boolean]', () => {
    expect(getTag(true)).toBe('[object Boolean]');
  });

  test('if value is symbol, return [object Symbol]', () => {
    expect(getTag(Symbol('a'))).toBe('[object Symbol]');
  });

  test('if value is bigint, return [object BigInt]', () => {
    expect(getTag(BigInt(1))).toBe('[object BigInt]');
  });

  test('if value is array, return [object Array]', () => {
    expect(getTag([])).toBe('[object Array]');
  });

  test('if value is date, return [object Date]', () => {
    expect(getTag(new Date())).toBe('[object Date]');
  });

  test('if value is regexp, return [object RegExp]', () => {
    expect(getTag(/a/)).toBe('[object RegExp]');
  });

  test('if value is error, return [object Error]', () => {
    expect(getTag(new Error())).toBe('[object Error]');
  });

  test('if value is map, return [object Map]', () => {
    expect(getTag(new Map())).toBe('[object Map]');
  });

  test('if value is set, return [object Set]', () => {
    expect(getTag(new Set())).toBe('[object Set]');
  });

  test('if value is weakmap, return [object WeakMap]', () => {
    expect(getTag(new WeakMap())).toBe('[object WeakMap]');
  });

  test('if value is weakset, return [object WeakSet]', () => {
    expect(getTag(new WeakSet())).toBe('[object WeakSet]');
  });

  test('if value is arraybuffer, return [object ArrayBuffer]', () => {
    expect(getTag(new ArrayBuffer(1))).toBe('[object ArrayBuffer]');
  });

  test('if value is dataview, return [object DataView]', () => {
    expect(getTag(new DataView(new ArrayBuffer(1)))).toBe('[object DataView]');
  });

  test('if value is typedarray, return [object TypedArray]', () => {
    expect(getTag(new Int8Array())).toBe('[object Int8Array]');
  });
});
