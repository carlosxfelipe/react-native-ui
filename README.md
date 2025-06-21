# React Native UI by @carlosxfelipe

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

A responsive and touch-friendly image carousel component.

<p align="center">
  <img src="./preview/carousel.gif" alt="Carousel animation" width="50%" />
</p>

#### Example Usage

```tsx
import { Carousel } from "@carlosxfelipe/react-native-ui";

const images = [
  { id: 1, source: require("../assets/pexels/pexels-78563786-10764538.jpg") },
  { id: 2, source: require("../assets/pexels/pexels-edwardeyer-1066859.jpg") },
];

<Carousel
  images={images}
  showIndicators
  indicatorColor="red"
  onPressImage={handlePressImage}
  // autoplayInterval={5000}
/>;
```

#### Props

| Prop               | Type                                                        | Description                                            |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------ |
| `images`           | `Array<{ id: string \| number, source: string \| number }>` | Image list with unique IDs and source URIs or require. |
| `height`           | `number`                                                    | Carousel height. Default: `180`.                       |
| `onPressImage`     | `(id: string \| number) => void`                            | Triggered when an image is pressed.                    |
| `autoplayInterval` | `number`                                                    | Interval for autoplay in ms. Default: `3000`.          |
| `showIndicators`   | `boolean`                                                   | Shows indicator dots. Default: `false`.                |
| `indicatorColor`   | `string`                                                    | Active indicator color. Default: `#000`.               |

## License

MIT
