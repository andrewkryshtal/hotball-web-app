import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type TloginSlice = {
  credentials: Record<string, string>;
  setCredentials: ({
    login,
    password,
  }: {
    login: string;
    password: string;
  }) => void;
};

export const createLoginSlice: StateCreator<
  TloginSlice,
  [],
  [],
  TloginSlice
> = (set) => ({
  credentials: { login: '', password: '' },
  setCredentials: (params) =>
    set((state) => ({
      credentials: {
        login: params.login || state.credentials.login,
        password: params.password || state.credentials.password,
      },
    })),
});

export const useBoundStore = create<
  TloginSlice,
  [['zustand/persist', TloginSlice], ['zustand/devtools', never]]
>(
  persist(
    devtools((...a) => ({
      ...createLoginSlice(...a),
    })),
    { name: 'boundStore' },
  ),
);
