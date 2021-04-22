import { USER } from '../constants';

const initialState = {
  error: null,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.SAVE:
      return {
        ...state,
        loading: true,
      };

    case USER.SAVE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case USER.SAVE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
