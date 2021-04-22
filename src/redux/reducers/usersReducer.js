import { USERS } from '../constants';

const initialState = {
  data: [],
  page: undefined,
  perPage: undefined,
  total: 0,
  totalPages: 0,

  error: null,
  loading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS.LOAD:
      return {
        ...state,
        loading: true,
      };

    case USERS.LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        page: action.payload.page,
        perPage: action.payload.per_page,
        total: action.payload.total,
        totalPages: action.payload.total_pages,
        loading: false,
      };

    case USERS.LOAD_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default usersReducer;
