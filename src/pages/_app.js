import PropTypes from 'prop-types';
import { BLUEWHITE_SCALE, GlobalStyles } from '@styles';
import { AppProvider } from '@contexts/AppContext';
import { AdminLayout, AuthLayout, PublicLayout } from '@layouts';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import NextNProgress from 'nextjs-progressbar';

const LAYOUTS = {
  public: PublicLayout,
  auth: AuthLayout,
  admin: AdminLayout
};

const MyApp = ({ Component, pageProps }) => {
  const LayoutComponent = LAYOUTS[Component.layout || 'public'] || ((children) => (<>{children}</>));

  return (
    <AppProvider>
      <NextNProgress
        color={BLUEWHITE_SCALE[300]}
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <GlobalStyles />
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </AppProvider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any
};

export default MyApp;
