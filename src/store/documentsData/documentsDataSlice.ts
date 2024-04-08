import { StateCreator } from 'zustand';

export type TdocumentsDataSlice = {
  documentsData: Record<string, string | boolean | Record<string, unknown>>;
  setDocumentsData: ({
    isDataProvided, // boolean
    isDataProcessed, // boolean
    data,
  }: {
    isDataProvided: boolean;
    isDataProcessed: boolean;
    data: Record<string, unknown>;
  }) => void;
};

export const createDocumentsDataSlice: StateCreator<
  TdocumentsDataSlice,
  [],
  [],
  TdocumentsDataSlice
> = (set) => ({
  documentsData: {
    isDataProvided: false,
    isDataProcessed: false,
    data: {} as string | boolean | Record<string, unknown>, // Specify the type of the `data` property
  },
  setDocumentsData: (params) =>
    set(() => ({
      documentsData: {
        isDataProvided: params.isDataProvided,
        isDataProcessed: params.isDataProcessed,
        data: params.data,
      },
    })),
});
