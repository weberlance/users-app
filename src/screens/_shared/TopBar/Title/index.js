import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    fontWeight: 400,
  },
}));


const Title = () => {
  const classes = useStyles();

  return (
    <Typography variant="h5" className={classes.root}>
      Users app
    </Typography>
  );
};

export default Title;
