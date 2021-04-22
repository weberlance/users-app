import { call, put, takeEvery } from 'redux-saga/effects';

import { USER } from '../constants';
import { saveUserSuccess, saveUserFail } from '../actions/user';
import usersApi from '../api/users';

function* handleUserSave({ payload }) {
  try {
    const { user: userData, cb } = payload;
    const method = userData.id ? usersApi.updateUser : usersApi.saveUser;

    yield call(method, userData);
    if (cb) {
      cb();
    }
    yield put(saveUserSuccess());
  } catch (error) {
    yield put(saveUserFail(error));
  }
}

const userSagas = [
  takeEvery(USER.SAVE, handleUserSave),
];

export default userSagas;
