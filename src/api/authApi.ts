import { apiInstance } from './apiConfig';

export const loginApi = () => {
  return apiInstance().get('/v1/private/ping');
};
