import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[500],
      contrastText: '#FFFFFF',
    },
  },
  customColors: {
    applicationBg: blueGrey[50],
    footerBg: '#E1E4E5',
    divider: '#C1C6C8',
  },
});

export default muiTheme;
