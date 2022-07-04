import styled from 'styled-components';
import { MEDIA_BREAKPOINTS } from '@styles';

export const DescriptionUs = styled.p`
  padding: 0 3rem 0 0.5rem;
  text-align: justify;

  ${MEDIA_BREAKPOINTS.desktop} {
    margin-top: 3rem
  }
`;

export const ContainButton = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2.5rem;
  padding-top: 1rem;
  margin: auto;

  ${MEDIA_BREAKPOINTS.laptop} {
    width: 70%;
    margin-right: 0;
  }
`;
