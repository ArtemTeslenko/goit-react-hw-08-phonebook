import { createTheme } from '@mui/material/styles';
import { blueGrey, lightGreen } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      light: blueGrey[400],
      main: blueGrey[600],
      contrastText: blueGrey[800],
    },
    secondary: {
      light: lightGreen[400],
      main: lightGreen[600],
      contrastText: lightGreen[800],
    },
  },
});
