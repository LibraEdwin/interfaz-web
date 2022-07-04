import { RESET_BUTTON } from '@styles';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const ToggleStyled = styled.button`
  ${RESET_BUTTON}
  color: ${({ theme, light }) => light ? 'white' : theme.colors.primary};
  padding-left: 0;
`;

const NavButtonToggle = ({ ...props }) => {
  return (
    <ToggleStyled {...props}> <FaBars /> </ToggleStyled>
  );
};

export default NavButtonToggle;
