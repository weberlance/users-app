import { all } from 'redux-saga/effects';

import userSagas from './user';
import usersSagas from './usersSagas';

export default function* rootSaga() {
  yield all([
    ...userSagas,
    ...usersSagas,
  ])
}
