import * as S from './cart-item.styled';
import { UpdateItems } from '../update-items';

export const CartItem = ({ productDetails, cartDetails }) => {
  const { imageUrl, name, price, quantity } = productDetails;

  return (
    <S.CartItemWrapper>
      <S.CartProductImage src={imageUrl} alt={name} />
      <div>
        <h4>{name}</h4>
        <S.ItemPrice>${price}</S.ItemPrice>
        <S.SubTotalPrice>Amount: ${price * quantity}</S.SubTotalPrice>
      </div>
      <UpdateItems productDetails={productDetails} cartDetails={cartDetails} />
    </S.CartItemWrapper>
  );
};
