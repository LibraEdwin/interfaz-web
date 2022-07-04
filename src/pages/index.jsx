import { Banner, CardTestimony, Contact } from '@components/block';
import { Container, Section, Slider } from '@components/containers';
import SubTitle from '@components/typography/SubTitle';
import { SwiperSlide } from 'swiper/react';
import { BREAKPOINTS } from '@styles';
import { ProjectList } from '@components/sections';
import configWeb from '../../configWeb.json';

const optionsSliderTestimonials = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  [BREAKPOINTS.sm]: {
    slidesPerView: 1.4
  },
  [BREAKPOINTS.md]: {
    slidesPerView: 2
  },
  [BREAKPOINTS.lg]: {
    slidesPerView: 2,
    spaceBetween: 150
  }
};

const Home = () => {
  const { WsspContacto } = configWeb.MenzajesWhatsApp;
  return (
    <>
      <Banner />
      <ProjectList projects={configWeb.projects} />
      <Section color='accent2' id="testimonials">
        <Container className="my-lg-5">
          <SubTitle className='text-center mb-5'>LO QUE DICEN DE NOSOTROS</SubTitle>
          <Slider
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            breakpoints={optionsSliderTestimonials}
            items={[1, 2, 3, 4, 5]}
            render={(testimony) => (
              <SwiperSlide key={testimony}>
                <CardTestimony />
              </SwiperSlide>
            )}>
          </Slider>
        </Container>
      </Section>
      <Section color='accentContac' id="testimonials" className='p-0'>
        {/* <Container> */}
        <Contact WsspContacto={WsspContacto} />
        {/* </Container> */}
      </Section >
    </>
  );
};

export default Home;
