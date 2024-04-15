import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { TloginSlice, createLoginSlice } from './login/loginSlice';
import {
  TdocumentsDataSlice,
  createDocumentsDataSlice,
} from './documentsData/documentsDataSlice';
import { TcompanySlice, companiesDataSlice } from './company/companySlice';

export const useBoundStore = create<
  TloginSlice & TdocumentsDataSlice & TcompanySlice & { _hasHydrated: boolean },
  [
    [
      'zustand/persist',
      TloginSlice &
        TdocumentsDataSlice &
        TcompanySlice & { _hasHydrated: boolean },
    ],
    ['zustand/devtools', never],
  ]
>(
  persist(
    devtools((...a) => ({
      ...createLoginSlice(...a),
      ...createDocumentsDataSlice(...a),
      ...companiesDataSlice(...a),
      _hasHydrated: false,
    })),
    {
      name: 'boundStore',
      onRehydrateStorage: () => () => {
        useBoundStore.setState({ _hasHydrated: true });
      },
    },
  ),
);
