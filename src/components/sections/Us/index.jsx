import { Container, Figure, Section } from '@components/containers';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import { RiWhatsappLine } from 'react-icons/ri';
import MarcaAgua from '@components/containers/MarcaAgua';
import { DescriptionUs, ContainButton } from './us-styled';
import { Button } from '@components/ui';

const Us = () => {
  return (
    <>
      <Section>
        <Container>
          <Row className="d-flex gx-md-5 gx-lg-5 justify-content-center">
            <Col className='col-2 col-md-3 col-lg-4 align-self-start d-flex justify-content-center'>
              <Figure>
                <Image
                  src="/img/logo-nosotros.png"
                  layout="fill"
                  objectFit='cover'
                />
              </Figure>
            </Col>
            <Col className="col-10 col-md-9 col-lg-8 ps-xxl-5 pe-xxl-5 p-0 justify-content-center">
            <MarcaAgua image='/img/marca-agua.png'>
              <DescriptionUs>
              <p>
              Sabemos que existe una gran brecha y desconfianza entre las personas y la tecnología. Pero hoy queremos que esa distancia y sensación de inalcanzable, se acorte.<br/><br/>
              Nuestro propósito es hacer más fuerte el vínculo entre las personas y la tecnología. La forma de hacerlo sera escuchando las ideas de las personas para crea interfaces o productos digitales que reflejen sus beneficios y hagan sentir que solucionan sus problemas del día a día.
              </p>
              <p>
              Somos un equipo en constante aprendizaje, curiso y creativo. Apasionados por la tecnología, la innovación y las nuevas ideas.
              </p>
              <p>
              Escuchamos y ayudamos a nuevas marcas, negocios e instituciones a crecer y lanzar sus ideas convertidas en interfaces digitales.
              </p>
              </DescriptionUs>
              </MarcaAgua>
            </Col>
            <ContainButton>
              <Button variante='primary'><RiWhatsappLine size='1.2em'/>Cuéntanos tu idea</Button>
            </ContainButton>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Us;
