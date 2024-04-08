import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { TloginSlice, createLoginSlice } from './login/loginSlice';
import {
  TdocumentsDataSlice,
  createDocumentsDataSlice,
} from './documentsData/documentsDataSlice';

export const useBoundStore = create<
  TloginSlice & TdocumentsDataSlice,
  [
    ['zustand/persist', TloginSlice & TdocumentsDataSlice],
    ['zustand/devtools', never],
  ]
>(
  persist(
    devtools((...a) => ({
      ...createLoginSlice(...a),
      ...createDocumentsDataSlice(...a),
    })),
    { name: 'boundStore' },
  ),
);
