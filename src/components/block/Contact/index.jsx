import { Button, Box, Title } from '@components/ui';
import ContactoStyled from './contacto.styled';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = (WsspContacto) => {
  return (
    <ContactoStyled.Wrapper>
      <div>
        <Box tiempo='12s' seccion='contactoTable' top='61px' left='4.93%' />
        <Box tiempo='10s' seccion='contactoTable' top='31px' left='41.14%' marginLeft='-75px' />
        <Box tiempo='8s' seccion='contactoTable' top='29px' right='11.39%' />
        <Box tiempo='7s' seccion='contactoTable' bottom='109px' left='17.43%' />
        <Box tiempo='12s' seccion='contactoTable' bottom='63px' left='63.75%' marginLeft='-75px' />
        <Box tiempo='10s' seccion='contactoTable' bottom='16px' right='5.07%' />
      </div>
      <div>
        <Box tiempo='12s' seccion='contactoMobile' top='10px' left='13%' />
        <Box tiempo='10s' seccion='contactoMobile' top='16px' right='11.53%' />
        <Box tiempo='8s' seccion='contactoMobile' top='224px' left='10.73%' />
        <Box tiempo='7s' seccion='contactoMobile' bottom='162.72px' right='13.39%' />
        <Box tiempo='12s' seccion='contactoMobile' bottom='17.72px' left='5%' />
        <Box tiempo='10s' seccion='contactoMobile' bottom='14.72px' right='9%' />
      </div>
      <Title variante='contacto' secction='contacto'>
        NOS GUSTA ESCUCHAR LAS IDEAS<br />
        ¿QUE TIENES EN MENTE?
      </Title>
      <Button
        as="a"
        href={WsspContacto.WsspContacto}
        target="_blank"
        variante='primary'
        secction='contacto'>
        <FaWhatsapp />
        Agenda una reunion
      </Button>
    </ContactoStyled.Wrapper>
  );
};

export default Contact;
