import PropTypes from 'prop-types';
import Image from 'next/image';
import { WrapperService, ContainerService, Figura, NameService, DetailService, ContainButton, Line } from './services.styled';
import { Paragraph } from '@components/typography';
import { Button } from '@components/ui';

const Service = ({ imagen, name, ...props }) => {
  return (
    <WrapperService>
      <ContainerService>
        <Figura>
          <Image
            src={imagen}
            layout="fill"
            objectFit='cover'
          />
        </Figura>
        <DetailService>
          <NameService>{name}</NameService>
          <Paragraph as='div' {...props}></Paragraph>
          <ContainButton>
            <Button variante='primary'>ME INTERESA</Button>
          </ContainButton>
        </DetailService>
      </ContainerService>
      <Line/>
    </WrapperService>
  );
};

Service.propTypes = {
  imagen: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string
};

export default Service;
