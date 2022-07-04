import styled, { css } from 'styled-components';
import { MEDIA_BREAKPOINTS } from '@styles';

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  ${MEDIA_BREAKPOINTS.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ columns }) => columns && css`
    ${MEDIA_BREAKPOINTS.laptop} {
      grid-template-columns: repeat(${columns}, 1fr);
    }
  `}
`;

export default Grid;
