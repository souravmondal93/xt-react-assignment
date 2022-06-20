import styled from 'styled-components';

export const StyledHeader = styled.header`
  ${(props) => props.theme.colorSchemes.light.header};
  height: 48px;
  font-size: ${(props) => props.theme.fontSizes[3]};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${(props) => `${props.theme.space[0]} ${props.theme.space[4]}`};
  justify-content: space-between;
`;

export const ProductCardWrapper = styled.div`
  ${(props) => props.theme.colorSchemes.light.productCard.wrapper};
`;

export const ProductDetailsWrapper = styled.div`
  padding: ${(props) =>
    `${props.theme.space[0]} ${props.theme.space[4]} ${props.theme.space[4]}`};
`;

export const ProductCategoryBadge = styled.span`
  ${(props) => props.theme.colorSchemes.light.productCard.wrapper};
  padding: ${(props) => `${props.theme.space[1]} ${props.theme.space[3]}`};
  border-radius: 30px;
`;

export const ProductImage = styled.img`
  object-fit: cover;
  height: 400px;
  width: 100%;
`;
