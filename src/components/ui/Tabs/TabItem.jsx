import { MEDIA_BREAKPOINTS } from '@styles';
import styled, { css } from 'styled-components';

const TabItem = styled.li`
  display: inline-block;
  padding: 0.5rem 0;
  cursor: pointer;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;

  &:first-child {
    margin-right: 100%;
  }
  
  ${({ theme, active }) => active && css`
    border-color: ${theme.colors.secondary};
  `}

  ${MEDIA_BREAKPOINTS.tablet} {
    &:first-child {
      margin: 0;
    }
  }
`;

export default TabItem;
