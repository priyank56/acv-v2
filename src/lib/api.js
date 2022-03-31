import axios from 'axios';
import config from 'config';
import ApiError from './errors';

const handleErrors = async (response) => {
  if (response.ok) return response;
  const err = await response.json();
  throw ApiError.fromResponse(response.status, err || undefined);
};

const getUserAccessToken = () => {
  return localStorage.getItem('accessToken');
};

const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
    Authorization: getUserAccessToken(),
  };
};

const get = async (url, headers) => {
  try {
    const res = await axios.get(`${config.APP_URI}${url}`, {
      headers: headers || getHeaders(),
    });
    return res;
  } catch (response) {
    return handleErrors(response);
  }
};

const post = async (url, body, headers) => {
  try {
    const res = await axios.post(`${config.APP_URI}${url}`, body, {
      headers: headers || getHeaders(),
    });
    return res;
  } catch (response) {
    return handleErrors(response);
  }
};

const put = async (url, body, headers) => {
  try {
    const res = await axios.put(`${config.APP_URI}${url}`, body, {
      headers: headers || getHeaders(),
    });
    return res;
  } catch (response) {
    return handleErrors(response);
  }
};

const patch = async (url, body, headers) => {
  try {
    const res = await axios.patch(`${config.APP_URI}${url}`, body, {
      headers: headers || getHeaders(),
    });
    return res;
  } catch (response) {
    return handleErrors(response);
  }
};

const del = (url, body, headers) => {
  return axios
    .del(`${config.APP_URI}${url}`, body, {
      headers: headers || getHeaders(),
    })
    .then((res) => res)
    .catch(handleErrors);
};

export { get, post, patch, put, del };
