import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  typography: {
    text: 14,
    small: 12,
    h1: 30,
    h2: 28,
    h3: 26,
    h4: 24,
    h5: 22,
    h6: 20,
    h7: 18,
    h8: 16,
  },
  sizes: {
    span: width / 24,
    cols: Array(16 + 1)
      .fill(0)
      .map((item, key) => width / (16 / key)),
  },
};