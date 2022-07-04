import { Button, Title } from '@components/ui';
import React from 'react';
import { DivButton, DivElement, ItemText, DivElementText, Imagen, Wrapper } from './ourSurveys.Styled';
import { BsWhatsapp } from 'react-icons/bs';
import { Container } from 'react-bootstrap';

const OurSurveys = (Wsspencuestas) => {
  return (
    <Container>
      <Wrapper>
        <Title>
          NUESTRAS ENCUESTAS
        </Title>
        <DivElement>
          <div >
            <Imagen src='/img/eol_1.png' alt='logo' />
          </div>
          <div>
            <DivElementText>
              <ItemText>
                Se basan en la técnica de encuestas web en línea.
              </ItemText>
              <ItemText>
                Pueden ser diseñadas y lanzadas en pocos días.
              </ItemText>
              <ItemText>
                Pueden ser contestadas por tus clientes en cualquier momento, lugar o dispositivo celular, tablet o PC.
              </ItemText>
              <ItemText>
                Tienen mayor alcance al enviarse por medio de redes sociales, email, mensajes de texto o whatsapp<sup>(nuevo)</sup>
              </ItemText>
            </DivElementText>
            <DivButton>
              <Button
                as="a"
                href={Wsspencuestas.Wsspencuestas}
                target="_blank"
                variante='primary' >
                <BsWhatsapp />
                Lanza tu encuesta con nosotros
              </Button>
            </DivButton>
          </div>
        </DivElement>
      </Wrapper>
    </Container>
  );
};

export default OurSurveys;
