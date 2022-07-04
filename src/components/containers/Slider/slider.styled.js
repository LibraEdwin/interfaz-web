import { MEDIA_BREAKPOINTS } from '@styles';
import styled from 'styled-components';

const Item = styled.div``;

const Wrapper = styled.div`
  .swiper {
    padding-bottom: 2rem;
  }

  .swiper-button-prev {
    left: 40%;
  }

  .swiper-button-next {
    right: 40%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.secondary};
    top: initial;
    bottom: 0;

    &::after {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  .swiper-button-disabled {
    display: none;
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    .swiper-button-prev {
      left: 0;
      bottom: initial;
      top: 50%;
    }

    .swiper-button-next {
      right: 0;
      bottom: initial;
      top: 50%;
    }
  }
`;

export default {
  Wrapper,
  Item
};
