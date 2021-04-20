import { USERS } from '../constants';

// TODO: improvement make an initial state, loading, error
const usersReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case USERS.LOAD_SUCCESS:
      return action.payload.data;
      // TODO: make correct returnable value like {...state, error: action.payload}
    case USERS.LOAD_FAIL:
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
