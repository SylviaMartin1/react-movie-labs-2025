import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#AA5585',
      main: '#661141',
      dark: '#440026',
      contrastText: '#fff',
    },
    secondary: {
      light: '#A5C663',
      main: '#567714',
      dark: '#354F00',
      contrastText: '#000',
    },
    background: {
        default: '#D4EE9F', 
      paper: '#D4EE9F', 
    }
  },
});

export default theme;