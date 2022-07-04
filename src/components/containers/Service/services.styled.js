import { MEDIA_BREAKPOINTS } from '@styles';
import styled from 'styled-components';

export const WrapperService = styled.div`
  /* text-align: justify; */
  padding: 2rem 2rem 2rem;
`;

export const ContainerService = styled.div`
  ${MEDIA_BREAKPOINTS.laptop} {
    display: flex;
  }
`;

export const Figura = styled.figure`
  position: relative;
  width: 100%;  
  height: 130px;
  cursor: pointer;
  overflow: hidden;
  margin: auto;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain!important;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    max-width: 100px;
    margin-right: 50px;
  }
  ${MEDIA_BREAKPOINTS.desktop} {
    max-width: 180px;
  }
  ${MEDIA_BREAKPOINTS.desktopL} {
    max-width: 230px;
  }
`;

export const NameService = styled.h2`
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2.5rem;

  ${MEDIA_BREAKPOINTS.laptop} {
    text-align: start;
  }
  ${MEDIA_BREAKPOINTS.desktop} {
    font-size: 36px;
  }
`;

export const DetailService = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1.5rem;

  ${MEDIA_BREAKPOINTS.tablet} {
    padding-left: 2rem;
    padding-right: 2rem;
  } 
  ${MEDIA_BREAKPOINTS.laptop} {
    padding-right: 100px;
  }
  ${MEDIA_BREAKPOINTS.desktop} {
    padding-right: 200px;
  }
  ${MEDIA_BREAKPOINTS.desktopL} {
    padding-right: 300px;
  }
`;

export const ContainButton = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2.5rem;
  padding-top: 2rem;
  margin: auto;

  ${MEDIA_BREAKPOINTS.laptop} {
    justify-content: start;
    width: 100%;
    border: none;
  }
`;

export const Line = styled.div`
  border-bottom: 1px solid #CCD2E5;
  width: 50%;
  margin: auto;

  ${MEDIA_BREAKPOINTS.laptop} {
    margin: 0;
    left: 0px;
    position: absolute;
  }
`;

export const WaterMark = styled.section`
  ${MEDIA_BREAKPOINTS.laptop} {
    background-image: url("/img/marca-agua.png");
    background-repeat:no-repeat;
    background-size: contain;
    height: auto;
    background-position: right;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
  // background-image: linear-gradient(rgb(255 251 251 / 86%),rgb(255 255 255 / 86%)), url("/img/marca-agua.png");
`;
