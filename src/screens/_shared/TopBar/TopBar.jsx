import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import AppContainer from '../AppContainer';
import Logo from './Logo';
import Title from './Title';

export default function TopBar() {

  return (
    <AppBar position="static" elevation={0}>
      <AppContainer>
        <Toolbar disableGutters>
          <Logo />
          <Title />
        </Toolbar>
      </AppContainer>
    </AppBar>
  );
}
