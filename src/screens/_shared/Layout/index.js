import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import AppContainer from '../AppContainer';
import TopBar from '../TopBar';
import Footer from '../Footer';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  childrenContainer: {
    flexGrow: 1,
    position: 'relative',
    overflow: 'auto',
    backgroundColor: theme.customColors.applicationBg,
  },
  children: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0,
    overflow: 'hidden',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <TopBar />
      <Box className={classes.childrenContainer}>
        <Box className={classes.children}>
          <AppContainer>
            {children}
          </AppContainer>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {

};

export default Layout;
