import { TdocumentsDataSlice } from './documentsDataSlice';

export const isDataProcessedSelector = (state: TdocumentsDataSlice) =>
  state.documentsData.isDataProcessed;

export const isDataProvidedSelector = (state: TdocumentsDataSlice) =>
  state.documentsData.isDataProvided;
