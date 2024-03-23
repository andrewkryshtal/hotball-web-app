import { hexToRGBA } from '../helpers';

export type Ttheme = typeof theme;

export const theme = {
  colors: {
    orange300: '#FF672D',
    orange500: '#FF5215',
    orange700: '#4C1400',
    orange700_40: hexToRGBA('#4C1400', 0.4),
    purple200: '#D795ED',
    purple300: '#D289EB',
    purple700: '#3B1C46',
    purple700_40: hexToRGBA('#3B1C46', 0.4),
    blue200: '#88E2FF',
    blue300: '#7BDFFF',
    blue700: '#093B4B',
    blue700_40: hexToRGBA('#093B4B', 0.4),
    yellow200: '#E0FF1A',
    yellow300: '#DCFF00',
    yellow700: '#363E00',
    yellow700_40: hexToRGBA('#363E00', 0.4),
  },
  fonts: {},
  sizes: {
    xSmallCircle: '86px',
    smallCircle: '92px',
    largeCircle: '112px',
    xLargeCircle: '118px',
  },
};
