import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ff4d4d',
      main: '#e50914',
      dark: '#b0060f',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#666666',
      main: '#000000',
      dark: '#333333',
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212', 
      paper: '#1c1c1c', 
    },
  },
   typography: {
    h5: {
      fontWeight: 'bold', 
    },
  }
});
export default theme;