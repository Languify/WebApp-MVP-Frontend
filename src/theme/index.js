import { createTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createTheme({
  palette: {
    background: {
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      contrastText: '#ffffff',
      main: colors.common.white
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c',
      blackvariant: '#666666',
      green: '#41D7A1',
      black: '#333333',
      active: '#2DABFF',
    },
    blur: {
      green: '#41D7A140'
    },
    constant: {
      main: '#41D7A1'
    }
  },
  shadows,
  typography
});

export default theme;
