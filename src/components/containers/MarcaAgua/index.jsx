import styled, { css } from 'styled-components';
import { MEDIA_BREAKPOINTS } from '@styles';

// const MarcaAgua = styled.div`
//   ${({ image }) => css`
//     width: 100%;
//     background-image: url(${image});
//     background-position: center;
//     background-size: cover;
//     position: relative;
//   `}
// `;

export const MarcaAgua = styled.section`
  ${({ image }) => css`
    background-image: url(${image});
    background-repeat:no-repeat;
    background-position: 80px;
    background-size: contain;
    height: auto;
    margin-bottom: 3rem;
  `}

  ${MEDIA_BREAKPOINTS.mobile} {
    background-position: -300px -300px;
  }
`;

export default MarcaAgua;
