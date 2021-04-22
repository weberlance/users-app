import { USER } from '../constants';

const saveUser = (user, cb) => ({
  type: USER.SAVE,
  payload: { user, cb },
});

const saveUserSuccess = () => ({
  type: USER.SAVE_SUCCESS,
});

const saveUserFail = error => ({
  type: USER.SAVE_FAIL,
  payload: error,
});

export {
  saveUser,
  saveUserSuccess,
  saveUserFail,
};
