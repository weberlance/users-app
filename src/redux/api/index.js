import axios from 'axios';

const handleError = error => {
  if (error.toJSON) {
    error.toJSON();
  }

  return Promise.reject(
    error.response
      ? {
        error: {
          status: error.response.status,
          message: error.response.data,
        },
      }
      : { error }
  );
};

const handleSuccess = response => Promise.resolve({
  data: response.data,
  headers: response.headers,
});

// TODO:
// 1. create seaparate api files for user and etc
// 2. possible use axios.create with baseUrl and move base url to .env file

/**
 * Make HTTP POST call
 * @param {string} url
 * @param {string} query
 * @param {string} token
 *
 * @returns {Promise} Promise object with response data
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
