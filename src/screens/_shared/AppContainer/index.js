import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
  },
}));

const AppContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      {children}
    </Container>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
