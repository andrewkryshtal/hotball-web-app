import { StateCreator } from 'zustand';

export type TdocumentsDataSlice = {
  documentsData: {
    isDataProvided: boolean;
    isDataProcessed: boolean;
    loadingProgress: number;
    data: Record<string, unknown>;
  };
  setDocumentsData: ({
    isDataProvided, // boolean
    isDataProcessed, // boolean
    loadingProgress, // number
    data,
  }: {
    isDataProvided: boolean;
    isDataProcessed: boolean;
    loadingProgress?: number;
    data: Record<string, unknown>;
  }) => void;
  setProgress: (progress: number) => void;
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
    loadingProgress: 0,
    data: {},
  },
  setDocumentsData: (params) =>
    set((state: TdocumentsDataSlice) => ({
      documentsData: {
        ...state.documentsData,
        isDataProvided: params.isDataProvided,
        isDataProcessed: params.isDataProcessed,
        data: params.data,
      },
    })),
  setProgress: (progress) =>
    set((state: TdocumentsDataSlice) => ({
      documentsData: {
        ...state.documentsData,
        loadingProgress: progress,
      },
    })),
});
