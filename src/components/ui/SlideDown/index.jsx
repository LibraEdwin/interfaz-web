import { MEDIA_BREAKPOINTS, TRANSITIONS } from '@styles';
import styled, { keyframes } from 'styled-components';

const AnimateBounce = keyframes`
  0% {
    top: 5px;
    animation-timing-function: ease-in;
  }
  35% {
    top: 100%;
    animation-timing-function: ease-out;
  }
  100% {
    top: 5px;
  }
`;

const SlideDown = styled.a`
  width: 24px;
  height: 40px;
  border: 1px solid white;
  border-radius: 20px;
  margin: 0 auto;
  transition: ${TRANSITIONS.base};
  position: absolute;
  bottom: 60px;
  left: 2rem;
  z-index: 3;

  &::before {
    content: 'SCROLL';
    color: white;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 3px;
    position: absolute;
    bottom: -30px;
    transform: translateX(-25%);
  }

  &::after {
    content: '';
    width: 6px;
    height: 6px;
    background-color: white;
    border-radius: 100%;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 5px;
    animation: ${AnimateBounce} 1.5s infinite;
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    right: 0;
  }
`;

export default SlideDown;
