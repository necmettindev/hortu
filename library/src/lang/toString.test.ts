import { describe, expect, test } from 'vitest';
import { toString } from './toString.ts';

describe('toString', () => {
  test('if value is string, return string', () => {
    expect(toString('a')).toBe('a');
  });

  test('if value is number, return string', () => {
    expect(toString(1)).toBe('1');
  });

  test('if value is number array, return string', () => {
    expect(toString([1, 2])).toBe('1,2');
  });

  test('if value is boolean, return string', () => {
    expect(toString(true)).toBe('true');
  });

  test('if value is symbol, return string', () => {
    expect(toString(Symbol('a'))).toBe('Symbol(a)');
  });

  test('if value is null, return empty string', () => {
    expect(toString(null)).toBe('');
  });

  test('if value is undefined, return empty string', () => {
    expect(toString(undefined)).toBe('');
  });

  test('if value is object, return string', () => {
    expect(toString({})).toBe('[object Object]');
  });

  test('if value is function, return string', () => {
    expect(toString(() => {})).toBe(`() => {
    }`);
  });

  test('if value is array, return string', () => {
    expect(toString([])).toBe('');
  });

  test('if value is regexp, return string', () => {
    expect(toString(/a/)).toBe('/a/');
  });

  test('if value is date, return string', () => {
    expect(toString(new Date(0))).toBe(
      'Thu Jan 01 1970 02:00:00 GMT+0200 (GMT+03:00)'
    );
  });

  test('if value is error, return string', () => {
    expect(toString(new Error())).toBe('Error');
  });

  test('if value is binary, return string', () => {
    expect(toString('0b1')).toBe('0b1');
  });

  test('if value is octal, return string', () => {
    expect(toString('0o1')).toBe('0o1');
  });
});
