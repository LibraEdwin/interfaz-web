import PropTypes from 'prop-types';
import Image from 'next/image';
import CardProjectStyled from './cardProject.styled';

const CardProject = ({ className, image, name }) => {
  return (
    <CardProjectStyled.Wrapper className={className}>
      <Image
        src={image}
        layout="fill"
        objectFit='cover'
        quality={100} />
      <CardProjectStyled.Caption>
        <h3 className='mb-0'> <hr /> {name}</h3>
        <p className='mb-0'>Desarrollo</p>
      </CardProjectStyled.Caption>
    </CardProjectStyled.Wrapper>
  );
};

CardProject.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string
};

export default CardProject;
