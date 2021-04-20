import { get } from './';

const users = {
  getUsers: () => get('/users'),
};

export default users;
