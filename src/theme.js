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
  },
});

export default muiTheme;
