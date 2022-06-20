import { useQuery } from 'react-query';

import { getProductsList } from '../products';

export const useProductsList = ({ skip = 0, limit = 100 }) =>
  useQuery({
    queryKey: ['products-list', skip, limit],
    queryFn: () => getProductsList({ skip, limit }),
  });
