import PropTypes from 'prop-types';
import { Container } from '@components/containers';
import { Button, Logo } from '@components/ui';
import SwitchTheme from '../SwitchTheme';
import { Col, Row } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import Nav from '../Nav';
import NavButtonToggle from '../Nav/NavButtonToggle';
import HeaderStyled from './header.styled';
import { useRouterChange } from '@hooks/useRouterChange';
import { useEffect, useState } from 'react';
import dataWeb from '../../../../configWeb.json';

const Header = ({ light }) => {
  const [showNav, setShowNav] = useState(false);
  const { loading } = useRouterChange();
  const { Wsspheader } = dataWeb.MenzajesWhatsApp;

  const toggleShowNav = () => setShowNav(prev => !prev);

  useEffect(() => {
    setShowNav(false);
  }, [loading]);

  return (
    <HeaderStyled.Wrapper light={light}>
      <Container>
        <Row className='align-items-center'>
          <Col xs={4} className='d-lg-none'>
            <NavButtonToggle
              light={!light}
              onClick={toggleShowNav}
            />
          </Col>
          <Col xs={4} lg={2}>
            <Logo
              position="header"
              light={!light}
            />
          </Col>
          <Col xs={4} lg={10} className='text-end'>
            <Nav
              show={showNav}
              toggleShow={toggleShowNav}
              light={light}
            />
            <SwitchTheme />
            <Button
              as="a"
              href={Wsspheader}
              type='whatsapp'
              target="_blank"
              variante='primary'
              className='d-lg-inline-flex'>
              <FaWhatsapp />
              <span className="d-none d-lg-inline">
                Contactar
              </span>
            </Button>
          </Col>
        </Row>
      </Container>
    </HeaderStyled.Wrapper>
  );
};

Header.propTypes = {
  light: PropTypes.bool,
  Wsspheader: PropTypes.any
};

export default Header;
