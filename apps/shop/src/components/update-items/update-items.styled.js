import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const AmountText = styled.p`
  font-size: ${(props) => props.theme.fontSizes[4]};
  margin: ${(props) => `${props.theme.space[1]} ${props.theme.space[4]}`};
`;
