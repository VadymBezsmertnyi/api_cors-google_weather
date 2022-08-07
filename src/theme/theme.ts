import { createTheme, Theme } from '@mui/material/styles';

type TCustomColors = {
  main: {
    blueberry: string;
    rajah: string;
    floralWhite: string;
  };
  font: {
    error: string;
  };
  background: {};
  accent: {};
  colors: {};
  other: {
    tuftsBlue: string;
  };
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
  BackgroundBlueberry = '#5B8CFF',
  BackgroundRajah = '#FFA25B',
  BackgroundFloralWhite = '#fffaf1',
  FontError = '#ff0000',
  ButtonTuftsBlue = '#459DE9',
}

export const createAppTheme = () => {
  const theme = createTheme({
    palette: {
      custom: {
        main: {
          blueberry: AppColor.BackgroundBlueberry,
          rajah: AppColor.BackgroundRajah,
          floralWhite: AppColor.BackgroundFloralWhite,
        },
        font: {
          error: AppColor.FontError,
        },
        background: {},
        colors: {},
        accent: {},
        other: {
          tuftsBlue: AppColor.ButtonTuftsBlue,
        },
      },
    },
  });
  return theme;
};
