import React from 'react';
import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import { store } from 'store';
import { createAppTheme } from 'theme/theme';

const MuiThemeProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const theme = createAppTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) =>
  render(<Provider store={store}>{ui}</Provider>, {
    wrapper: MuiThemeProvider,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
