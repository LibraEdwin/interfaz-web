import PropTypes from 'prop-types';

const Modal = ({ children }) => {
  return (
    <div>
      <button>cerrar &times; </button>
      <div>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired
};

export default Modal;
