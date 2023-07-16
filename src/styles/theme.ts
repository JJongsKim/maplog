import { font } from './font';

export const theme = {
  color: {
    black: '#000000',
    text: '#2e2e2e',
    gray: '#cecece',
    pink: '#ffdedb',
    hotpink: '#ff6f61',
    brown: '#762e27',
    babypink: '#ffeeec',
  },
  font,
} as const;

export type EmotionTheme = typeof theme;
