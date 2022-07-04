import { MEDIA_BREAKPOINTS_MINMAX } from '@styles';
import styled from 'styled-components';

const Wrapper = styled.div`
position: relative;
width: 100%;
text-align: center;
${MEDIA_BREAKPOINTS_MINMAX.tablet} {
  height: 453px;
}

${MEDIA_BREAKPOINTS_MINMAX.mobile} {
  height: 340px;
}
`;

const GridFooter = styled.div`
${MEDIA_BREAKPOINTS_MINMAX.tablet} {
  width: 90%;
  margin: auto;
  margin-left: 5%;
  position: relative;
  display: grid;
  text-align: left;
  padding-top: 128px;
  grid-template-columns: 30% 20% 20% 20%;
  
}
${MEDIA_BREAKPOINTS_MINMAX.mobile} {
  
}
`;

const ImgLogo = styled.img`
${MEDIA_BREAKPOINTS_MINMAX.tablet} {
  max-width: 312px;
  width: 100%;
  transform: scale(1);
}
${MEDIA_BREAKPOINTS_MINMAX.mobile} {
  padding-top: 30px;
  max-width: 173px;
  width: 100%;
  transform: scale(1);

}
`;

const ContenidoFooter = styled.div`
  margin: auto;
  margin-top:0;
  `;

const DivEnlaces = styled.div`
  line-height: 30px;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #FFFFFF;
${MEDIA_BREAKPOINTS_MINMAX.tablet} {
  text-align: center;
}
${MEDIA_BREAKPOINTS_MINMAX.mobile} {
  width: 70%;
  text-align: center;
  display: grid;
  grid-template-columns: auto auto auto;
  margin-left: 15%;
  margin-top: 37px;
}
  `;

const Hr = styled.hr`
${MEDIA_BREAKPOINTS_MINMAX.tablet} {
  position: absolute;
  border: 1px solid #8AA4F4;
  width: 77.5%;
  top: 353.5px;
  left: 11.25%;
}
${MEDIA_BREAKPOINTS_MINMAX.mobile} {
  position: absolute;
  border: 1px solid #8AA4F4;
  width: 40%;
  top: 250px;
  left: 30%;
}
`;

const TextInterfaz = styled.div`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #FFFFFF;
${MEDIA_BREAKPOINTS_MINMAX.tablet} {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 393px;
}
${MEDIA_BREAKPOINTS_MINMAX.mobile} {
  position: absolute;
  margin-left: 15%;
  width: 70%;
  text-align: center;
  top: 270px;
}
`;

const DisplayFooter = styled.div`
${MEDIA_BREAKPOINTS_MINMAX.tablet} {
  display: flex;
  margin-top:20px;
  gap: 20px;
}
`;

const DivNoneTable = styled.div`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #FFFFFF;
  width: 101px;

  ${MEDIA_BREAKPOINTS_MINMAX.mobile} {
  display: none;
  }
`;

const LogoRedesSociales = styled.img`
${MEDIA_BREAKPOINTS_MINMAX.mobile} {
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  margin-left: ${({ marginLeft }) => marginLeft};
  }
`;

const UnirGrid = styled.div`
${MEDIA_BREAKPOINTS_MINMAX.mobile} {
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  }
`;

export default {
  Wrapper,
  ImgLogo,
  GridFooter,
  DivEnlaces,
  ContenidoFooter,
  Hr,
  TextInterfaz,
  DisplayFooter,
  DivNoneTable,
  LogoRedesSociales,
  UnirGrid
};
