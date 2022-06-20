import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const PageNumber = styled.p`
  font-size: ${(props) => props.theme.fontSizes[4]};
  margin: ${(props) => `${props.theme.space[1]} ${props.theme.space[4]}`};
`;

export const PaginationItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.theme.colorSchemes.light.pagination.paginationItem};
  width: 160px;
  height: ${(props) => props.theme.space[8]};
  font-size: ${(props) => props.theme.fontSizes[3]};
`;
