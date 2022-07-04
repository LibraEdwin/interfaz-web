import styled, { css } from 'styled-components';

const Spiner = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  // animation

  ${({ sm }) => sm && css`
    width: 1rem;
    height: 1rem;
    border-width: 0.2em;
  `}
`;

export default Spiner;
