import { describe, expect, test } from 'vitest';
import { toPlainObject } from './toPlainObject.ts';

describe('toPlainObject', () => {
  test('if value is object, return object', () => {
    expect(toPlainObject({ a: 1 })).toEqual({ a: 1 });
  });

  test('if value is function, return object', () => {
    expect(toPlainObject(() => {})).toEqual({});
  });

  test('if value is array, return object', () => {
    expect(toPlainObject([1, 2])).toEqual({ 0: 1, 1: 2 });
  });

  test('if value is regexp, return object', () => {
    expect(toPlainObject(/a/)).toEqual({});
  });

  test('if value is date, return object', () => {
    expect(toPlainObject(new Date(0))).toEqual({});
  });

  test('if value is error, return object', () => {
    expect(toPlainObject(new Error())).toEqual({});
  });

  test('if value is class, return object', () => {
    class Foo {
      b = 2;
      c?: number = 3;
    }

    expect(toPlainObject(new Foo())).toEqual({ b: 2, c: 3 });
  });
});
