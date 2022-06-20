import styled from 'styled-components';

export const StyledMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding: ${(props) => `${props.theme.space[0]}`};
`;

export const StyledMenuItem = styled.li`
  margin-right: ${(props) => props.theme.space[4]};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes[2]};
`;
