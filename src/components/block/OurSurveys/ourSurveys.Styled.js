import { MEDIA_BREAKPOINTS } from '@styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  width: 100%;
`;

export const DivElement = styled.div`
  ${MEDIA_BREAKPOINTS.laptop} {
    display: flex;
    justify-content: center;
    margin: auto;
  }
`;

export const Imagen = styled.img`
  height: 200px;
  margin-right: 30px;

  ${MEDIA_BREAKPOINTS.laptop} {
    height: 270px;
  }
`;

export const DivElementText = styled.ul`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 22px;
  text-align: left;
  line-height: 35px;

  
  ${MEDIA_BREAKPOINTS.laptop} {
    font-size: 1.2rem;
  }
`;

export const ItemText = styled.li`
  list-style: none;

  &::before{
    content: "✔️";
    width: 30px;
    display: inline-block;
    margin-left: -2rem;
  }
  sup{
    color: orangered;
    font-weight: bold;
  }
`;

export const DivButton = styled.div`

  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 30px;

  ${MEDIA_BREAKPOINTS.laptop} {
    justify-content: start;
  }
`;
