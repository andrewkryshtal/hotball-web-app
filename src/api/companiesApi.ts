import { AxiosResponse } from 'axios';
import { apiInstance } from './apiConfig';
import { TcompanyInstance } from '../store/company/companySlice';

export const getAllCompanies = () =>
  apiInstance().get<TcompanyInstance[]>('/v1/private/companies/get-all');

export const createCompany = (name: string, description: string) =>
  apiInstance().post('/v1/private/companies/company/create', {
    name,
    description,
  });
