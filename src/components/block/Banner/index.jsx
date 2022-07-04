import { Container, Slider } from '@components/containers';
import { Cubes, SlideDown } from '@components/ui';
import { Col } from 'react-bootstrap';
import BannerStyled from './banner.styled';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { AiOutlineArrowDown } from 'react-icons/ai';

const bannerSlidesContent = [
  {
    id: 'banner-slide-1',
    title: 'Toda idea puede hacerse relidad ...',
    image: '/img/celular-banner-small.png'
  },
  {
    id: 'banner-slide-2',
    title: 'transformando esa idea en una interfaz digital.',
    image: '/img/celular-banner-small.png'
  }
];

const Banner = () => {
  return (
    <BannerStyled.Wrapper color='primary'>
      <Container className='h-100 position-relative'>
        <Slider
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          effect={'fade'}
          className='h-100'
          items={bannerSlidesContent}
          render={(bannerItem) => (
            <SwiperSlide key={bannerItem.id}>
              <BannerStyled.BannerItem>
                <Col xs={12} md={6}>
                  <BannerStyled.Title className='mt-5' color='light' weight='700'>
                    {bannerItem.title}
                  </BannerStyled.Title>
                </Col>
                <Col xs={12} md={6}>
                  <BannerStyled.Image>
                    <Image
                      src={bannerItem.image}
                      layout='fill'
                      objectFit='contain'
                      priority
                      quality={100} />
                  </BannerStyled.Image>
                </Col>
              </BannerStyled.BannerItem>
            </SwiperSlide>
          )}
        >
        </Slider>
        <Cubes />
        {/* <SlideDown href='#testimonials' /> */}
        <BannerStyled.Arrow>
          <AiOutlineArrowDown />
        </BannerStyled.Arrow>
      </Container>
    </BannerStyled.Wrapper>
  );
};

export default Banner;
