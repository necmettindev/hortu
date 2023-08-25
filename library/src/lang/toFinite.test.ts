import { describe, expect, test } from 'vitest';
import { toFinite } from './toFinite';

describe('toFinite', () => {
  test('if value is number, return number', () => {
    expect(toFinite(1)).toBe(1);
  });

  test('if value is string, return number', () => {
    expect(toFinite('1')).toBe(1);
  });

  test('if value is boolean, return number', () => {
    expect(toFinite(true)).toBe(1);
  });

  test('if value is symbol, return 0', () => {
    expect(toFinite(Symbol('a'))).toBe(0);
  });

  test('if value is null, return 0', () => {
    expect(toFinite(null)).toBe(0);
  });

  test('if value is undefined, return 0', () => {
    expect(toFinite(undefined)).toBe(0);
  });

  test('if value is object, return 0', () => {
    expect(toFinite({})).toBe(0);
  });

  test('if value is function, return 0', () => {
    expect(toFinite(() => {})).toBe(0);
  });

  test('if value is array, return 0', () => {
    expect(toFinite([])).toBe(0);
  });

  test('if value is regexp, return 0', () => {
    expect(toFinite(/a/)).toBe(0);
  });

  test('if value is date, return 0', () => {
    expect(toFinite(new Date(0))).toBe(0);
  });

  test('if value is error, return 0', () => {
    expect(toFinite(new Error())).toBe(0);
  });

  test('if value is binary, return number', () => {
    expect(toFinite('0b1')).toBe(1);
  });

  test('if value is octal, return number', () => {
    expect(toFinite('0o1')).toBe(1);
  });

  test('if value is hex, return number', () => {
    expect(toFinite('0x1')).toBe(1);
  });

  test('if value is infinity, return max integer', () => {
    expect(toFinite(Infinity)).toBe(1.7976931348623157e308);
  });

  test('if value is negative infinity, return negative max integer', () => {
    expect(toFinite(-Infinity)).toBe(-1.7976931348623157e308);
  });

  test('if value is NaN, return 0', () => {
    expect(toFinite(NaN)).toBe(0);
  });

  test('if value is max integer, return max integer', () => {
    expect(toFinite(1.7976931348623157e308)).toBe(1.7976931348623157e308);
  });

  test('if value is negative max integer, return negative max integer', () => {
    expect(toFinite(-1.7976931348623157e308)).toBe(-1.7976931348623157e308);
  });

  test('if value is positive zero, return 0', () => {
    expect(toFinite(+0)).toBe(0);
  });

  test('if value is negative zero, return 0', () => {
    expect(toFinite(-0)).toBe(0);
  });
});
