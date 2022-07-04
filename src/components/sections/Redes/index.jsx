import { Container, Section } from '@components/containers';
import React from 'react';
import SubTitle from '@components/typography/SubTitle';
import { RiLinkedinBoxFill, RiFacebookCircleFill } from 'react-icons/ri';
import { ContainSocialMedia } from './redes.styled';

const Redes = () => {
  return (
    <>
    <div>
      <Section color='accent2'>
        <Container className='d-flex flex-column align-items-center'>
          <SubTitle className='text-center mb-5 fs-2'>SÍGUENOS AQUÍ</SubTitle>
          <ContainSocialMedia>
            <RiLinkedinBoxFill fill='#09B6E8' size='3.5em' />
            <RiFacebookCircleFill className='up' fill='#09B6E8' size='3.5em'/>
          </ContainSocialMedia>
        </Container>
      </Section>
    </div>
    </>
  );
};

export default Redes;
