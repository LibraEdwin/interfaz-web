import { THEME_LIGHT } from '@styles';
import THEME_DARK from '@styles/theme/dark';
import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultState from './state';

/**
 * @constant
 * @type {import('react').Context<import('./appContext').AppContextInterface>}
 */
export const AppContext = createContext(null);

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const theme = useTheme();
  return (
    <AppContext.Provider value={{ ...defaultState, theme }}>
      <ThemeProvider theme={theme.themeMode}>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState(defaultState.theme.themeMode);

  const changeThemeFunction = () => {
    setThemeMode(theme => theme.mode === 'light' ? THEME_DARK : THEME_LIGHT);
  };

  return {
    themeMode,
    changeThemeFunction
  };
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};
