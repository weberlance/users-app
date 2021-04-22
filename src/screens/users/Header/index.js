import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Header = ({ onUserCreate }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    px={3}
    pt={2.5}
    pb={2}
  >
    <Typography variant="h5" component="h3">Users</Typography>
    <Button variant="contained" color="primary" onClick={onUserCreate}>+ Add User</Button>
  </Box>
);

Header.propTypes = {
  onUserCreate: PropTypes.func.isRequired,
};

export default Header;
