'use client';

import { theme } from '@/config/theme';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { FC, ReactNode } from 'react';

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
