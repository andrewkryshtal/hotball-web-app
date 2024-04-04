import { TloginSlice } from './store';

export const loginSelectors = (state: TloginSlice) => state.credentials;

export const setCredentials = (state: TloginSlice) => state.setCredentials;
