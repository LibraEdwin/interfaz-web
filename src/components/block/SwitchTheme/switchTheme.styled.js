import { MEDIA_BREAKPOINTS } from '@styles';
import { darken, lighten } from 'polished';
import styled from 'styled-components';

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => darken(0.25, theme.colors.primary)};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 6px;
    bottom: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    background: url('/img/light-bulb.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

  }
  `;

const Wrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 1.75rem;
  height: 1.5rem;
  margin-right: 1rem;

  ${MEDIA_BREAKPOINTS.tablet} {
    width: 44px;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
      background-color: ${({ theme }) => lighten(0.1, theme.colors.primary)};
    }

    &:focus + ${Slider} {
      box-shadow: 0 0 1px #2196f3;
    }

    &:checked + ${Slider}:before {
      background: url('/img/light-bulb-down.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      
      ${MEDIA_BREAKPOINTS.tablet} {
        transform: translateX(18px);
      }
    }
  }
`;

export default {
  Slider,
  Wrapper
};
