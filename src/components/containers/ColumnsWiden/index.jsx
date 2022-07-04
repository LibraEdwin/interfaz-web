import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { Row } from 'react-bootstrap';

const ColumnsWiden = ({ children }) => {
  const divRef = useRef();

  useEffect(() => {
    [...divRef.current.children].forEach((child) => {
      child.addEventListener('mouseenter', () => {
        for (const col of divRef.current.children) {
          col.classList.remove('col-md-6');
          col.classList.add('col-md-4');
        }
        child.classList.add('col-md-8');
      });

      child.addEventListener('mouseleave', () => {
        child.classList.remove('col-md-8');
        for (const col of divRef.current.children) {
          col.classList.remove('col-md-4');
          col.classList.add('col-md-6');
        }
      });
    });
  }, []);

  return (
    <Row ref={divRef} className='g-0'>
      {children}
    </Row>
  );
};

ColumnsWiden.propTypes = {
  children: PropTypes.node
};

export default ColumnsWiden;
