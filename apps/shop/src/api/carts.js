import { appAxiosInstance } from './axios-instance';

export const getMyCart = async () => {
  const { data } = await appAxiosInstance.get(`carts/my-cart`);
  return data;
};

export const updateCart = async (payload) => {
  const { data } = await appAxiosInstance.request({
    method: 'PUT',
    url: `carts/update-cart`,
    data: payload,
    headers: {
      'content-type': 'application/json',
    },
  });
  return data;
};
