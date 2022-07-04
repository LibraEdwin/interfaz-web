// import { Container } from '@components/containers';
import { Container } from '@components/containers';
import { Paragraph } from '@components/typography';
import Title from '@components/typography/Title';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const BlockExample = styled.div`
  width: 100%;
  height: 100px;
  background: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

/** Pagina de presentacion para componentes ui */
const UI = () => {
  return (
    <>
      <section>
        <Container>
          <Title className='text-center'>Somos un equipo </Title>
          <Paragraph className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Paragraph>

          <Row className='g-5 justify-content-center'>
            <Col lg={4}>
              <BlockExample>column</BlockExample>
            </Col>
            <Col lg={4}>
              <BlockExample>column</BlockExample>
            </Col>
            <Col lg={4}>
              <BlockExample>column</BlockExample>
            </Col>
            <Col lg={4}>
              <BlockExample>column</BlockExample>
            </Col>
            <Col lg={4}>
              <BlockExample>column</BlockExample>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        {/* <h1>ELEMENTOS UI</h1> */}
        <h2>Fila y columnas</h2>
        <Row>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
        </Row>
        <h2 className='mt-5'>Columnas con un gap de 8px</h2>
        <Row className='g-2'>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
          <Col><BlockExample>column</BlockExample></Col>
        </Row>
        <h2 className='mt-5'>2 Columnas con un ancho de 4 y de 8 respectivamente</h2>
        <Row className='g-2'>
          <Col xs={4}><BlockExample>column 4</BlockExample></Col>
          <Col xs={8}><BlockExample>column 8</BlockExample></Col>
        </Row>
        <h2 className='mt-5'>Columnas Responsive xs=12 md=6 lg=3  </h2>
        <p>En <b>xs=12 (Mobile)</b> ocupan el ancho de 12/12</p>
        <p>En <b>md=6 (Tablet)</b> ocupan el ancho de 6/12</p>
        <p>En <b>lg=3 (Laptop)</b> ocupan el ancho de 3/12</p>
        <Row className='g-2'>
          <Col xs={12} md={6} lg={3}><BlockExample>column 12-6-3</BlockExample></Col>
          <Col xs={12} md={6} lg={3}><BlockExample>column 12-6-3</BlockExample></Col>
          <Col xs={12} md={6} lg={3}><BlockExample>column 12-6-3</BlockExample></Col>
          <Col xs={12} md={6} lg={3}><BlockExample>column 12-6-3</BlockExample></Col>
        </Row>
        <h2 className='mt-5'>Alineacion de columnas </h2>
        <p> Agregando la clase: <code>&apos;.justify-content-start&apos;</code> </p>
        <Row className='g-2 justify-content-start'>
          <Col xs={6}><BlockExample>column 6</BlockExample></Col>
          <Col xs={8}><BlockExample>column 8</BlockExample></Col>
        </Row>
        <p className='mt-5'> Agregando la clase: <code>&apos;.justify-content-center&apos;</code> </p>
        <Row className='g-2 justify-content-center'>
          <Col xs={6}><BlockExample>column 6</BlockExample></Col>
          <Col xs={8}><BlockExample>column 8</BlockExample></Col>
          <Col xs={5}><BlockExample>column 5</BlockExample></Col>
        </Row>
        <h2 className='mt-5'>Parrafo con margen top <code>&apos;.mt-4&apos;</code> </h2>
        <Paragraph className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque possimus, ex iusto ad explicabo, fugiat natus doloremque aspernatur aut blanditiis asperiores adipisci labore tempore, perferendis veniam repellendus in quos vel!</Paragraph>
      </Container>
    </>
  );
};

export default UI;
