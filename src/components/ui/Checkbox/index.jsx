import styled from 'styled-components';

const CheckboxStyled = styled.input``;

const Checkbox = ({ ...props }) => <CheckboxStyled type="checkbox" {...props} />;

export default Checkbox;
