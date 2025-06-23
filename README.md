# React Native UI by @carlosxfelipe

[![npm version](https://img.shields.io/npm/v/@carlosxfelipe/react-native-ui)](https://www.npmjs.com/package/@carlosxfelipe/react-native-ui)

Reusable and customizable UI components for React Native apps.  
Built with TypeScript and ready to drop into your project.

## Installation

```bash
npm install @carlosxfelipe/react-native-ui
```

or

```bash
yarn add @carlosxfelipe/react-native-ui
```

## Components

### Carousel

An adaptive and touch-friendly image carousel component.

<p align="center">
  <img src="./preview/carousel.gif" alt="Carousel preview" width="50%" />
</p>

#### Example Usage

> Below is a usage example with both local and remote images.

```tsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { Carousel } from "@carlosxfelipe/react-native-ui";

const localImages = [
  {
    id: 1,
    source: require("../assets/pexels/pexels-photo-10764538.jpeg"),
  },
  {
    id: 2,
    source: require("../assets/pexels/pexels-photo-1066859.jpeg"),
  },
];

const remoteImages = [
  {
    id: 1,
    source: {
      uri: "https://images.pexels.com/photos/10764538/pexels-photo-10764538.jpeg",
    },
  },
  {
    id: 2,
    source: {
      uri: "https://images.pexels.com/photos/1066859/pexels-photo-1066859.jpeg",
    },
  },
];

const handlePressImage = (id: string | number) => {
  console.log("Image pressed with ID:", id);
};

export default function App() {
  return (
    <View style={styles.container}>
      <Carousel
        images={remoteImages}
        showIndicators
        indicatorColor="red"
        onPressImage={handlePressImage}
        // autoplayInterval={5000}
      />
    </View>
  );
}
```

### Carousel Props

| Prop               | Type                                                           | Description                                               |
| ------------------ | -------------------------------------------------------------- | --------------------------------------------------------- |
| `images`           | `Array<{ id: string \| number, source: ImageSourcePropType }>` | Image list with unique IDs and source URIs or require.    |
| `height`           | `number`                                                       | Carousel height. Default: `180`.                          |
| `onPressImage`     | `(id: string \| number) => void`                               | Triggered when an image is pressed.                       |
| `autoplayInterval` | `number`                                                       | Interval for autoplay in ms. Default: `3000`.             |
| `showIndicators`   | `boolean`                                                      | Shows indicator dots. Default: `false`.                   |
| `indicatorColor`   | `string`                                                       | Active indicator color. Default: `#000`.                  |
| `isDarkMode`       | `boolean`                                                      | Enables dark mode skeleton placeholder. Default: `false`. |

## Constants

### Colors

A collection of Material Design color palettes (shades from 50 to 900) ready to use in your React Native project.

These colors follow the official [Material Design color system](https://material.io/design/color/the-color-system.html#color-theme-creation), and can be used to create consistent and visually appealing UI themes.

### Example Usage

```tsx
import { Colors } from "@carlosxfelipe/react-native-ui";

// Accessing a specific shade
const primaryColor = Colors.blue.shade500; // #2196F3
const accentColor = Colors.pink.shade200; // #F48FB1
```

### Available Color Palettes

Each palette contains shades from `shade50` to `shade900`:

- `red`
- `pink`
- `purple`
- `deepPurple`
- `indigo`
- `blue`
- `lightBlue`
- `cyan`
- `teal`
- `green`
- `lightGreen`
- `lime`
- `yellow`
- `amber`
- `orange`
- `deepOrange`
- `brown`
- `grey`
- `blueGrey`

### Type Support

If you're using TypeScript:

```ts
import type { ColorName, ColorsMap } from "@carlosxfelipe/react-native-ui";

const someColorName: ColorName = "cyan"; // type-safe access

type Props = {
  colorName: keyof ColorsMap;
};
```

## License

MIT
