// @ts-check
import { darken } from 'polished';
import { createGlobalStyle, css } from 'styled-components';
import { TRANSITIONS } from './constants';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
  
  html {
    scroll-behavior: smooth;
  }
  :focus {
    outline: none;
  }

  ${({ theme }) => css`
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      overflow-x: hidden;
      background: ${theme.colors.backgroundBody};
      color: ${theme.colors.textBody};
      font-family: ${theme.fonts.fontPrimary};
      font-size: ${theme.fontSizes.body};
      transition: ${TRANSITIONS.base};
    }

    a {
      color: ${theme.colors.link};
      cursor: pointer;

      &:hover {
        color: ${darken(0.15, theme.colors.link)};
      }
    }

    button {
      cursor: pointer;
      font-size: ${theme.fontSizes.body};
      font-family: ${theme.fonts.fontPrimary};
    }

    p {
    line-height: 1.8;
    margin-block-start: 0;
    }
    h1, h2, h3, h4, h5, h6 {
      margin-block-start: 0;
    }
    figure {
      margin: 0;
    }
  `}

  .transition-base {
    transition: ${TRANSITIONS.base};
  }
`;
