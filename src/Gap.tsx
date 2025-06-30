/**
 * Spacing scale used for layout gaps and paddings.
 * Values represent pixel-based increments (e.g., 8 = 8px).
 * Use `true` to apply a the default gap (8px).
 * You can set the default gap using `setDefaultGap()`.
 */
export type Gap =
  | 0
  | 1
  | 2
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | true;

let defaultGap = 8;

export function setDefaultGap(gap: number) {
  defaultGap = gap;
}

export function resolveGap(gap: Gap | undefined) {
  return gap === true ? defaultGap : gap;
}
