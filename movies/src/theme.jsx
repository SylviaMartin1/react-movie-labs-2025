/**
 * @file theme.jsx
 * @description Custom Material UI Theme for the app
 */
import { createTheme } from '@mui/material/styles';

/**
 * @function createTheme()
 * @description Defines the main colours and typography used in the app
 * - Palette: primary (red), secondary (grey/black), background (grey/black)
 * - Typography: bold H5 headings
 */
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