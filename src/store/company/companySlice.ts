import { StateCreator } from 'zustand';

export type TcompanyInstance = {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TcompanySlice = {
  companyReducer: {
    allCompanies: TcompanyInstance[];
    currentCompany: TcompanyInstance;
  };
  setCompany: (companyData: TcompanyInstance) => void;
  setAllCompanies: (companies: TcompanyInstance[]) => void;
};

export const companiesDataSlice: StateCreator<
  TcompanySlice,
  [],
  [],
  TcompanySlice
> = (set) => ({
  companyReducer: {
    allCompanies: [],
    currentCompany: {} as TcompanyInstance,
  },
  setCompany: (companyData: TcompanyInstance) => {
    set((state: TcompanySlice) => ({
      companyReducer: {
        ...state.companyReducer,
        currentCompany: companyData,
      },
    }));
  },
  setAllCompanies: (companies: TcompanyInstance[]) => {
    set((state: TcompanySlice) => ({
      companyReducer: {
        ...state.companyReducer,
        allCompanies: companies,
      },
    }));
  },
});
