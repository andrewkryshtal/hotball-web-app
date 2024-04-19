import { useBoundStore } from '../store/store';
import { apiInstance } from './apiConfig';
import { unstable_batchedUpdates } from 'react-dom';

export const uploadResourceFile = (formData: FormData, companyId: string) => {
  return apiInstance().post(
    `/v1/private/resource/files/file/upload`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: {
        companyId,
      },
      onUploadProgress: (progressEvent) => {
        const progress = Math.round(
          (progressEvent.loaded * 100) / (progressEvent.total ?? 0),
        );
        unstable_batchedUpdates(() => {
          useBoundStore.getState().setProgress(progress);
        });
      },
    },
  );
};

export const getAllFiles = (companyId: string) =>
  apiInstance().get(`/v1/private/resource/files/get-all`, {
    params: {
      companyId,
    },
  });
