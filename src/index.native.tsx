import { ComponentProps, ComponentType, ElementType, useMemo } from 'react';
import { resolveGap } from './Gap.tsx';
import { View, ViewProps, ViewStyle } from 'react-native';
import {
  AcceptsStyle,
  AsProp,
  PropsToOmit,
  StackPropsInternal,
} from './Types.js';
export { setDefaultGap, type Gap } from './Gap.tsx';

type ViewWithClassName = ViewProps & {
  className?: string;
};

export type StackProps<
  Component extends ElementType = ComponentType<ViewWithClassName>,
> =
  AcceptsStyle<Component> extends never
    ? never
    : AsProp<Component> &
        StackPropsInternal &
        Omit<
          ComponentProps<Component>,
          PropsToOmit<Component, StackPropsInternal>
        >;

let Stack = function Stack<
  Component extends ElementType = ComponentType<ViewWithClassName>,
>({
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
    const baseStyle: ViewStyle = {
      alignItems: alignStart
        ? 'flex-start'
        : alignCenter
          ? 'center'
          : alignEnd
            ? 'flex-end'
            : baseline
              ? 'baseline'
              : undefined,
      alignSelf:
        alignSelf === 'start'
          ? 'flex-start'
          : alignSelf === 'end'
            ? 'flex-end'
            : alignSelf,
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
    nowrap,
    padding,
    reverse,
    shrink0,
    start,
    stretch,
    vertical,
    verticalPadding,
  ]);

  const Component = as || View;
  return <Component style={[baseStyle, style]} {...props} />;
};

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { cssInterop } = require('nativewind');

  Stack = cssInterop(Stack, {
    className: {
      target: 'style',
    },
  });
} catch {
  /* empty */
}

export default Stack;
