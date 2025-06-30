import { beforeEach, expect, vi, test } from 'vitest';
import { render } from '@testing-library/react';
import Stack, { setDefaultGap } from '../index.native.tsx';
import { createElement } from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';

const flattenStyle = (style: StyleProp<ViewStyle>) =>
  Array.isArray(style)
    ? // @ts-expect-error: We only care about one level of styles.
      style.reduce((object, item) => ({ ...object, ...item }), {})
    : style;

vi.mock('react-native', () => {
  return {
    View: ({ children, style, ...props }: ViewProps) =>
      createElement('view', { ...props, style: flattenStyle(style) }, children),
  };
});

beforeEach(() => {
  setDefaultGap(8);
});

test('renders with default props', () => {
  const { container } = render(<Stack>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between;"
    >
      Content
    </view>
  `);
});

test('renders with gap', () => {
  const { container } = render(<Stack gap={16}>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; gap: 16px;"
    >
      Content
    </view>
  `);
});

test('renders with gap=true (uses default)', () => {
  const { container } = render(<Stack gap>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; gap: 8px;"
    >
      Content
    </view>
  `);
});

test('renders with vertical layout', () => {
  const { container } = render(<Stack vertical>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: column; flex-wrap: wrap; justify-content: space-between;"
    >
      Content
    </view>
  `);
});

test('renders with reverse layout', () => {
  const { container } = render(<Stack reverse>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row-reverse; flex-wrap: wrap; justify-content: space-between;"
    >
      Content
    </view>
  `);
});

test('renders with vertical reverse layout', () => {
  const { container } = render(
    <Stack reverse vertical>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: column-reverse; flex-wrap: wrap; justify-content: space-between;"
    >
      Content
    </view>
  `);
});

test('renders with inline display', () => {
  const { container } = render(<Stack inline>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between;"
    >
      Content
    </view>
  `);
});

test('renders with nowrap', () => {
  const { container } = render(<Stack nowrap>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: nowrap; justify-content: space-between;"
    >
      Content
    </view>
  `);
});

test('renders with alignStart', () => {
  const { container } = render(<Stack alignStart>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="align-items: flex-start; flex-direction: row; flex-wrap: wrap; justify-content: space-between;"
    >
      Content
    </view>
  `);
});

test('renders with alignCenter', () => {
  const { container } = render(<Stack alignCenter>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="align-items: center; flex-direction: row; flex-wrap: wrap; justify-content: space-between;"
    >
      Content
    </view>
  `);
});

test('renders with alignEnd', () => {
  const { container } = render(<Stack alignEnd>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="align-items: flex-end; flex-direction: row; flex-wrap: wrap; justify-content: space-between;"
    >
      Content
    </view>
  `);
});

test('renders with center justification', () => {
  const { container } = render(<Stack center>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: center;"
    >
      Content
    </view>
  `);
});

test('renders with start justification', () => {
  const { container } = render(<Stack start>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: flex-start;"
    >
      Content
    </view>
  `);
});

test('renders with end justification', () => {
  const { container } = render(<Stack end>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: flex-end;"
    >
      Content
    </view>
  `);
});

test('renders with flex1', () => {
  const { container } = render(<Stack flex1>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; flex-basis: 0%;"
    >
      Content
    </view>
  `);
});

test('renders with stretch', () => {
  const { container } = render(<Stack stretch>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-grow: 1; flex-wrap: wrap; justify-content: space-between;"
    >
      Content
    </view>
  `);
});

test('renders with self alignment', () => {
  const { container } = render(<Stack self="center">Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="align-self: center; flex-direction: row; flex-wrap: wrap; justify-content: space-between;"
    >
      Content
    </view>
  `);
});

test('renders with padding and gap', () => {
  const { container } = render(
    <Stack gap={16} padding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; gap: 16px; padding: 16px;"
    >
      Content
    </view>
  `);
});

test('renders with verticalPadding and gap', () => {
  const { container } = render(
    <Stack gap={24} verticalPadding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; gap: 24px; padding-bottom: 24px; padding-top: 24px;"
    >
      Content
    </view>
  `);
});

test('renders with horizontalPadding and gap', () => {
  const { container } = render(
    <Stack gap={32} horizontalPadding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; gap: 32px; padding-right: 32px; padding-left: 32px;"
    >
      Content
    </view>
  `);
});

test('renders with custom style', () => {
  const { container } = render(
    <Stack style={{ backgroundColor: 'red', margin: 10 }}>Content</Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; background-color: red; margin: 10px;"
    >
      Content
    </view>
  `);
});

test('renders with className', () => {
  const { container } = render(<Stack className="custom-class">Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      class="custom-class"
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between;"
    >
      Content
    </view>
  `);
});

test('renders with multiple props combined', () => {
  const { container } = render(
    <Stack alignCenter flex1 gap={16} nowrap padding vertical>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="align-items: center; flex-direction: column; flex-wrap: nowrap; justify-content: space-between; gap: 16px; padding: 16px; flex-basis: 0%;"
    >
      Content
    </view>
  `);
});

test('passes through HTML attributes', () => {
  const { container } = render(
    <Stack data-testid="stack" onClick={() => {}}>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      data-testid="stack"
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between;"
    >
      Content
    </view>
  `);
});

test('changes default gap when gap=true', () => {
  setDefaultGap(24);
  const { container } = render(<Stack gap={true}>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; gap: 24px;"
    >
      Content
    </view>
  `);
});

test('supports shrink0', () => {
  const { container } = render(<Stack shrink0>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-shrink: 0; flex-wrap: wrap; justify-content: space-between;"
    >
      Content
    </view>
  `);
});

test('renders with around justification', () => {
  const { container } = render(<Stack around>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-around;"
    >
      Content
    </view>
  `);
});

test('renders with evenly justification', () => {
  const { container } = render(<Stack evenly>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-evenly;"
    >
      Content
    </view>
  `);
});

test('renders with baseline alignment', () => {
  const { container } = render(<Stack baseline>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="align-items: baseline; flex-direction: row; flex-wrap: wrap; justify-content: space-between;"
    >
      Content
    </view>
  `);
});

test('renders with rowGap only', () => {
  const { container } = render(<Stack rowGap={16}>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; row-gap: 16px;"
    >
      Content
    </view>
  `);
});

test('renders with columnGap only', () => {
  const { container } = render(<Stack columnGap={20}>Content</Stack>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; column-gap: 20px;"
    >
      Content
    </view>
  `);
});

test('renders with both rowGap and columnGap', () => {
  const { container } = render(
    <Stack columnGap={24} rowGap={16}>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; row-gap: 16px; column-gap: 24px;"
    >
      Content
    </view>
  `);
});

test('prefers rowGap/columnGap over gap when both are provided', () => {
  const { container } = render(
    <Stack columnGap={24} gap={8} rowGap={16}>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; row-gap: 16px; column-gap: 24px;"
    >
      Content
    </view>
  `);
});

test('renders with verticalPadding=true using gap value', () => {
  const { container } = render(
    <Stack gap={16} verticalPadding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; gap: 16px; padding-bottom: 16px; padding-top: 16px;"
    >
      Content
    </view>
  `);
});

test('renders with horizontalPadding=true using gap value', () => {
  const { container } = render(
    <Stack gap={16} horizontalPadding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; gap: 16px; padding-right: 16px; padding-left: 16px;"
    >
      Content
    </view>
  `);
});

test('renders with verticalPadding=true using rowGap value', () => {
  const { container } = render(
    <Stack rowGap={20} verticalPadding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; row-gap: 20px; padding-bottom: 20px; padding-top: 20px;"
    >
      Content
    </view>
  `);
});

test('renders with horizontalPadding=true using columnGap value', () => {
  const { container } = render(
    <Stack columnGap={24} horizontalPadding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; column-gap: 24px; padding-right: 24px; padding-left: 24px;"
    >
      Content
    </view>
  `);
});

test('renders with specific verticalPadding value', () => {
  const { container } = render(
    <Stack gap={16} verticalPadding={32}>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; gap: 16px; padding-bottom: 32px; padding-top: 32px;"
    >
      Content
    </view>
  `);
});

test('renders with specific horizontalPadding value', () => {
  const { container } = render(
    <Stack gap={16} horizontalPadding={28}>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; gap: 16px; padding-right: 28px; padding-left: 28px;"
    >
      Content
    </view>
  `);
});

test('renders with padding=true overriding other padding props', () => {
  const { container } = render(
    <Stack gap={16} horizontalPadding={28} padding verticalPadding={32}>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; gap: 16px; padding: 16px;"
    >
      Content
    </view>
  `);
});

test('renders with padding numeric value overriding other padding props', () => {
  const { container } = render(
    <Stack gap={16} horizontalPadding padding={40} verticalPadding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; gap: 16px; padding: 40px;"
    >
      Content
    </view>
  `);
});

test('renders with complex gap and padding combination', () => {
  const { container } = render(
    <Stack columnGap={20} horizontalPadding={32} rowGap={12} verticalPadding>
      Content
    </Stack>,
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between; row-gap: 12px; column-gap: 20px; padding: 12px 32px;"
    >
      Content
    </view>
  `);
});

test('it renders with custom component', () => {
  const { container } = render(<Stack as={View}>Content</Stack>);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between;"
    >
      Content
    </view>
  `);
});

test('it works with custom Link component', () => {
  const Link = ({
    children,
    title,
    ...props
  }: {
    children: React.ReactNode;
    style?: ViewStyle;
    title: string;
  }) => (
    <View {...props}>
      {title}
      {children}
    </View>
  );

  const { container } = render(
    <Stack as={Link} title="Banana">
      Content
    </Stack>,
  );

  expect(container.firstChild).toMatchInlineSnapshot(`
    <view
      style="flex-direction: row; flex-wrap: wrap; justify-content: space-between;"
    >
      Banana
      Content
    </view>
  `);
});

test('does not work if the component does not have a style prop', () => {
  const NoStyle = ({
    children,
    title,
  }: {
    children: React.ReactNode;
    title: string;
  }) => (
    <View>
      {title}
      {children}
    </View>
  );

  const { container } = render(
    // @ts-expect-error: NoStyle does not accept style prop.
    <Stack as={NoStyle} title="Banana">
      Content
    </Stack>,
  );

  expect(container.firstChild).toMatchInlineSnapshot(
    `
    <view>
      Banana
      Content
    </view>
  `,
  );
});
