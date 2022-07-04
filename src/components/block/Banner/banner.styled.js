import { BLUEWHITE_SCALE, MEDIA_BREAKPOINTS, RESET_BUTTON, TRANSITIONS } from '@styles';
import { darken } from 'polished';
import styled, { keyframes } from 'styled-components';

const AnimateDownUp = keyframes`
  10% {
    top: -5px;
  }

  50% {
    top: 30px;
  }

  100% {
    top: 0;
  }
`;

const SurveyImage = styled.figure`
  img {
    height: 100%;
    position: absolute;
    left: 40%;
  }
  ${MEDIA_BREAKPOINTS.mobile} {
    img {
      left: 60%;
    }
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    position: relative;
    height: 100%;

    img {
      width: 100%;
      object-fit: contain;
      object-position: bottom;
      left: 0;
      z-index: 1;
    }
  }
`;

const SurveyText = styled.div`
  position: relative;
  display: inline;

  img {
    width: 116px;
    display: block;
    position: absolute;
    left: -2rem;
    z-index: 3;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    img {
      width: 250px;
    }
  }
`;

const Image = styled.figure`
  width: 100%;
  height: 200px;
  position: relative;
  padding: 1rem;

  img {
    animation: ${AnimateDownUp} 5s infinite;
  }

  ${MEDIA_BREAKPOINTS.mobile} {
    height: 350px;
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    height: 500px;
  }
`;

const Button = styled.button`
  ${RESET_BUTTON}
  margin-top: 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  border-radius: 0.5rem;
  transition: ${TRANSITIONS.base};

  &::after {
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-arrow-right' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'/%3E%3C/svg%3E");
    background-position: center;
    background-size: contain;
    width: 20px;
    height: 20px;
    display: inline-block;
    opacity: 0;
    margin-left: -20px;
    transition: inherit;
  }

  &:hover {
    background: ${({ theme }) => darken(0.1, theme.colors.secondary)};

    &::after {
      opacity: 1;
      margin-left: 0.5rem;
    }
  }
`;

const Caption = styled.div`
  color: ${BLUEWHITE_SCALE[100]};
  text-align: center;

  ${MEDIA_BREAKPOINTS.tablet} {
    text-align: left;
  }
`;

const Title = styled.h2`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: 1.5rem;
  font-weight: ${props => props.weight || 500};
  max-width: 300px;
  margin-top: -2rem;
  
  
  ${MEDIA_BREAKPOINTS.mobile} {
    max-width: initial;
    font-size: 2rem;
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    font-size: 2.75rem;
    text-align: left;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    font-size: 3.5em;
    display: block;
  }
`;

const BannerItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 90%;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
`;

const Wrapper = styled.div`
  height: calc(100vh - 98px);
  max-height: 550px;
  overflow: hidden;
  background: ${({ theme, color }) => theme.colors[color]};
  position: relative;

  ${MEDIA_BREAKPOINTS.laptop} {
    max-height: initial;
  }
`;

const TitleSecundario = styled.div`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 25px;

  ${MEDIA_BREAKPOINTS.laptop} {
    font-size: 2rem;
    padding-top: 8%;
    padding-left: 4%;
    line-height: 1.3;
  }
`;

const ParrafoSecundario = styled.div`
  position: absolute;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 18px;
  text-align: justify;


  top: 5rem;
  width: 50%;
  z-index: 200;

  ${MEDIA_BREAKPOINTS.laptop} {
    padding: 50px;
    padding-top: 10%;
    font-size: 1.5rem;
    line-height: 1.3;
    width: 60%;
  }
`;

const ImgSecundario1 = styled.div`
img{
  position: absolute;
  bottom:0;
  right: -40px;
  height:80%;
  z-index: 100;
}
`;

const ImgSecundario2 = styled.div`
img{
  position: absolute;
  top:45%;
  width: 45%;
  max-width: 200px;

  ${MEDIA_BREAKPOINTS.laptop} {
    position: absolute;
    top:50%;
    left: 25%;
  }
}
`;

const Arrow = styled.div`
  position: absolute;
  font-size: 3rem;
  color: #09B6E8;
  z-index: 10;
  animation-name: flecha;
  animation-duration: 3s;
  animation-iteration-count: infinite;

  @keyframes flecha {
    0%   { top:75%;}
    50%  { top:80%;}
    100% { top:75%;}
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    padding-left: 5%;
  }
`;

export default {
  Wrapper,
  BannerItem,
  Title,
  Image,
  Caption,
  Button,
  SurveyText,
  SurveyImage,
  TitleSecundario,
  ParrafoSecundario,
  ImgSecundario1,
  ImgSecundario2,
  Arrow
};
