import { apiInstance } from './apiConfig';

export const loginApi = () => apiInstance().get('/v1/private/ping');
