import { useParams } from 'react-router-dom';

import * as S from './product-listing.styled';
import { ProductCard, Pagination } from '../../components';
import { useProductsList } from '../../api/hooks/products';
import { useGetMyCart } from '../../api/hooks/carts';

export const ProductListPage = () => {
  let { pageNumber = 1 } = useParams();
  const { data, isLoading, isError } = useProductsList({
    skip: pageNumber - 1,
    limit: 100,
  });
  const {
    data: cartData,
    isLoading: isCartLoading,
    isError: isCartError,
  } = useGetMyCart();

  if (isLoading || isCartLoading) {
    return <span>Loading...</span>;
  }

  if (isError || isCartError) {
    return <span>Error: Something went wrong</span>;
  }

  return (
    <S.PageWrapper>
      <S.StyledProductGrid>
        {data.results.map((product) => (
          <ProductCard
            productDetails={product}
            key={product._id}
            cartDetails={cartData}
          />
        ))}
      </S.StyledProductGrid>
      <S.PaginationWrapper>
        <Pagination />
      </S.PaginationWrapper>
    </S.PageWrapper>
  );
};
