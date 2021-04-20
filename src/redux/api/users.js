import { get } from './';
import { queryString } from '../../utils';

const users = {
  getUsers: params => {
    const query = `?${queryString.stringify({
      page: params.page,
      per_page: params.perPage,
    })}`;

    return get('/users', query);
  },
};

export default users;
