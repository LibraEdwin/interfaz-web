import { Section } from '@components/containers';
import FooterStyled from './footer.styled';

const Footer = () => {
  return (
    <Section color='accentFooter' id="testimonials" className='p-0'>
      <FooterStyled.Wrapper>
        <FooterStyled.GridFooter>
          <FooterStyled.ContenidoFooter>
            <FooterStyled.ImgLogo src='/logo-light-grande.png' alt='logo' />
          </FooterStyled.ContenidoFooter>
          <FooterStyled.ContenidoFooter>
            <FooterStyled.DivEnlaces>
              <div>Empresa</div>
              <div>Nosotros</div>
              <div>Proyectos</div>
              <FooterStyled.UnirGrid top='153px' left='30%'>Servicios</FooterStyled.UnirGrid>
              <FooterStyled.UnirGrid top='153px' right='30%'>Productos</FooterStyled.UnirGrid>
            </FooterStyled.DivEnlaces>
          </FooterStyled.ContenidoFooter>
          <FooterStyled.ContenidoFooter>
            <FooterStyled.DivNoneTable>Síguenos en:</FooterStyled.DivNoneTable>
            <FooterStyled.DisplayFooter>
              <FooterStyled.LogoRedesSociales top='210px' left='33.82%' src='/fb.png' alt='fb' />
              <FooterStyled.LogoRedesSociales top='210px' left='50%' marginLeft='-12px' src='/in.png' alt='in' />
            </FooterStyled.DisplayFooter>
          </FooterStyled.ContenidoFooter>
          <FooterStyled.ContenidoFooter>
            <FooterStyled.DivNoneTable>Contactar</FooterStyled.DivNoneTable>
            <FooterStyled.DisplayFooter>
              <FooterStyled.LogoRedesSociales top='210px' right='33.82%' src='/wssp.png' alt='wssp' />
              <FooterStyled.DivNoneTable>+51 960 204 387</FooterStyled.DivNoneTable>
            </FooterStyled.DisplayFooter>
          </FooterStyled.ContenidoFooter>
        </FooterStyled.GridFooter>
        <FooterStyled.Hr />
        <FooterStyled.TextInterfaz>
            <div className='mt-3'>Copyright © {new Date().getFullYear()} - Todos los derechos reservados.</div>
        </FooterStyled.TextInterfaz>
      </FooterStyled.Wrapper>
    </Section>
  );
};

export default Footer;
