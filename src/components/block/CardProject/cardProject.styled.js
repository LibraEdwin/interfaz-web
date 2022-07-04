import { MEDIA_BREAKPOINTS } from '@styles';
import { rgba } from 'polished';
import styled from 'styled-components';

const Caption = styled.figcaption`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  color: white;
  background: ${({ theme }) => rgba(theme.colors.primary, 0.5)};
  transition: 0.4s ease-in-out;

  hr {
    width: 30px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.secondary};
    border-style: solid;
    margin-right: 0.5rem;
    display: inline-block;
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    bottom: -100%;
  }
`;

const Wrapper = styled.figure`
  position: relative;
  width: 100%;
  height: 300px;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    height: 400px;

    &:hover {
      ${Caption} {
        bottom: 0;
      }
    }
  }
`;

export default {
  Wrapper,
  Caption
};
