type PossibleBuffer = {
  constructor: {
    isBuffer: (obj: unknown) => boolean;
  };
};

/**
 * Checks if the given object is a buffer.
 *
 * @param obj - The object to check.
 * @returns Returns `true` if the object is a buffer, otherwise returns `false`.
 *
 * Note: This function is designed to work in Web, Node.js, and React Native environments.
 */
export function isBuffer(obj: PossibleBuffer | Uint8Array): boolean {
  const isBuffer = (obj as PossibleBuffer)?.constructor?.isBuffer;
  const isBufferFn = typeof isBuffer === 'function';

  return (isBufferFn && isBuffer(obj)) || obj instanceof Uint8Array;
}
