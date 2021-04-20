import React from 'react';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import UsersList from './UsersList'

const Users = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4} clone>
        <Paper >
          <Box p={2} clone>
            <Typography variant='h3'>Users</Typography>
          </Box>
          <UsersList />
        </Paper>
      </Box>
    </Container>
  )
};

export default Users;
