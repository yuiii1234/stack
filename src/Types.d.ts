import { ElementType, ComponentProps, ReactNode } from 'react';
import { Gap } from './Gap.tsx';

export type AlignContent =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type AlignSelf = 'center' | 'end' | 'start' | 'stretch' | 'baseline';

export type StackPropsInternal = {
  alignCenter?: true;
  alignEnd?: true;
  alignStart?: true;
  around?: true;
  baseline?: true;
  between?: true;
  center?: true;
  children?: ReactNode;
  columnGap?: Gap;
  content?: AlignContent;
  end?: true;
  evenly?: true;
  flex1?: true;
  gap?: Gap;
  horizontalPadding?: Gap;
  inline?: true;
  padding?: Gap;
  reverse?: true;
  rowGap?: Gap;
  safe?: true;
  self?: AlignSelf;
  shrink0?: true;
  stretch?: true;
  vertical?: true;
  verticalPadding?: Gap;
  wrap?: true;
};

export type AcceptsStyle<C extends ElementType> =
  'style' extends keyof ComponentProps<C> ? C : never;

export type AsProp<Component extends ElementType> = { as?: Component };

export type PropsToOmit<
  Component extends ElementType,
  Props,
> = keyof (AsProp<Component> & Props);
