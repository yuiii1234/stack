import { AlignContent, AlignSelf } from './Types.js';

export function resolveAlignment<
  T extends AlignContent | AlignSelf,
  S extends Exclude<T, 'start' | 'end'> | 'flex-start' | 'flex-end' | undefined,
>(value: T | undefined): S {
  return (value === 'start'
    ? 'flex-start'
    : value === 'end'
      ? 'flex-end'
      : value) as unknown as S;
}
