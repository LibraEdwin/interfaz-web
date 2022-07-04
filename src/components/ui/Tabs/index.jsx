import { MEDIA_BREAKPOINTS, RESET_UL } from '@styles';
import styled from 'styled-components';

const Tabs = styled.ul`
  ${RESET_UL}

  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  ${MEDIA_BREAKPOINTS.tablet} {
    justify-content: center;
    gap: 2.5rem;
  }
`;

export default Tabs;
