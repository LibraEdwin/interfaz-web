// @ts-check
import { BLUE_SCALE, BLUE_SCALE_FOOTER, COLORS, FONTS, FONTS_SIZES, GRAY_SCALE, SHADOWS, WHITE_SCALE, YELLOW_SCALE } from '../constants';

/**
 * @constant
 * @type {import('../themeInterface').CustomTheme}
 * @default
 */
const THEME_DARK = {
  mode: 'dark',
  colors: {
    primary: BLUE_SCALE[800],
    secondary: COLORS.blueWhite,
    accent: '#A6B7EC',
    accent2: BLUE_SCALE[800],
    accent3: BLUE_SCALE[800],
    accentContac: '#040e2d',
    accentFooter: BLUE_SCALE_FOOTER[800],
    accent6: WHITE_SCALE[800],
    info: GRAY_SCALE[300],
    warning: YELLOW_SCALE[300],
    danger: COLORS.red,
    success: COLORS.green,
    gray: GRAY_SCALE[800],
    light: GRAY_SCALE[200],
    link: COLORS.blueWhite,
    backgroundBody: BLUE_SCALE[900],
    textBody: COLORS.white
  },
  fonts: {
    fontPrimary: FONTS.quickSand,
    fontSecondary: ''
  },
  fontSizes: {
    body: FONTS_SIZES.base
  },
  shadows: {
    small: SHADOWS.sm,
    default: SHADOWS.base
  }
};

export default THEME_DARK;
