import PropTypes from 'prop-types';

const AdminLayout = ({ children }) => {
  return (
    <>
      <h1>Admin Layout</h1>
      {children}
    </>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AdminLayout;
