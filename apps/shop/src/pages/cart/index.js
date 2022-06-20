import { CartItem } from '../../components';
import * as S from './cart.styled';
import { useGetMyCart } from '../../api/hooks/carts';

const CartPage = () => {
  const { data, isLoading, isError } = useGetMyCart();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: Something went wrong</span>;
  }

  return (
    <>
      <h1>Your cart</h1>
      {data.products.length ? (
        <>
          {data.products.map((product) => (
            <CartItem
              productDetails={product}
              cartDetails={data}
              key={product._id}
            />
          ))}
          <hr />
          <S.TotalText>Total: ${data.total}</S.TotalText>
        </>
      ) : (
        <S.EmptyMessageWrapper>
          <h2>Please add products to your cart</h2>
        </S.EmptyMessageWrapper>
      )}
    </>
  );
};

export default CartPage;
