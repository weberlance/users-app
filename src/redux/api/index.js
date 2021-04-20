import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_API;

const http = axios.create({
  baseURL: `${baseUrl}/api`,
});

const handleError = error => {
  return Promise.reject(
    error.response
      ? {
        status: error.response.status,
        message: (error.response && error.response.data && error.response.data.error) || error.message,
      }
      : error
  );
};

const handleSuccess = response => Promise.resolve({
  data: response.data,
  headers: response.headers,
});

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
  const req = http
    .get(
      url + (query || ''),
      token && {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

  return req.then(handleSuccess).catch(handleError);
};
