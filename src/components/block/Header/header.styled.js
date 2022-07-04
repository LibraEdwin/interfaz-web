import { MEDIA_BREAKPOINTS } from '@styles';
import styled, { css } from 'styled-components';

const Wrapper = styled.header`
  padding: 1rem 0;
  
  ${({ light }) => !light && css`
    background: ${({ theme }) => theme.colors.primary};
  `}

  ${MEDIA_BREAKPOINTS.tablet} {
    padding: 1.3rem 0;
  }
`;

export const Wssp = styled.a`
  text-decoration: none;
`;

export default {
  Wrapper,
  Wssp
};
