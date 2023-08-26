import { isBuffer } from './isBuffer.ts';
import { test, describe, expect } from 'vitest';

describe('isBuffer', () => {
  test('should return `true` for buffers', () => {
    expect(isBuffer(Buffer.alloc(2))).toBe(true);
    expect(isBuffer(Buffer.alloc(0))).toBe(true);
    expect(isBuffer(Buffer.alloc(1))).toBe(true);
    expect(isBuffer(Buffer.from(''))).toBe(true);
    expect(isBuffer(Buffer.from('abc'))).toBe(true);
    expect(isBuffer(Buffer.from('abc', 'base64'))).toBe(true);
    expect(isBuffer(Buffer.from('abc', 'hex'))).toBe(true);
  });

  test('should return `false` for non-buffers', () => {
    const nonBuffers = [
      undefined,
      null,
      true,
      false,
      0,
      1,
      '',
      'a',
      [],
      {},
      /x/,
      new Date(),
      new Error(),
      Symbol(''),
      1n,
      Object(1n),
    ];

    for (const value of nonBuffers) {
      expect(isBuffer(value)).toBe(false);
    }
  });
});
