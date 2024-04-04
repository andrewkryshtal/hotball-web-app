import axios from 'axios';
import { useBoundStore } from '../store/store';

export const apiInstance = () => {
  const { login, password } = useBoundStore.getState().credentials;

  return axios.create({
    baseURL: 'https://hotball.site',
    auth: {
      username: login,
      password: password,
    },
  });
};
