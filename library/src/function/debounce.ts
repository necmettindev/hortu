export type DebounceOptions<Result> = {
  isImmediate?: boolean;
  maxWait?: number;
  callback?: (data: Result) => void;
};

export interface DebouncedFunc<Args extends unknown[], Result> {
  (this: any, ...args: Args): Promise<Result>;
  cancel: (reason?: unknown) => void;
}

interface DebouncedPromise<FReturn> {
  resolve: (result: FReturn) => void;
  reject: (reason?: unknown) => void;
}

/**
 * Creates a debounced version of the provided function. The debounced function delays invoking the
 * original function until after `waitMs` milliseconds have elapsed since the last time the debounced
 * function was invoked. Useful for rate-limiting tasks like event handlers of user input (e.g., resize, scroll, input).
 *
 * @param func - The function to debounce.
 * @param waitMs - The number of milliseconds to delay (default is 50).
 * @param options - An optional configuration object:
 *    isImmediate: If `true`, the function will be invoked on the leading edge instead of the trailing edge.
 *    maxWait: Maximum time func is allowed to be delayed before it's invoked.
 *    callback: An optional callback function that is invoked with the result of `func` after `func` is called.
 *
 * @returns A debounced version of the provided function. This debounced function returns a promise
 *          that resolves with the result of the original function. It also has a `cancel` method to
 *          cancel any pending invocation of the original function.
 */
export function debounce<Args extends unknown[], Result>(
  func: (...args: Args) => Result,
  waitMs: number = 50,
  options: DebounceOptions<Result> = {}
): DebouncedFunc<Args, Result> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  const { isImmediate = false, callback, maxWait } = options;
  let lastInvokeTime = Date.now();
  let promises: DebouncedPromise<Result>[] = [];

  function nextInvokeTimeout(): number {
    if (maxWait) {
      const elapsed = Date.now() - lastInvokeTime;
      return maxWait && elapsed + waitMs >= maxWait
        ? maxWait - elapsed
        : waitMs;
    }
    return waitMs;
  }

  const debounced: DebouncedFunc<Args, Result> = function (...args: Args) {
    return new Promise<Result>((resolve, reject) => {
      const invoke = () => {
        timeoutId = undefined;
        lastInvokeTime = Date.now();
        const result = func(...args);
        if (callback) {
          callback(result);
        }
        promises.forEach((p) => p.resolve(result));
      };

      if (isImmediate && timeoutId === undefined) {
        const result = func(...args);
        if (callback) {
          callback(result);
        }
        resolve(result);
      } else {
        promises.push({ resolve, reject });
        if (timeoutId !== undefined) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(invoke, nextInvokeTimeout());
      }
    });
  };

  debounced.cancel = (reason?: unknown) => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    promises.forEach((p) => p.reject(reason));
    promises = [];
  };

  return debounced;
}
