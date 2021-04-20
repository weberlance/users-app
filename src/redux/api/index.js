import axios from 'axios';

// TODO: return rejected promise or throw an error
// for correct behavior in sagas
const handleError = error => (
  error.response
    ? {
      error: {
        error: error.response.status,
        message: error.response.data,
      },
    }
    : { error }
  );

const handleSuccess = response => ({
  data: response.data,
  headers: response.headers,
});

// TODO:
// 1. create seaparate api files for user and etc
// 2. possible use axios.create with baseUrl and move base url to .env file
// 3. check doc and implementation
/**
 * Make HTTP POST call
 * @param {string} url
 * @param {string} query
 * @param {string} token
 *
 * @returns {{json: Object|undefined, error: Object|undefined}} response
 * @returns {Object|undefined} response.json
 * @returns {{status: Object, message: Object}|Object|undefined} response.error
 *
 * @example
 * get("http://management-api", "?search=bonus", "asd32eD5F");
 */
export const get = (url, query, token) => {
  const req = axios
    .get(
      encodeURI(url + (query || '')),
      token && {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

  return req.then(handleSuccess).catch(handleError);
};
