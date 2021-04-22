import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 388,
  },
  title: {
    margin: 0,
  },
  primary: {
    fontSize: '24px',
    letterSpacing: 0,
    lineHeight: '28px',
  },
  secondary: {
    fontSize: '14px',
    letterSpacing: '0.25px',
    lineHeight: '20px',
    marginTop: theme.spacing(0.5),
  },
  buttonGroup: {
    display: 'flex',
    marginTop: theme.spacing(1.75),
    justifyContent: 'flex-end',
  },
  cancelButton: {
    color: blueGrey[600],
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
