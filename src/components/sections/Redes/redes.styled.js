import styled from 'styled-components';
import { MEDIA_BREAKPOINTS } from '@styles';

export const ContainSocialMedia = styled.div` 
  text-align: center;
  gap: 1rem;
  display: flex;

  ${MEDIA_BREAKPOINTS.tablet} {
    gap: 3rem;
  }
`;
