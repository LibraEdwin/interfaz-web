import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import LogoStyled from './logo.styled';
import { useAppContext } from '@contexts/AppContext';
import { useEffect, useState } from 'react';

const Logo = ({ position, withSlogan, light }) => {
  const { theme: { themeMode } } = useAppContext();
  const [logoUrl, setLogoUrl] = useState('/logo-default.png');

  useEffect(() => {
    if (themeMode.mode === 'dark') {
      setLogoUrl('/logo-light.png');
    } else {
      if (light) {
        setLogoUrl('/logo-light.png');
      } else {
        setLogoUrl('/logo-default.png');
      }
    }
  }, [light, themeMode]);

  return (
    <Link href="/">
      <LogoStyled.Wrapper position={position}>
        <Image src={logoUrl} layout='fill' objectFit='contain' priority quality={100} />
      </LogoStyled.Wrapper>
    </Link>
  );
};

Logo.propTypes = {
  position: PropTypes.string,
  withSlogan: PropTypes.bool,
  light: PropTypes.bool
};

export default Logo;
