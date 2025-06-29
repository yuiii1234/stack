import { ElementType, ComponentProps } from 'react';

export type AcceptsStyle<C extends ElementType> =
  'style' extends keyof ComponentProps<C> ? C : never;

export type AsProp<Component extends ElementType> = { as?: Component };
export type PropsToOmit<
  Component extends ElementType,
  Props,
> = keyof (AsProp<Component> & Props);
