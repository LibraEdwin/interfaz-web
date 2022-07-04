import PropTypes from 'prop-types';
import { Swiper } from 'swiper/react';
import { EffectFade, Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import SliderStyled from './slider.styled';

const Slider = ({ items, render, className, ...props }) => {
  return (
    <SliderStyled.Wrapper className={className}>
      <Swiper
        className='h-100'
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        {...props}>
        {items.map(render)}
      </Swiper>
    </SliderStyled.Wrapper>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired
};

export default Slider;
