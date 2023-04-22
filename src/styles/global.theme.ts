import { createTheme } from '@mui/material/styles';

export const GLOBAL_MUI_THEME = createTheme({
  palette: {
    resume: {
      50: '#E7EEFA',
      100: '#C7D6E4',
      200: '#A8B9CC',
      300: '#889DB3',
      400: '#7188A1',
      500: '#59748F',
      600: '#4C667E',
      700: '#3C5268',
      800: '#654E92',
      900: '#654E92',
    },
    primary: {
      main: '#654E92',
    },
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '& > .MuiSwitch-thumb': {
            backgroundColor: '#654E92',
          },
          '&.Mui-checked > .MuiSwitch-thumb': {
            backgroundColor: '#654E92', // resume 500 variant
          },
          '& + .MuiSwitch-track': {
            backgroundColor: '#C7D6E4', // resume 100 variant
          },
          '&.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#C7D6E4', // resume 100 variant
          },
        },
      },
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    resume: Palette['grey'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    resume?: PaletteOptions['grey'];
  }
}
