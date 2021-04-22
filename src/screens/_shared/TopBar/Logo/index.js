import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {ReactComponent as LogoSVG} from './logo.svg';

const useStyles = makeStyles(theme => ({
  root: {
    fill: theme.palette.primary.contrastText,
    width: '47px',
    paddingRight: theme.spacing(2),
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <Link to="/users">
      <LogoSVG className={classes.root} />
    </Link>
  );
};

export default Logo;
