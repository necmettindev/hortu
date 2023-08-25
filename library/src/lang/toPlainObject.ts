/**
 * Converts a value to a plain object by enumerating its own properties.
 *
 * @param value - The value to convert.
 * @returns Returns the converted plain object.
 */
export function toPlainObject(value: any): Record<string, any> {
  const objValue = Object(value);
  const result: Record<string, any> = {};

  for (const key in objValue) {
    if (Object.prototype.hasOwnProperty.call(objValue, key)) {
      result[key] = objValue[key];
    }
  }

  return result;
}
