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
