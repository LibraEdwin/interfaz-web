import { generateTriangle, MEDIA_BREAKPOINTS } from '@styles';
import styled from 'styled-components';

const Photo = styled.figure`
  border-radius: 50%;
  overflow: hidden;
  width: 70px;
  height: 70px;
  box-shadow: -20px 15px 0px -1px #CCD2E5;
`;

const Info = styled.div`
  h5 {
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.textBody};
    font-weight: 400;
  }
`;

const Client = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Testimony = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  max-width: 500px;
  background: ${({ theme }) => theme.colors.backgroundBody};
  border-radius: 0.5rem;
  padding: 1.7rem 1rem;
  line-height: 1.75;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 2rem;
    ${generateTriangle('down', '0.75rem', ({ theme }) => theme.colors.backgroundBody)}
  }

  span {
    font-size: 32px;
    color: ${({ theme }) => theme.mode === 'light' ? theme.colors.primary : theme.colors.secondary};
    position: relative;
    display: inline-block;
    width: 50px;
    height: 10px;

    svg {
      position: absolute;

      &.up {
        bottom: 0;
        right: 0;
      }

      &.down {
        top: 0;
        left: 0;
      }
    }
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    padding: 3rem 1.5rem;
  }
`;

const Wrapper = styled.div`
  padding: 2rem;
`;

export default {
  Wrapper,
  Photo,
  Testimony,
  Info,
  Client
};
