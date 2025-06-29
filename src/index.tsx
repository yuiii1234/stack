import {
  ComponentProps,
  CSSProperties,
  ElementType,
  ReactNode,
  useMemo,
} from 'react';
import { AcceptsStyle, AsProp, PropsToOmit } from './Types.js';
import { resolveGap, type Gap } from './Gap.tsx';
export { setDefaultGap, type Gap } from './Gap.tsx';

type StackOwnProps = {
  alignCenter?: true;
  alignEnd?: true;
  alignStart?: true;
  around?: true;
  baseline?: true;
  center?: true;
  children?: ReactNode;
  className?: string;
  columnGap?: Gap;
  end?: true;
  evenly?: true;
  flex1?: true;
  gap?: Gap;
  horizontalPadding?: Gap;
  inline?: true;
  nowrap?: true;
  order?: number;
  padding?: Gap;
  reverse?: true;
  rowGap?: Gap;
  self?: 'center' | 'end' | 'start' | 'stretch';
  shrink0?: true;
  start?: true;
  stretch?: true;
  vertical?: true;
  verticalPadding?: Gap;
};

export type StackProps<Component extends ElementType = 'div'> =
  AcceptsStyle<Component> extends never
    ? never
    : AsProp<Component> &
        StackOwnProps &
        Omit<ComponentProps<Component>, PropsToOmit<Component, StackOwnProps>>;

export default function Stack<Component extends ElementType = 'div'>({
  alignCenter,
  alignEnd,
  alignStart,
  around,
  as,
  baseline,
  center,
  columnGap: _columnGap,
  end,
  evenly,
  flex1,
  gap: _gap,
  horizontalPadding,
  inline,
  nowrap,
  padding,
  reverse,
  rowGap: _rowGap,
  self: alignSelf,
  shrink0,
  start,
  stretch,
  style,
  vertical,
  verticalPadding,
  ...props
}: StackProps<Component>) {
  const baseStyle = useMemo(() => {
    const baseStyle: CSSProperties = {
      alignItems: alignStart
        ? 'flex-start'
        : alignCenter
          ? 'center'
          : alignEnd
            ? 'flex-end'
            : baseline
              ? 'baseline'
              : undefined,
      alignSelf,
      display: inline ? 'inline-flex' : 'flex',
      flex: flex1 ? 1 : undefined,
      flexDirection: vertical
        ? reverse
          ? 'column-reverse'
          : 'column'
        : reverse
          ? 'row-reverse'
          : 'row',
      flexGrow: stretch ? 1 : undefined,
      flexShrink: shrink0 ? 0 : undefined,
      flexWrap: nowrap ? 'nowrap' : 'wrap',
      justifyContent: center
        ? 'center'
        : start
          ? 'flex-start'
          : end
            ? 'flex-end'
            : evenly
              ? 'space-evenly'
              : around
                ? 'space-around'
                : 'space-between',
    };

    const gap = resolveGap(_gap);
    const rowGap = resolveGap(_rowGap);
    const columnGap = resolveGap(_columnGap);

    if (rowGap != null) {
      baseStyle.rowGap = rowGap;
    }
    if (columnGap != null) {
      baseStyle.columnGap = columnGap;
    }
    if (gap != null && rowGap == null && columnGap == null) {
      baseStyle.gap = gap;
    }

    const vGap = rowGap ?? gap;
    const hGap = columnGap ?? gap;
    if (padding === true) {
      if (vGap != null) {
        baseStyle.paddingTop = baseStyle.paddingBottom = vGap;
      }
      if (hGap != null) {
        baseStyle.paddingLeft = baseStyle.paddingRight = hGap;
      }
    } else if (padding != null) {
      baseStyle.padding = padding;
    } else {
      if (verticalPadding != null || vGap != null) {
        const paddingValue = verticalPadding === true ? vGap : verticalPadding;
        baseStyle.paddingTop = baseStyle.paddingBottom = paddingValue;
      }

      if (horizontalPadding != null || hGap != null) {
        const paddingValue =
          horizontalPadding === true ? hGap : horizontalPadding;
        baseStyle.paddingLeft = baseStyle.paddingRight = paddingValue;
      }
    }

    return baseStyle;
  }, [
    _columnGap,
    _gap,
    _rowGap,
    alignCenter,
    alignEnd,
    alignSelf,
    alignStart,
    around,
    baseline,
    center,
    end,
    evenly,
    flex1,
    horizontalPadding,
    inline,
    nowrap,
    padding,
    reverse,
    shrink0,
    start,
    stretch,
    vertical,
    verticalPadding,
  ]);

  const Component = as || 'div';
  return <Component style={{ ...baseStyle, ...style }} {...props} />;
}
