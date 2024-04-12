import axios, { AxiosInstance } from 'axios';
import { useBoundStore } from '../store/store';

export const apiInstance = () => {
  const { login, password } = useBoundStore.getState().credentials;

  let api = axios.create({
    baseURL: 'https://hotball.site',
    auth: {
      username: login,
      password: password,
    },
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      // whatever you want to do with the error
      if (error.response.status === 401) {
        window.location.href = '/login';
      }
    },
  );

  return api as AxiosInstance;
};
