import { useQuery, useMutation, useQueryClient } from 'react-query';

import { getMyCart, updateCart } from '../carts';

export const useGetMyCart = () =>
  useQuery({
    queryKey: ['my-cart'],
    queryFn: () => getMyCart(),
  });

export const useUpdateCartMutation = ({
  onSuccessCallback,
  onErrorCallback,
  onSettledCallback,
}) => {
  const queryClient = useQueryClient();

  return useMutation((payload) => updateCart(payload), {
    onSuccess: () => {
      queryClient.invalidateQueries(['my-cart']);
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    },
    onSettled: onSettledCallback,
    onError: onErrorCallback,
  });
};
