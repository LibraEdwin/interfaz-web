import { MEDIA_BREAKPOINTS_MINMAX } from '@styles';
import styled, { css } from 'styled-components';

const Button = styled.button`
position: relative;
    ${({ variante, type }) => {
    let cssFinal = '';

    if (type === 'whatsapp') {
      cssFinal += `
        padding: 0;
        width: 50px;
        height: 50px;
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 10;

        @media(min-width: 998px) {
          position: relative;
          width: auto;
          height: auto;
          bottom: initial;
          right: initial;
        }
      `;
    }

    if (variante === 'primary') {
      cssFinal += `
                text-decoration: none;
                display: inline-flex;
                flex-direction: row;
                align-items: center;
                padding: 8px 16px;
                background: #09B6E8;
                border: 1px solid #09B6E8;
                border-radius: 8px;
                gap: 10px;

                font-family: 'Quicksand';
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 22px;
                
                color: #FFFFFF;
                flex: none;
                order: 1;
                flex-grow: 0;

                &:hover {
                  color: white;
                }
              `;
    }

    return css`
      ${cssFinal}
    `;
  }
  }

  ${({ secction }) => {
    let cssFinal = '';

    if (secction === 'contacto') {
      cssFinal += `
                position: absolute;
                top: 333px;
                left: 50%;
                margin-left: -123.645px;
              `;
    }

    return css`
      ${cssFinal}
    `;
  }
  }

  ${MEDIA_BREAKPOINTS_MINMAX.tablet} {
  ${({ secction }) => {
    let cssFinal = '';

    if (secction === 'contacto') {
      cssFinal += `
              position: absolute;
              top: 381px;
              left: 50%;
              margin-left: -123.645px;
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

export default Button;
