import { MEDIA_BREAKPOINTS_MINMAX } from '@styles';
import styled, { css } from 'styled-components';

const Title = styled.h1`
  position: relative;
  font-style: normal;
  width: 100%;

  ${MEDIA_BREAKPOINTS_MINMAX.mobile} {
    ${({ variante }) => {
    let cssFinal = '';
    if (variante === 'contacto') {
      cssFinal += `
            font-family: 'Quicksand';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 148%;

            text-align: center;
            text-transform: uppercase;
            color: #CCE0E5;
                  `;
    }
    return css`
            ${cssFinal}
          `;
  }}
  
  ${({ secction }) => {
    let cssFinal = '';

    if (secction === 'contacto') {
      cssFinal += `
                position: absolute;
                top: 186px;
              `;
    }

    return css`
      ${cssFinal}
    `;
  }
  }
  }

  ${MEDIA_BREAKPOINTS_MINMAX.tablet} {
    ${({ variante }) => {
    let cssFinal = '';
    if (variante === 'contacto') {
      cssFinal += `
            font-family: 'Quicksand';
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 148%;
            text-align: center;
            text-transform: uppercase;
            color: #CCE0E5;
                  `;
    }
    return css`
            ${cssFinal}
          `;
  }}
  
  ${({ secction }) => {
    let cssFinal = '';

    if (secction === 'contacto') {
      cssFinal += `
                position: absolute;
                top: 219px;
              `;
    }

    return css`
      ${cssFinal}
    `;
  }
  }
  }
  
${MEDIA_BREAKPOINTS_MINMAX.Minimobile} {
  font-size: 1rem;
}

`;

export default Title;
