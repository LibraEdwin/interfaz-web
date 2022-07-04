import styled from 'styled-components';
import { MEDIA_BREAKPOINTS } from '@styles';

const Wrapper = styled.a`
position: relative;
display: block;
width: 100%;
height: 30px;

img {
  width: 100%;
  height: 100%;
}

${MEDIA_BREAKPOINTS.laptop} {
  img {
    object-position: left;
  }
}
`;

export default {
  Wrapper
};
