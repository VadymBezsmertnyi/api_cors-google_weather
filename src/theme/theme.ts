import { createTheme, Theme } from '@mui/material/styles';

type TCustomColors = {
  main: {
    brightGray: string;
    darkGunmetal: string;
  };
  font: {};
  background: {};
  accent: {};
  colors: {};
  other: {};
};
declare module '@mui/material/styles' {
  interface PaletteOptions {
    custom?: TCustomColors;
  }
  interface Palette {
    custom?: TCustomColors;
  }
}
declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

export enum AppColor {
  FontBrightGray = '#EFEFEF',
  BackgroundDarkGunmetal = '#23242C',
}

export const createAppTheme = () => {
  const theme = createTheme({
    palette: {
      custom: {
        main: {
          brightGray: AppColor.FontBrightGray,
          darkGunmetal: AppColor.BackgroundDarkGunmetal,
        },
        font: {},
        background: {},
        colors: {},
        accent: {},
        other: {},
      },
    },
  });
  return theme;
};
