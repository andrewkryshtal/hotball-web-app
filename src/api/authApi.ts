import { apiInstance } from './apiConfig';

export const loginApi = async () => {
  return await apiInstance().get('/v1/private/ping');
};
