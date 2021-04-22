import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper';

import Header from './Header'
import UsersList from './UsersList'

const Users = ({ history }) => {
  return (
    <Box my={6} clone>
      <Paper>
        <Header onUserCreate={() => history.push('/user/new')} />
        <UsersList onUserSelect={id => history.push(`/user/${id}`)} />
      </Paper>
    </Box>
  );
};

Users.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Users;
