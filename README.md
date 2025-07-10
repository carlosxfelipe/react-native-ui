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

---

### `Carousel`

A customizable horizontal image carousel with autoplay, image click handling, and indicator dots.

#### Props

| Prop               | Type                                                      | Default      | Description                     |
| ------------------ | --------------------------------------------------------- | ------------ | ------------------------------- |
| `images`           | `{ id: string \| number; source: ImageSourcePropType }[]` | **required** | List of image data to show      |
| `height`           | `number`                                                  | `180`        | Carousel height                 |
| `onPressImage`     | `(id: string \| number) => void`                          | -            | Called when an image is pressed |
| `autoplayInterval` | `number`                                                  | `3000`       | Autoplay interval in ms         |
| `showIndicators`   | `boolean`                                                 | `false`      | Show indicator dots             |
| `indicatorColor`   | `string`                                                  | `"blue"`     | Active indicator color          |
| `isDarkMode`       | `boolean`                                                 | `false`      | Enables dark mode styling       |

```tsx
import { Carousel } from "@carlosxfelipe/react-native-ui";
```

---

### `Tooltip`

Displays a tooltip message when the wrapped element is pressed. Supports placement and dark mode.

#### Props

| Prop                  | Type                                     | Default      | Description                           |
| --------------------- | ---------------------------------------- | ------------ | ------------------------------------- |
| `message`             | `string`                                 | **required** | Tooltip text                          |
| `children`            | `React.ReactElement`                     | **required** | The element that triggers the tooltip |
| `placement`           | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"`   | Tooltip position                      |
| `margin`              | `number`                                 | `8`          | Space between element and tooltip     |
| `isDarkMode`          | `boolean`                                | `false`      | Enables dark theme                    |
| `textColor`           | `string`                                 | `"#fff"`     | Light mode text color                 |
| `textColorDark`       | `string`                                 | `"#333"`     | Dark mode text color                  |
| `backgroundColor`     | `string`                                 | `"#333"`     | Light mode background                 |
| `backgroundColorDark` | `string`                                 | `"#fff"`     | Dark mode background                  |

```tsx
import { Tooltip } from "@carlosxfelipe/react-native-ui";
```

---

### `Skeleton`

A loading placeholder with animated shimmer. Ideal for loading states in lists or images.

#### Props

| Prop                  | Type                   | Default     | Description                     |
| --------------------- | ---------------------- | ----------- | ------------------------------- |
| `width`               | `DimensionValue`       | `"100%"`    | Width of the skeleton           |
| `height`              | `DimensionValue`       | `100`       | Height of the skeleton          |
| `borderRadius`        | `number`               | `8`         | Border radius                   |
| `isDarkMode`          | `boolean`              | `false`     | Enables dark theme              |
| `lightBaseColor`      | `string`               | `"#e0e0e0"` | Base color for light theme      |
| `lightHighlightColor` | `string`               | `"#f5f5f5"` | Highlight color for light theme |
| `darkBaseColor`       | `string`               | `"#333"`    | Base color for dark theme       |
| `darkHighlightColor`  | `string`               | `"#555"`    | Highlight color for dark theme  |
| `style`               | `StyleProp<ViewStyle>` | `undefined` | Additional style                |

```tsx
import { Skeleton } from "@carlosxfelipe/react-native-ui";
```

---

### `Colors`

A full set of Material Design color palettes, grouped by color name and shade level.

Each color (e.g., `Colors.blue`) has the following shades:  
`shade50`, `shade100`, ..., `shade900`.

```tsx
import { Colors } from "@carlosxfelipe/react-native-ui";

const primary = Colors.blue.shade500;
```
