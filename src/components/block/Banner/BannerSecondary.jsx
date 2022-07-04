import { Container } from '@components/containers';
import { useAppContext } from '@contexts/AppContext';
import BannerStyled from './banner.styled';
import { AiOutlineArrowDown } from 'react-icons/ai';

const BannerSecondary = () => {
  const { theme: { themeMode } } = useAppContext();

  return (
    <BannerStyled.Wrapper>
      <Container className='h-100 position-relative'>
        <BannerStyled.TitleSecundario className='mt-4'>
          ¿Qué piensan tus clientes<br />
          de tu idea, empresa o marca?
        </BannerStyled.TitleSecundario>
        <BannerStyled.ParrafoSecundario>
          Una nueva idea de negocios, un nuevo producto o la calidad de
          atención de tus servicios, deben estar en constante evaluación
          y medición <b>con:</b>
        </BannerStyled.ParrafoSecundario>
        <BannerStyled.ImgSecundario1>
          <img src="/img/recurso-1.png" alt="recurso-1" />
        </BannerStyled.ImgSecundario1>
        <BannerStyled.ImgSecundario2>
          <img src={themeMode.mode === 'dark' ? '/svg/surveys-light.svg' : '/svg/surveys.svg'} alt="" />
        </BannerStyled.ImgSecundario2>
        <BannerStyled.Arrow>
          <AiOutlineArrowDown />
        </BannerStyled.Arrow>
      </Container>
    </BannerStyled.Wrapper>
  );
};

export default BannerSecondary;
