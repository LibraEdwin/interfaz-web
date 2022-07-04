import { Service } from '@components/containers';
import React from 'react';
import { WaterMark } from '@components/containers/Service/services.styled';
import dataWeb from '../../configWeb.json';

const Services = () => {
  const { services } = dataWeb;
  return (
      <WaterMark>
        {
          services.map((service, key) => {
            return (
              <Service
                key={key}
                imagen={service.imagen}
                name={service.name}
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            );
          })
        }
      </WaterMark>
  );
};

export default Services;
