// @ts-check
import { BLUE_SCALE, BLUE_SCALE_FOOTER, COLORS, FONTS, FONTS_SIZES, GRAY_SCALE, SHADOWS, WHITE_SCALE, YELLOW_SCALE } from '../constants';

/**
 * @constant
 * @type {import('../themeInterface').CustomTheme}
 * @default
 */
const THEME_LIGHT = {
  mode: 'light',
  colors: {
    primary: COLORS.blue,
    secondary: COLORS.blueWhite,
    accent: '#A6B7EC',
    accent2: '#CCE0E5',
    accent3: '#a5b6ec',
    accentContac: BLUE_SCALE[500],
    accentFooter: BLUE_SCALE_FOOTER[500],
    accent6: WHITE_SCALE[400],
    info: GRAY_SCALE[300],
    warning: YELLOW_SCALE[300],
    danger: COLORS.red,
    success: COLORS.green,
    gray: GRAY_SCALE[800],
    light: GRAY_SCALE[200],
    link: COLORS.blueWhite,
    backgroundBody: COLORS.white,
    textBody: COLORS.black
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

export default THEME_LIGHT;
