import Image from 'next/image';
import CardTestimonyStyled from './cardTestimony.styled';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const CardTestimony = () => {
  return (
    <CardTestimonyStyled.Wrapper>
      <CardTestimonyStyled.Testimony>
        <span className='me-3'><RiDoubleQuotesL className='up' /> </span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. labore et dolore magna aliqua.
        <span className='ms-3'><RiDoubleQuotesR className='down' /></span>
      </CardTestimonyStyled.Testimony>
      <CardTestimonyStyled.Client>
        <CardTestimonyStyled.Photo>
          <Image src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" width={90} height={90} quality={90} />
        </CardTestimonyStyled.Photo>
        <CardTestimonyStyled.Info>
          <h5>David Sandoval</h5>
          <small className='fw-bold'>CEO de Everis</small>
        </CardTestimonyStyled.Info>
      </CardTestimonyStyled.Client>
    </CardTestimonyStyled.Wrapper>
  );
};

export default CardTestimony;
