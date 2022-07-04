import { BLUEWHITE_SCALE, BLUE_SCALE, MEDIA_BREAKPOINTS } from '@styles';
import styled, { keyframes } from 'styled-components';

const AnimateCube1 = keyframes`
  0% { background: ${BLUE_SCALE[700]} }

  33% { background: ${BLUE_SCALE[400]} }
  
  66% { background: ${BLUE_SCALE[200]} }
  
  100% { background: ${BLUEWHITE_SCALE[300]} }
`;

const AnimateCube2 = keyframes`
  0% { background: ${BLUE_SCALE[400]} }

  33% { background: ${BLUE_SCALE[200]} }

  66% { background: ${BLUEWHITE_SCALE[300]} }

  100% { background: ${BLUE_SCALE[700]} }
`;
const AnimateCube3 = keyframes`
  0% { background: ${BLUE_SCALE[200]} }
  
  33% { background: ${BLUEWHITE_SCALE[300]} }
  
  66% { background: ${BLUE_SCALE[700]} }

  100% { background: ${BLUE_SCALE[400]} }
`;

const AnimateCube4 = keyframes`
  0% { background: ${BLUEWHITE_SCALE[300]} }
  
  33% { background: ${BLUE_SCALE[700]} }
  
  66% { background: ${BLUE_SCALE[400]} }

  100% { background: ${BLUE_SCALE[200]} }
`;
const CubesStyled = styled.div`
  position: absolute;
  z-index: 3;
  bottom: 2rem;
  right: 1rem;
  display: grid;
  width: 135px;
  grid-template-columns: repeat(3, 1fr);

  div {
    height: 45px;

    &:nth-child(3) {
      background: ${BLUE_SCALE[700]};
      animation: ${AnimateCube1} 3s ease-in-out infinite;
    }

    &:nth-child(5) {
      background: ${BLUE_SCALE[400]};
      animation: ${AnimateCube2} 3s ease-in-out infinite;
    }

    &:nth-child(7) {
      background: ${BLUE_SCALE[200]};
      animation: ${AnimateCube3} 3s ease-in-out infinite;
    }

    &:nth-child(9) {
      background: ${BLUEWHITE_SCALE[300]};
      animation: ${AnimateCube4} 3s ease-in-out infinite;
    }
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    width: 120px;
    div {
      height: 40px;
    }
  }
`;

const Cubes = () => {
  return (
    <CubesStyled>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </CubesStyled>
  );
};

export default Cubes;
