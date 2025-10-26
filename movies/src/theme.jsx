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
      light: '#ffd84d',
      main: '#f5c518',
      dark: '#c5a900',
      contrastText: '#000000',
    },
    background: {
      default: '#121212', 
      paper: '#FFFE9F', 
    }
  },
});
export default theme;