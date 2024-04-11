import { TcompanySlice } from './companySlice';

export const getAllCompaniesSelector = (state: TcompanySlice) =>
  state.companyReducer.allCompanies;

export const getCurrentCompanySelector = (state: TcompanySlice) =>
  state.companyReducer.currentCompany;

export const setCurrentCompanySelector = (state: TcompanySlice) =>
  state.setCompany;

export const setAllCompaniesSelector = (state: TcompanySlice) =>
  state.setAllCompanies;

export const companySetters = (state: TcompanySlice) => ({
  setCompany: state.setCompany,
  setAllCompanies: state.setAllCompanies,
});
