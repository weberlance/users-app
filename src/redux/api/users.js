import { get, post, put } from './';
import { queryString } from '../../utils';

const users = {
  getUsers: params => {
    const query = `?${queryString.stringify({
      page: params.page,
      per_page: params.perPage,
    })}`;

    return get('/users', query);
  },

  saveUser: user => post('/users', user),

  updateUser: user => put('/users', user),
};

export default users;
