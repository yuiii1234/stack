import { ElementType, ComponentProps, ReactNode } from 'react';
import { Gap } from './Gap.tsx';

export type StackPropsInternal = {
  alignCenter?: true;
  alignEnd?: true;
  alignStart?: true;
  around?: true;
  baseline?: true;
  center?: true;
  children?: ReactNode;
  columnGap?: Gap;
  end?: true;
  evenly?: true;
  flex1?: true;
  gap?: Gap;
  horizontalPadding?: Gap;
  inline?: true;
  nowrap?: true;
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

export type AcceptsStyle<C extends ElementType> =
  'style' extends keyof ComponentProps<C> ? C : never;

export type AsProp<Component extends ElementType> = { as?: Component };

export type PropsToOmit<
  Component extends ElementType,
  Props,
> = keyof (AsProp<Component> & Props);
