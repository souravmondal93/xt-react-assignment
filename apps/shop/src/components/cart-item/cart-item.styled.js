import styled from 'styled-components';

export const CartItemWrapper = styled.article`
  display: grid;
  align-items: center;
  grid-template-columns: auto 3fr 1fr;
  grid-column-gap: ${(props) => `${props.theme.space[4]}`};
  margin: ${(props) => `${props.theme.space[4]} ${props.theme.space[0]}`};
  border: 1px solid;
  padding: ${(props) => `${props.theme.space[2]} ${props.theme.space[4]}`};
`;

export const CartProductImage = styled.img`
  object-fit: cover;
  height: 100px;
  width: 100%;
`;

export const ItemPrice = styled.h4`
  ${(props) => props.theme.colorSchemes.light.cartItem.price};
`;

export const SubTotalPrice = styled.h4`
  ${(props) => props.theme.colorSchemes.light.cartItem.subTotal};
  font-size: ${(props) => props.theme.fontSizes[0]};
`;
