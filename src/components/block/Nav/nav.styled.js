import { BLUE_SCALE, FONTS_SIZES, generateTriangle, MEDIA_BREAKPOINTS, POSITION_RELATIVE_RESET, RESET_BUTTON, RESET_UL, TRANSITIONS, zerosIndex, Z_INDEXS } from '@styles';
import { darken, lighten, rgba } from 'polished';
import styled, { css } from 'styled-components';

const ItemLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 1rem 2rem;
  white-space: nowrap;
  font-weight: 400;
  font-size: 20px;
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
    margin-right: 20px;
    transition: inherit;
  }

  &:hover {
    border-left: 8px solid ${BLUE_SCALE[800]};
    background: ${({ theme }) => theme.colors.secondary};
    color: white;

    &::after {
      opacity: 1;
      margin-right: 0;
    }
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    padding: 0.5rem 1rem;
    font-size: ${FONTS_SIZES.base};
    transition: initial;
    font-weight: 600;
    color: ${({ theme, light }) => {
    if (light && theme.mode === 'light') return theme.colors.primary;
  }};

    border-bottom: 2px solid transparent;
    &:hover {
      background: transparent;
      border-left: 0;
      color: ${({ theme }) => lighten(0.2, theme.colors.secondary)};
      border-bottom-color: ${({ theme }) => theme.colors.secondary};
    }

    &::after {
      display: none;
    }
  }
`;

const SubList = styled.ul`
  ${RESET_UL}
  top: 100%;
  position: absolute;
  background: ${({ theme }) => darken(0.3, theme.colors.primary)};
  border-radius: 0.5rem;
  padding: 1rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
  visibility: hidden;
  opacity: 0;
  transition: ${TRANSITIONS.base};

  &::before {
    content: '';
    display: block;
    bottom: 100%;
    position: absolute;

    ${generateTriangle('up', '10px', ({ theme }) => darken(0.3, theme.colors.primary))}
  }

  ${ItemLink} {
    color: white;
  }
`;

const Item = styled.li`
  position: relative;
  padding-bottom: 1rem;
  z-index: ${Z_INDEXS.header.nav};
  ${MEDIA_BREAKPOINTS.laptop} {
    display: inline-block;
  }

  &:hover {
    ${SubList} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const ItemTitle = styled.h4`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin: 1rem 0 0.5rem 0;
  text-align: left;

  padding: 1rem 2rem;

  &::after {
    content: '';
    display: block;
    height: 2px;
    background: white;
    width: 150px;
    margin-top: 0.5rem;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    display: none;
  }
`;

const List = styled.ul`
  ${RESET_UL}
  height: 100%;
`;

const Head = styled.header`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  button {
    ${RESET_BUTTON}
    color: white;
    
    &:first-child { padding-left: 0;}
    &:last-child { padding-right: 0; font-size: 2rem}
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    display: none;
  }
`;

const Foot = styled.footer`
  padding: 1rem 2rem;
  text-align: center;
  color: white;
  width: 100%;
  font-size: ${FONTS_SIZES.sm};

  ${MEDIA_BREAKPOINTS.laptop} {
    display: none;
  }
`;

const Content = styled.div`
  ${zerosIndex(Z_INDEXS.header.nav, 'fixed')}
  background: ${BLUE_SCALE[600]};
  width: 100%;
  max-width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  left: -100%;
  right: initial;
  transition: left 0.4s ease-in-out;

  ${({ isActive }) => isActive && css`
    left: 0;
    right: 0;
  `}

  ${MEDIA_BREAKPOINTS.laptop} {
    ${POSITION_RELATIVE_RESET}
    background: transparent;
    width: auto;
    max-width: initial;
    display: inline-flex;
    margin-left: auto;
    margin-right: 1rem;
  }
`;

const Overlay = styled.div`
  ${zerosIndex(Z_INDEXS.header.nav, 'fixed')}
  background-color: ${rgba(0, 0, 0, 0.6)} ;
  backdrop-filter: blur(1px);
  opacity: 0;
  visibility: hidden;
  transition: ${TRANSITIONS.base};

  ${({ isActive }) => isActive && css`
    opacity: 1;
    visibility: visible;
  `}


  ${MEDIA_BREAKPOINTS.laptop} {
    display: none;
  }
`;

const Wrapper = styled.nav`
  position: relative;
  display: inline;
`;

export default {
  Wrapper,
  Overlay,
  Content,
  Foot,
  Head,
  List,
  ItemTitle,
  Item,
  ItemLink,
  SubList
};
