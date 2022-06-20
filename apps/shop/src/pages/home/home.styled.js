import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
`;

export const LinkWrapper = styled.div`
  border: 1px solid;
  padding: ${(props) => `${props.theme.space[4]} ${props.theme.space[9]}`};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-transform: uppercase;
`;
