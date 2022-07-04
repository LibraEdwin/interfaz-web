import styled from 'styled-components';
import { MEDIA_BREAKPOINTS } from '@styles/constants';

const Figure = styled.figure`
  position: relative;
  width: 100%;
  max-width: 70px;
  height: 60px;

  ${MEDIA_BREAKPOINTS.mobile} {
    max-width: 100px;
    height: 6rem;
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    max-width: 115px;
    height: 10rem;
  }
  ${MEDIA_BREAKPOINTS.laptop} {
    max-width: 200px;
    height: 17rem;
  }
  ${MEDIA_BREAKPOINTS.desktop} {
    max-width: 337px;
    height: 464px;
  }

`;

export default Figure;
