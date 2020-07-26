/**
 * axios
 * api: https://github.com/axios/axios
 */

import axios from 'axios';
import { domains } from '@/config';

const instance = axios.create({
  baseURL: domains.baseUrl,
  timeout: 3000,
  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  // transformResponse: [function (data) {
  //   return data
  // }],
});
instance.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);

export { instance };
