import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Pagination from '@material-ui/lab/Pagination';

import { loadUsers } from '../../../redux/actions/usersActions';
import Item from './Item';

const UsersList = ({ onUserSelect }) => {
  const startPage = 1;
  const dispatch = useDispatch();
  const { data: users, page, perPage, totalPages, error } = useSelector(state => state.users);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (error && error.message && typeof error.message === 'string') {
      enqueueSnackbar(error.message);
    }
  }, [error, enqueueSnackbar]);

  useEffect(() => {
    dispatch(loadUsers({ page: startPage, perPage: 6 }));
  }, [dispatch]);

  const handlePageChange = useCallback(
    (e, newPage) => {
      if (page !== newPage) {
        dispatch(loadUsers({ page: newPage, perPage }));
      }
    },
    [page, perPage, dispatch],
  );

  // TODO:
  // add loader
  return (
    <Box px={3}>
      <List disablePadding>
        {users.map(user => <Item key={`user-${user.id}`} user={user} onUserSelect={onUserSelect} />)}
      </List>
      <Box display="flex" justifyContent="center" pb={2}>
        <Pagination
          page={page || startPage}
          count={totalPages}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Box>
  )
};

UsersList.propTypes = {
  onUserSelect: PropTypes.func.isRequired,
};

export default UsersList;
