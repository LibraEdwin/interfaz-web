import PropTypes from 'prop-types';
import Image from 'next/image';
import NavStyled from './nav.styled';
import { MdHome } from 'react-icons/md';
import Link from 'next/link';
import { useEffect } from 'react';

const Nav = ({ show, toggleShow, light }) => {
  useEffect(() => {
    if (show) {
      console.log('lol');
      document.body.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, [show]);
  return (
    <NavStyled.Wrapper>
      <NavStyled.Overlay onClick={toggleShow} isActive={show} />
      <NavStyled.Content isActive={show}>
        <NavStyled.Head>
          <Link href="/">
            <button> <MdHome /> Ir al inicio</button>
          </Link>
          <button onClick={toggleShow} > &times; </button>
        </NavStyled.Head>
        <NavStyled.List>
          <NavStyled.ItemTitle>Quiénes somos</NavStyled.ItemTitle>
          {/* <NavStyled.Item>
            <Link href="/ui">
              <NavStyled.ItemLink light={light}>Elementos UI</NavStyled.ItemLink>
            </Link>
          </NavStyled.Item> */}
          <NavStyled.Item>
            <Link href="/nosotros">
              <NavStyled.ItemLink light={light}>Nosotros</NavStyled.ItemLink>
            </Link>
          </NavStyled.Item>
          <NavStyled.Item>
            <Link href="/proyectos">
              <NavStyled.ItemLink light={light}>Proyectos</NavStyled.ItemLink>
            </Link>
          </NavStyled.Item>
          <NavStyled.Item>
            <Link href="/servicios">
              <NavStyled.ItemLink light={light}>Servicios</NavStyled.ItemLink>
            </Link>
          </NavStyled.Item>
          <NavStyled.ItemTitle>Productos</NavStyled.ItemTitle>
          <NavStyled.Item className='d-lg-none'>
            <Link href="/productos/encuestas-en-linea">
              <NavStyled.ItemLink light={light}>Encuestas en línea</NavStyled.ItemLink>
            </Link>
          </NavStyled.Item>
          <NavStyled.Item className='d-none d-lg-inline-block'>
            <Link href="/productos/encuestas-en-linea">
              <NavStyled.ItemLink light={light}>Productos</NavStyled.ItemLink>
            </Link>
            <NavStyled.SubList>
              <NavStyled.Item>
                <Link href="/productos/encuestas-en-linea">
                  <NavStyled.ItemLink light={light}>Encuestas en línea</NavStyled.ItemLink>
                </Link>
              </NavStyled.Item>
            </NavStyled.SubList>
          </NavStyled.Item>
        </NavStyled.List>
        <NavStyled.Foot>
          <Image src="/isotipo_white.png" width={41} height={57} />
          <div className='mt-3'>Copyright © {new Date().getFullYear()} - Todos los derechos reservados.</div>
        </NavStyled.Foot>
      </NavStyled.Content>
    </NavStyled.Wrapper>
  );
};

Nav.propTypes = {
  show: PropTypes.any,
  toggleShow: PropTypes.any,
  light: PropTypes.any
};

export default Nav;
