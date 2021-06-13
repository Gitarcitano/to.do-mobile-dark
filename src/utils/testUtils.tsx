import React, { ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import lightTheme from '../global/styles/lightTheme';

const ThemeProviderWrapper: React.FC = ({ children }) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: ThemeProviderWrapper, ...options });

export * from '@testing-library/react-native';
export { customRender as render };