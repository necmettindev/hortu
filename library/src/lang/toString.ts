import { isSymbol } from './isSymbol.ts';

export function toString(value: any): string {
  if (value == null) {
    return '';
  }

  if (typeof value === 'string') {
    return value;
  }
  if (Array.isArray(value)) {
    return `${value.map((other) => (other == null ? '' : toString(other)))}`;
  }
  if (isSymbol(value)) {
    return value.toString();
  }
  const result = `${value}`;
  return Object.is(value, -0) ? '-0' : result;
}
