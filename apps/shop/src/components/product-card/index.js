import { useState, useEffect, useCallback } from 'react';
import produce from 'immer';

import { Button, UpdateItems } from '../';
import * as S from './product-card.styled';
import { useUpdateCartMutation } from '../../api/hooks/carts';

export const ProductCard = ({ productDetails, cartDetails }) => {
  const updateCart = useUpdateCartMutation({ onSuccessCallback: () => {} });
  const { _id, name, price, currency, category, imageUrl, description } =
    productDetails;
  const { products } = cartDetails;
  const [itemIncart, setItemIncart] = useState(false);
  const [productWithQuanity, setProductWithQuanity] = useState(productDetails);

  const currentItemInCart = useCallback(
    (id) => {
      return products.find((product) => product._id === id);
    },
    [products]
  );

  useEffect(() => {
    const cartItem = currentItemInCart(_id);
    setItemIncart(Boolean(cartItem));
  }, [cartDetails, currentItemInCart, _id]);

  useEffect(() => {
    if (itemIncart) {
      const itemInCart = currentItemInCart(_id);
      setProductWithQuanity(itemInCart);
    }
  }, [itemIncart, cartDetails, currentItemInCart, _id]);

  const handleAddToCart = (id) => {
    const itemInCart = currentItemInCart(id);
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

  return (
    <S.ProductCardWrapper>
      <S.ProductImage src={imageUrl} alt={name} />
      <S.ProductDetailsWrapper>
        <h4>{name}</h4>
        <S.ProductCategoryBadge>{category}</S.ProductCategoryBadge>
        <h2>
          {currency}
          {price}
        </h2>
        <p>{description}</p>
        {itemIncart ? (
          <UpdateItems
            productDetails={productWithQuanity}
            cartDetails={cartDetails}
          />
        ) : (
          <Button onClick={() => handleAddToCart(_id)}>Add to Cart</Button>
        )}
      </S.ProductDetailsWrapper>
    </S.ProductCardWrapper>
  );
};
