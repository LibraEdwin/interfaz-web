// @ts-check

export const RED_SCALE = {
  100: '#f5bdbd',
  200: '#ee9191',
  300: '#e76464',
  400: '#e44e4e',
  500: '#dd2222',
  600: '#b11b1b',
  700: '#851414',
  800: '#580e0e',
  900: '#2c0707'
};

export const BLUE_SCALE = {
  100: '#ced9fb',
  200: '#a0b5f6',
  300: '#7190f2',
  400: '#426cee',
  500: '#1548e8',
  600: '#1139b9',
  700: '#0d2b8a',
  800: '#081c5c',
  900: '#040e2d'
};

export const GREEN_SCALE = {
  100: '#cefbda',
  200: '#a0f6b6',
  300: '#71f292',
  400: '#42ee6e',
  500: '#15e84b',
  600: '#11b93c',
  700: '#0d8a2d',
  800: '#085c1e',
  900: '#042d0f'
};

export const YELLOW_SCALE = {
  100: '#fbf0ce',
  200: '#f6e1a0',
  300: '#f2d371',
  400: '#eec442',
  500: '#e8b515',
  600: '#b99011',
  700: '#8a6c0d',
  800: '#5c4808',
  900: '#2d2304'
};

export const BLUEWHITE_SCALE = {
  100: '#d9f5fe',
  200: '#8fe3fb',
  300: '#5ed6f9',
  400: '#2dcaf7',
  500: '#09b6e8',
  600: '#078fb7',
  700: '#056986',
  800: '#034255',
  900: '#011c24'
};

export const PURPLE_SCALE = {
  100: '#f9fafe',
  200: '#e4e9f9',
  300: '#cfd8f5',
  400: '#bac7f0',
  500: '#a5b6ec'
};

export const GRAY_SCALE = {
  0: '#fff',
  100: '#f6f6f7',
  200: '#e8e9eb',
  300: '#dadce0',
  400: '#cdced4',
  500: '#bfc1c8',
  600: '#a4a6b0',
  700: '#888c99',
  800: '#6e7280',
  900: '#565a65',
  1000: '#3f4149'
};

export const BLUE_SCALE_FOOTER = {
  100: '#96aef5',
  200: '#6889f1',
  300: '#3965ed',
  400: '#1446df',
  500: '#1037b0',
  600: '#0e3099',
  700: '#0c2881',
  800: '#0a216a',
  900: '#071a52'
};

export const WHITE_SCALE = {
  0: '#b4b4b4',
  100: '#c1c1c1',
  200: '#cecece',
  300: '#dadada',
  400: '#CCE0E5',
  500: '#F4F4F4',
  600: '#4e4e4e',
  700: '#414141',
  800: '#0a216a',
  900: '#282828',
  1000: '#1b1b1b'
};

export const COLORS = {
  blue: BLUE_SCALE[500],
  blueWhite: BLUEWHITE_SCALE[500],
  red: RED_SCALE[500],
  yellow: YELLOW_SCALE[500],
  green: GREEN_SCALE[500],
  white: GRAY_SCALE[0],
  black: GRAY_SCALE[1000]
};

/**
 * Descomentar cuando se utilicen gradientes
 *
export const GRADIENTS_COLORS = {
  nameExample: `linear-gradient(90deg, ${GREEN_SCALE[500]} 0%, ${GREEN_SCALE[700]} 100%)`
};
*/

export const FONTS = {
  quickSand: '"Quicksand", sans-serif'
};

export const SHADOWS = {
  sm: '3px 3px 8px 5px rgba(233, 232, 236, 0.3)',
  base: '6px 6px 10px 8px rgba(233, 232, 236, 0.3)'
};

export const FONTS_SIZES = {
  sm: '0.75rem',
  button: '1rem',
  base: '1rem',
  lead: '2rem',
  large: '3rem',
  xlarge: '4rem'
};

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

export const MEDIA_BREAKPOINTS = {
  mobile: `@media (min-width: ${BREAKPOINTS.sm}px)`,
  tablet: `@media (min-width: ${BREAKPOINTS.md}px)`,
  laptop: `@media (min-width: ${BREAKPOINTS.lg}px)`,
  desktop: `@media (min-width: ${BREAKPOINTS.xl}px)`,
  desktopL: `@media (min-width: ${BREAKPOINTS.xxl}px)`
};

export const MEDIA_BREAKPOINTS_MINMAX = {
  Minimobile: '@media (max-width: 319px)',
  mobile: '@media (max-width: 768px)',
  tablet: '@media (min-width: 769px)'
};

export const CONTAINER_MAX_WIDTHS = {
  sm: '540px',
  md: '720px',
  lg: '1000px',
  xl: '1140px',
  xxl: '1320px'
};

export const TRANSITIONS = {
  base: '0.3s ease'
};

export const Z_INDEXS = {
  header: {
    sticky: 500,
    nav: 1000
  },
  modal: {
    overlay: 1500,
    content: 1600
  }
};
