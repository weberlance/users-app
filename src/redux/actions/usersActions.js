// TODO: consider file renaming to users | user
import { USERS } from '../constants';

const loadUsers = listState => ({
  type: USERS.LOAD,
  payload: listState,
});

const setUsers = users => ({
  type: USERS.LOAD_SUCCESS,
  payload: users,
});

const setError = error => ({
  type: USERS.LOAD_FAIL,
  payload: error,
});

export { loadUsers, setError, setUsers };
