export type Gap =
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
