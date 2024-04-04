import axios from 'axios';
import { useBoundStore } from '../store/store';
import { credentialsSelectors } from '../store/loginSelectors';

const { login, password } = useBoundStore.getState().credentials;

export const apiInstance = axios.create({
  baseURL: 'https://hotball.site',
  auth: {
    username: login,
    password: password,
  },
});
