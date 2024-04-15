import { TdocumentsDataSlice } from './documentsDataSlice';

export const isDataProcessedSelector = (state: TdocumentsDataSlice) =>
  state.documentsData.isDataProcessed;

export const isDataProvidedSelector = (state: TdocumentsDataSlice) =>
  state.documentsData.isDataProvided;

export const onloadDataSelector = (state: TdocumentsDataSlice) =>
  state.setDocumentsData;
