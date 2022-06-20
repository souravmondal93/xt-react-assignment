import produce from 'immer';

import { Button } from '../button';
import * as S from './update-items.styled';
import { useUpdateCartMutation } from '../../api/hooks/carts';

export const UpdateItems = ({ cartDetails, productDetails }) => {
  const updateCart = useUpdateCartMutation({ onSuccessCallback: () => {} });
  const { quantity, _id } = productDetails;
  const { products } = cartDetails;

  const handleAddToCart = (id) => {
    const itemInCart = products.find((product) => product._id === id);
    let updatedProducts;

    if (itemInCart) {
      updatedProducts = produce(products, (draft) => {
        const productToBeUpdated = draft.find((product) => product._id === id);
        productToBeUpdated.quantity++;
      });
    } else {
      updatedProducts = produce(products, (draft) => {
        draft.push({ ...productDetails, quantity: 1 });
      });
    }

    updateCart.mutate({ ...cartDetails, products: updatedProducts });
  };

  const handleRemoveFromCart = (id) => {
    const itemInCart = products.find((product) => product._id === id);
    let updatedProducts;

    if (itemInCart.quantity <= 1) {
      updatedProducts = produce(products, (draft) => {
        return draft.filter((product) => product._id !== id);
      });
    } else {
      updatedProducts = produce(products, (draft) => {
        const productToBeUpdated = draft.find((product) => product._id === id);
        productToBeUpdated.quantity--;
      });
    }

    updateCart.mutate({ ...cartDetails, products: updatedProducts });
  };

  return (
    <S.ButtonsContainer>
      <Button onClick={() => handleRemoveFromCart(_id)}>-</Button>
      <S.AmountText>{quantity}</S.AmountText>
      <Button onClick={() => handleAddToCart(_id)}>+</Button>
    </S.ButtonsContainer>
  );
};
