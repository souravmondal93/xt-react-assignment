import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-flow: row dense;
  grid-gap: ${(props) => `${props.theme.space[7]}`};
`;

export const PaginationWrapper = styled.div`
  display: flex;
  margin: ${(props) => `${props.theme.space[5]}`};
  align-items: center;
  justify-content: center;
`;
