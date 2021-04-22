import { call, put, takeEvery } from 'redux-saga/effects';

import { USERS } from '../constants';
import { setUsers, setError } from '../actions/usersActions';
import usersApi from '../api/users';

function* handleUsersLoad({ payload }) {
  try {
    const users = yield call(usersApi.getUsers, payload);
    yield put(setUsers(users.data))
  } catch (error) {
    yield put(setError(error));
  }
}

const usersSagas = [
  takeEvery(USERS.LOAD, handleUsersLoad),
];

export default usersSagas;
