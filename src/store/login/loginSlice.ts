import { StateCreator } from 'zustand';

type Tcredentials = {
  login: string;
  password: string;
  isLoggedIn: boolean;
};

export type TloginSlice = {
  credentials: Tcredentials;
  setCredentials: ({ login, password, isLoggedIn }: Tcredentials) => void;
};

export const createLoginSlice: StateCreator<
  TloginSlice,
  [],
  [],
  TloginSlice
> = (set) => ({
  credentials: { login: '', password: '', isLoggedIn: false },
  setCredentials: (params) =>
    set((state) => ({
      credentials: {
        login: params.login || state.credentials.login,
        password: params.password || state.credentials.password,
        isLoggedIn: params.isLoggedIn,
      },
    })),
});
