import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

import { loadUsers } from '../../../redux/actions/usersActions';

const UsersList = () => {
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
  // apply styles
  return (
    <div>
      <List>
        {users.map(user => (
          <ListItem key={`user-${user.id}`}>
            <ListItemText
              primary={
                <Typography variant="h6">{`${user.first_name} ${user.last_name}`}</Typography>
              }
              secondary={user.email}
            />
          </ListItem>
        ))}
      </List>
      <Pagination page={page || startPage} count={totalPages} variant="outlined" shape="rounded" onChange={handlePageChange} />
    </div>
  )
};

export default UsersList;
