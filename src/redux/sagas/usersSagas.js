import { call, fork, put, take } from 'redux-saga/effects';

import { USERS } from '../constants';
import { setUsers, setError } from '../actions/usersActions'
import { get } from '../api'

export function* handleUsersLoad(payload) {
  try {
    const users = yield call(get, 'https://reqres.in/api/users');
    yield put(setUsers(users))
  } catch (error) {
    // TODO: pass error object
    yield put(setError(error.toString()));
  }
}

export default function* usersLoad(action) {
  // TODO: check here, should it be a loop?
  const payload = yield take(USERS.LOAD);
  yield fork(handleUsersLoad, payload)
}
