import React from 'react';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const DEFAULT = 'dark'

export const useIsDarkTheme = () => {
  return true;
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // return prefersDarkMode;
};

function ThemeProvider({ children }) {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: DEFAULT // prefersDarkMode ? 'dark' : 'light',
        },
      }),
    []
    // [prefersDarkMode]
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

export default ThemeProvider;
