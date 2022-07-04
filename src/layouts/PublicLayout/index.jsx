import { Footer, Header } from '@components/block';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const PublicLayout = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <>
      <Header light={pathname !== '/'} />
      {children}
      <Footer />
    </>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default PublicLayout;
