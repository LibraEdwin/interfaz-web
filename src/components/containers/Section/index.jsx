import styled, { css } from 'styled-components';
import { MEDIA_BREAKPOINTS, MEDIA_BREAKPOINTS_MINMAX } from '@styles/constants';

const Section = styled.section`
  padding: 3rem 0;
  ${({ theme, color }) => {
    if (color in theme.colors) {
      return css`
        background: ${theme.colors[color]};
      `;
    } else {
      return css`
        background: ${color};
      `;
    }
  }}

  ${MEDIA_BREAKPOINTS_MINMAX.mobile} {
    ${({ seccion }) => {
    let cssFinal = '';

    if (seccion === 'sinPadding') {
      cssFinal += `
              padding: 0;
              `;
    }

    return css`
      ${cssFinal}
    `;
  }}
  }
  ${MEDIA_BREAKPOINTS.tablet} {
  padding: 4rem 0;
  ${({ seccion }) => {
    let cssFinal = '';

    if (seccion === 'sinPadding') {
      cssFinal += `
            padding: 0;
            `;
    }

    return css`
    ${cssFinal}
  `;
  }}
}
  ${MEDIA_BREAKPOINTS.laptop} {
  padding: 5rem 0;
  ${({ seccion }) => {
    let cssFinal = '';

    if (seccion === 'sinPadding') {
      cssFinal += `
            padding: 0;
            `;
    }

    return css`
    ${cssFinal}
  `;
  }}
}
`;

export default Section;
