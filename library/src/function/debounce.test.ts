import { expect, test, describe } from 'vitest';
import { debounce } from './debounce.ts';

describe('debounce function', () => {
  test('should delay the function call by specified time', async () => {
    let called = false;
    const mockFn = () => {
      called = true;
    };
    const debounced = debounce(mockFn, 500);
    debounced();
    expect(called).toBe(false);
    await new Promise((res) => setTimeout(res, 800));
    expect(called).toBe(true);
  });

  test('should call the function immediately if isImmediate is true', async () => {
    let called = false;
    const mockFn = () => {
      called = true;
    };
    const debounced = debounce(mockFn, 500, { isImmediate: true });
    debounced();
    expect(called).toBe(true);
    await new Promise((res) => setTimeout(res, 800));
    expect(called).toBe(true);
  });

  test('should call the callback with the result of the function', async () => {
    const mockFn = () => 1;
    let result: number | undefined;
    const debounced = debounce(mockFn, 500, {
      callback: (r) => {
        result = r;
      },
    });
    debounced();
    await new Promise((res) => setTimeout(res, 800));
    expect(result).toBe(1);
  });

  test('should cancel the debounce and reject all pending promises with the provided reason', async () => {
    const debouncedFunction = debounce((value) => value, 100);
    const reason = 'Cancellation reason';

    const promise1 = debouncedFunction('first');
    const promise2 = debouncedFunction('second');

    debouncedFunction.cancel(reason);

    await promise1.then(
      () => {},
      (error) => {
        expect(error).toBe(reason);
      }
    );

    await promise2.then(
      () => {},
      (error) => {
        expect(error).toBe(reason);
      }
    );
  });

  test('should not throw error if cancel is called multiple times', () => {
    const debouncedFunction = debounce((value) => value, 100);

    expect(() => {
      debouncedFunction.cancel();
      debouncedFunction.cancel();
      debouncedFunction.cancel();
    }).not.toThrow();
  });

  test('nextInvokeTimeout', () => {
    const waitMilliseconds = 100;
    const maxWait = 200;
    const lastInvokeTime = Date.now();

    const nextInvokeTimeout = (maxWait: number) =>
      maxWait && Date.now() - lastInvokeTime + waitMilliseconds >= maxWait
        ? maxWait - (Date.now() - lastInvokeTime)
        : waitMilliseconds;

    expect(nextInvokeTimeout(maxWait)).toBe(100);
    expect(nextInvokeTimeout(50)).toBeCloseTo(50, 1);
    expect(nextInvokeTimeout(150)).toBe(100);
    expect(nextInvokeTimeout(200)).toBe(100);
  });

  test('should immediately invoke the function if isImmediate is true and there is no active timeout', async () => {
    let counter = 0;
    const fn = () => {
      counter++;
      return counter;
    };

    const debounced = debounce(fn, 100, { isImmediate: true });

    const result = await debounced();

    expect(counter).toBe(1);
    expect(result).toBe(1);
  });

  test('should not immediately invoke the function if isImmediate is true but there is an active timeout', async () => {
    let counter = 0;
    const fn = () => {
      counter++;
      return counter;
    };

    const debounced = debounce(fn, 100, { isImmediate: true });

    debounced();
    const result = await debounced();

    expect(counter).toBe(2);
    expect(result).toBe(2);
  });

  test('should immediately invoke the function on consecutive calls if isImmediate is true and there is no active timeout from a previous call', async () => {
    let counter = 0;
    const fn = () => {
      counter++;
      return counter;
    };

    const debounced = debounce(fn, 50, { isImmediate: true });

    debounced().then((result1) => {
      expect(counter).toBe(1);
      expect(result1).toBe(1);
    });

    await new Promise((resolve) => setTimeout(resolve, 100));

    debounced().then((result2) => {
      expect(counter).toBe(2);
      expect(result2).toBe(2);
    });
  });

  test('debounce with isImmediate should invoke immediately on first call', async () => {
    let funcCalled = false;
    function mockFunc() {
      funcCalled = true;
      return 'result';
    }

    const debounced = debounce(mockFunc, 50, { isImmediate: true });

    const response = await debounced();

    expect(funcCalled).toBe(true);
    expect(response).toBe('result');
  });

  test('debounce with isImmediate and callback should invoke the callback', async () => {
    let funcCalled = false;
    let callbackCalled = false;

    function mockFunc() {
      funcCalled = true;
      return 'result';
    }

    function mockCallback() {
      callbackCalled = true;
    }

    const debounced = debounce(mockFunc, 50, {
      isImmediate: true,
      callback: mockCallback,
    });

    await debounced();

    expect(funcCalled).toBe(true);
    expect(callbackCalled).toBe(true);
  });

  test('debounce with maxWait should forcibly invoke after the maxWait time', async () => {
    let funcCalled = false;
    function mockFunc() {
      funcCalled = true;
      return 'result';
    }
    const waitMs = 50;
    const maxWait = 80;
    const debounced = debounce(mockFunc, waitMs, { maxWait });
    debounced();
    await new Promise((resolve) => setTimeout(resolve, 40));

    expect(funcCalled).toBe(false);
    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(funcCalled).toBe(true);
  });

  test('should cover the maxWait condition in debounce function', async () => {
    let callCount = 0;

    function mockFunc() {
      callCount++;
    }

    const waitMs = 50;
    const maxWait = 90;
    const debounced = debounce(mockFunc, waitMs, { maxWait });

    debounced();

    await new Promise((resolve) => setTimeout(resolve, maxWait - waitMs + 10));

    debounced();

    await new Promise((resolve) => setTimeout(resolve, waitMs + 10));

    expect(callCount).toBe(2);
  });

  test('debounce function with maxWait triggers after maxWait time', async () => {
    let callCount = 0;
    const func = () => {
      callCount++;
    };
    const maxWait = 200;
    const waitMs = 30;

    const debounced = debounce(func, waitMs, { maxWait });

    debounced();

    for (let i = 1; i < 10; i++) {
      setTimeout(() => debounced(), waitMs * i);
    }

    await new Promise((res) => setTimeout(res, maxWait + 10));

    expect(callCount).toBe(1);
  });
});
