import axios from 'axios';
import { getAuthHeaders } from './utils';

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
        headers: { ...getAuthHeaders(token) },
      },
    );

  return req.then(handleSuccess).catch(handleError);
};

export const post = (url, data, token) => {
  const req = http
    .post(
      url,
      data,
      token && {
        headers: { ...getAuthHeaders(token) },
      },
    );

  return req.then(handleSuccess).catch(handleError);
};

export const put = (url, data, token) => {
  const req = http
    .put(
      url,
      data,
      token && {
        headers: { ...getAuthHeaders(token) },
      },
    );

  return req.then(handleSuccess).catch(handleError);
};
