import { describe, expect, test } from 'vitest';
import { lte } from './lte.ts';

describe('lte', () => {
  test('if value is less than other, return true', () => {
    expect(lte(1, 2)).toBe(true);
  });

  test('if value is equal to other, return true', () => {
    expect(lte(2, 2)).toBe(true);
  });

  test('if value is greater than other, return false', () => {
    expect(lte(3, 2)).toBe(false);
  });

  // write more tests here for string values
  test('if value is less than other, return true (string)', () => {
    expect(lte('1', '2')).toBe(true);
  });

  test('if value is equal to other, return true (string)', () => {
    expect(lte('2', '2')).toBe(true);
  });

  test('if value is greater than other, return false (string)', () => {
    expect(lte('3', '2')).toBe(false);
  });
});
