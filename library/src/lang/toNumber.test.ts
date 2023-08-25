import { describe, expect, test } from 'vitest';
import { toNumber } from './toNumber.ts';

describe('toNumber', () => {
  test('if value is number, return number', () => {
    expect(toNumber(1)).toBe(1);
  });

  test('if value is string, return number', () => {
    expect(toNumber('1')).toBe(1);
  });

  test('if value is boolean, return number', () => {
    expect(toNumber(true)).toBe(1);
  });

  test('if value is symbol, return NaN', () => {
    expect(toNumber(Symbol('a'))).toBe(NaN);
  });

  test('if value is null, return 0', () => {
    expect(toNumber(null)).toBe(0);
  });

  test('if value is undefined, return NaN', () => {
    expect(toNumber(undefined)).toBe(NaN);
  });

  test('if value is object, return NaN', () => {
    expect(toNumber({})).toBe(NaN);
  });

  test('if value is function, return NaN', () => {
    expect(toNumber(() => {})).toBe(NaN);
  });

  test('if value is array, return 0', () => {
    expect(toNumber([])).toBe(0);
  });

  test('if value is regexp, return NaN', () => {
    expect(toNumber(/a/)).toBe(NaN);
  });

  test('if value is date, return 0', () => {
    expect(toNumber(new Date(0))).toBe(0);
  });

  test('if value is error, return NaN', () => {
    expect(toNumber(new Error())).toBe(NaN);
  });

  test('if value is binary, return number', () => {
    expect(toNumber('0b1')).toBe(1);
  });

  test('if value is octal, return number', () => {
    expect(toNumber('0o1')).toBe(1);
  });

  test('if value is float, return number', () => {
    expect(toNumber(1.1)).toBe(1.1);
  });

  test('if value is negative float, return number', () => {
    expect(toNumber(-1.1)).toBe(-1.1);
  });

  test('if value is NaN, return 0', () => {
    expect(toNumber(NaN)).toBe(NaN);
  });

  test('if value is bigint, throw error', () => {
    expect(() => toNumber(1n)).toThrowError(
      'Cannot convert a BigInt value to a number'
    );
  });

  test('value.valueOf handling', () => {
    const objWithValOf = { valueOf: () => 42 };
    const result = toNumber(objWithValOf);
    expect(result).toBe(42);
  });

  test('handling hex values', () => {
    const badHex = '-0x1g';
    const result = toNumber(badHex);
    expect(result).toBe(NaN);
  });

  test('should convert valid hex to number', () => {
    const validHex = '0xFF';
    const result = toNumber(validHex);
    expect(result).toBe(255);
  });

  test('should not call valueOf if not a function', () => {
    const objWithoutValOf = { valueOf: 42 };
    const result = toNumber(objWithoutValOf);
    expect(result).toBe(NaN);
  });

  test('reIsBadHex should return NaN', () => {
    const badHex = '-0x1g';
    const result = toNumber(badHex);
    expect(result).toBe(NaN);
  });

  test('reIsBadHex return with +', () => {
    const badHex = '0x1';
    const result = toNumber(badHex);
    expect(result).toBe(+0x1);
  });

  test('misc test', () => {
    expect(toNumber('123')).toBe(123);
    expect(toNumber('0x123')).toBe(0x123);
    expect(toNumber('0o123')).toBe(0o123);
    expect(toNumber('0b1010')).toBe(0b1010);
    expect(toNumber('0x123')).toBe(0x123);
    expect(toNumber('123.456')).toBe(123.456);
    expect(toNumber('123e+4')).toBe(123e4);
    expect(toNumber('123e-4')).toBe(123e-4);
    expect(toNumber('123e4')).toBe(123e4);
    expect(toNumber('123e')).toBe(NaN);
    expect(toNumber('123e+')).toBe(NaN);
    expect(toNumber('123e-')).toBe(NaN);
    expect(toNumber('0x')).toBe(NaN);
    expect(toNumber('0o')).toBe(NaN);
    expect(toNumber('0b')).toBe(NaN);
    expect(toNumber('0x123e+')).toBe(NaN);
    expect(toNumber('0o123e+')).toBe(NaN);
    expect(toNumber('0b1010e+')).toBe(NaN);
    expect(toNumber('0x123e-')).toBe(NaN);
    expect(toNumber('0o123e-')).toBe(NaN);
    expect(toNumber('0b1010e-')).toBe(NaN);
    expect(toNumber('0x123e')).toBe(4670);
    expect(toNumber('0o123e')).toBe(NaN);
    expect(toNumber('0b1010e')).toBe(NaN);
    expect(toNumber('0x123.z')).toBe(NaN);
    expect(toNumber('0o123.')).toBe(NaN);
    expect(toNumber('0b1010.')).toBe(NaN);
    expect(toNumber('0x123.456')).toBe(NaN);
    expect(toNumber('0o123.456')).toBe(NaN);
    expect(toNumber('0b1010.1010')).toBe(NaN);
    expect(toNumber('0x123e+4')).toBe(NaN);
    expect(toNumber('0o123e+4')).toBe(NaN);
    expect(toNumber('0b1010e+4')).toBe(NaN);
    expect(toNumber('0x123e-4')).toBe(NaN);
    expect(toNumber('0o123e-4')).toBe(NaN);
    expect(toNumber('0b1010e-4')).toBe(NaN);
    expect(toNumber('+0xy1234')).toBe(NaN);
  });

  test('should return NaN for bad hexadecimal strings', () => {
    const badHexValues = ['-0x1G', '+0x23Z', '0x9H', '+0xAJ', '-0xGG'];

    badHexValues.forEach((val) => {
      expect(toNumber(val)).toBe(NaN);
    });
  });

  test('should not return NaN for valid hexadecimal strings', () => {
    expect(toNumber('-0x2F')).toBe(NaN);
  });
});
