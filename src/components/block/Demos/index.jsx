import React from 'react';
import { Container, Section } from '@components/containers';
import SubTitle from '@components/typography/SubTitle';
import { Row, Col } from 'react-bootstrap';
import { Button } from '@components/ui';
import Image from 'next/image';
import { FigureDemo, BlokDemo } from './demos.styled';
import PropTypes from 'prop-types';

const Demo = ({ items }) => {
  return (
    <>
      <Section>
        <Container>
          <SubTitle className='text-center mb-lg-5'>MIRA NUESTRAS DEMOS</SubTitle>
          <Row className='g-5 m-auto justify-content-center'>
            {
              items && items.map((item, key) => {
                return (
                  <Col lg={4} key={key}>
                    <BlokDemo>
                      <FigureDemo>
                        <Image
                          src={item.img}
                          layout="fill"
                          objectFit='cover'
                        />
                      </FigureDemo>
                      <Button variante='primary' target="_blank" as='a' href={item.url}>VER DEMO</Button>
                    </BlokDemo>
                  </Col>
                );
              })
            }
          </Row>
        </Container>
      </Section>
    </>
  );
};

Demo.propTypes = {
  items: PropTypes.array
};

export default Demo;
