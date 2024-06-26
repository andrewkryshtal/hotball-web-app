import { hexToRGBA } from '../helpers';

export type Ttheme = typeof Theme;

export const Theme = {
  colors: {
    //occasion-related
    backgroundLight: '#222C35',
    backgroundPopup: '#3A424A',
    strokeSecondary: hexToRGBA('#8BB8D9', 0.2),
    backgroundSecondary: hexToRGBA('#8BB8D9', 0.08),
    backgroundDisabled: hexToRGBA('#8BB8D9', 0.08),
    buttonDisabled: hexToRGBA('#8BB8D9', 0.2),
    threeCirclesButtonBgColor: hexToRGBA('#8BB8D9', 0.03),
    submitButton: '#191A1C',
    secondaryText: '#A8BED1',
    secondaryText_50: hexToRGBA('#A8BED1', 0.5),
    systemError: '#FF3F2E',
    outlineText: '#4C5964',
    folderCardBg: '#093B4B',
    asanaTwitterCardBg: '#2E2E30',
    linkedInCardBg: '#2867B2',
    slackCardBg: '#510F4E',
    discordCardBg: '#5865F2',
    textPrimary: '#FFFFFF',
    textTertiary: '#4C5964',
    //color-related
    transparent: 'transparent',
    black: '#000000',
    white: '#FFFFFF',
    white_40: hexToRGBA('#FFFFFF', 0.4),
    white_60: hexToRGBA('#FFFFFF', 0.6),
    white_70: hexToRGBA('#FFFFFF', 0.7),
    orange300: '#FF672D',
    orange500: '#FF5215',
    orange500_40: hexToRGBA('#FF5215', 0.4),
    orange600: '#5E2C1A',
    orange700: '#4C1400',
    orange700_40: hexToRGBA('#4C1400', 0.4),
    purple200: '#D795ED',
    purple300: '#D289EB',
    purple300_40: hexToRGBA('#D289EB', 0.4),
    purple600: '#4F3359',
    purple700: '#3B1C46',
    purple700_40: hexToRGBA('#3B1C46', 0.4),
    blue200: '#88E2FF',
    blue300: '#7BDFFF',
    blue300_40: hexToRGBA('#7BDFFF', 0.4),
    blue600: '#224F5D',
    blue700: '#093B4B',
    blue700_40: hexToRGBA('#093B4B', 0.4),
    yellow200: '#E0FF1A',
    yellow300: '#DCFF00',
    yellow300_40: hexToRGBA('#DCFF00', 0.4),
    yellow600: '#4A511A',
    yellow700: '#363E00',
    yellow700_40: hexToRGBA('#363E00', 0.4),
    grey_100: hexToRGBA('#FFFFFF', 0.5),
    grey_500: '#4C5964',
    grey_600: '#3A424A',
    grey_600_60: hexToRGBA('#3A424A', 0.6),
    grey_800: '#191A1C',
    grey_800_80: hexToRGBA('#191A1C', 0.8),
  },
  fonts: {},
  sizes: {
    xSmallCircle: 86,
    smallCircle: 92,
    largeCircle: 112,
    xLargeCircle: 118,
  },
};
