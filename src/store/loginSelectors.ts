import { TloginSlice } from './store';

export const credentialsSelectors = (state: TloginSlice) => state.credentials;

export const setCredentialsSelector = (state: TloginSlice) =>
  state.setCredentials;
