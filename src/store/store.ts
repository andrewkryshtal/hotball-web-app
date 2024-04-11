import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { TloginSlice, createLoginSlice } from './login/loginSlice';
import {
  TdocumentsDataSlice,
  createDocumentsDataSlice,
} from './documentsData/documentsDataSlice';
import { TcompanySlice, companiesDataSlice } from './company/companySlice';

export const useBoundStore = create<
  TloginSlice & TdocumentsDataSlice & TcompanySlice,
  [
    ['zustand/persist', TloginSlice & TdocumentsDataSlice & TcompanySlice],
    ['zustand/devtools', never],
  ]
>(
  persist(
    devtools((...a) => ({
      ...createLoginSlice(...a),
      ...createDocumentsDataSlice(...a),
      ...companiesDataSlice(...a),
    })),
    { name: 'boundStore' },
  ),
);
