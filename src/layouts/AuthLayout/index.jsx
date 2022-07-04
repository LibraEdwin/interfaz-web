import PropTypes from 'prop-types';

const AuthLayout = ({ children }) => {
  return (
    <>
      <h1>Auth Layout</h1>
      {children}
    </>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthLayout;
