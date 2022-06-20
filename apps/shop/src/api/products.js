import { appAxiosInstance } from './axios-instance';

export const getProductsList = async ({ skip = 0, limit = 100 }) => {
  const { data } = await appAxiosInstance.get(`products`, {
    params: { skip, limit },
  });
  return data;
};
