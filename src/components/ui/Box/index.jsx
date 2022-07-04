import { BLUE_SCALE, MEDIA_BREAKPOINTS, MEDIA_BREAKPOINTS_MINMAX } from '@styles';
import styled, { css } from 'styled-components';

const BoxClaro = styled.div`
  margin-left: 75px;
  width: 75px;
  height: 75px;
  animation-name: animacionContactosClaro;
  animation-duration: ${({ tiempo }) => tiempo};
  //animation-duration: 5s;
  animation-iteration-count: infinite;

    
    
  @keyframes animacionContactosClaro {
    0%   {background-color: ${BLUE_SCALE[500]};}
    25%   {background-color: ${BLUE_SCALE[400]};}
    50%  {background-color: ${BLUE_SCALE[500]};}
    75%   {background-color: ${BLUE_SCALE[400]};}
    100% {background-color: ${BLUE_SCALE[500]};}
  }
`;

const BoxOscuro = styled.div`
  width: 75px;
  height: 75px;
  animation-name: animacionContactosOscuro;
  animation-duration: ${({ tiempo }) => tiempo};
  //animation-duration: 5s;
  animation-iteration-count: infinite;
    

      
  @keyframes animacionContactosOscuro {
    0%   {background-color: ${BLUE_SCALE[600]};}
    25%   {background-color: ${BLUE_SCALE[500]};}
    50%  {background-color: ${BLUE_SCALE[600]};}
    75%   {background-color: ${BLUE_SCALE[500]};}
    100% {background-color: ${BLUE_SCALE[600]};}
  }
`;

const BoxStyled = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  
  ${MEDIA_BREAKPOINTS_MINMAX.mobile} {
    transform: scale(80%);
    ${({ seccion }) => {
    let cssFinal = '';

    if (seccion === 'contactoTable') {
      cssFinal += `
                display:none;
              `;
    }

    return css`
      ${cssFinal}
    `;
  }}
    ${({ seccion }) => {
    let cssFinal = '';

    if (seccion === 'contactoMobile') {
      cssFinal += `
                display:block;
              `;
    }

    return css`
      ${cssFinal}
    `;
  }}
  }

  ${MEDIA_BREAKPOINTS_MINMAX.tablet} {
    transform: scale(80%);
    ${({ seccion }) => {
    let cssFinal = '';

    if (seccion === 'contactoTable') {
      cssFinal += `
                display:block;
              `;
    }

    return css`
      ${cssFinal}
    `;
  }}
    ${({ seccion }) => {
    let cssFinal = '';

    if (seccion === 'contactoMobile') {
      cssFinal += `
                display:none;
              `;
    }

    return css`
      ${cssFinal}
    `;
  }}
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    transform: scale(100%);
  }

${MEDIA_BREAKPOINTS_MINMAX.Minimobile} {
  transform: scale(70%);
}
`;

// eslint-disable-next-line react/prop-types
const Box = ({ tiempo, ...prots }) => {
  return (
    <BoxStyled {...prots}>
      <BoxClaro tiempo={tiempo} />
      <BoxOscuro tiempo={tiempo} />
    </BoxStyled>
  );
};

export default Box;
