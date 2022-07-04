import styled, { css } from 'styled-components';

const SubTitle = styled.h1`
  ${({ align }) => css`
  text-align: ${align}
  `}
`;

export default SubTitle;
