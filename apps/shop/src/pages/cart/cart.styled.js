import styled from 'styled-components';

export const TotalText = styled.h2`
  margin: ${(props) => `${props.theme.space[4]} ${props.theme.space[0]}`};
  text-align: right;
`;

export const EmptyMessageWrapper = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    border: 1px solid;
    padding: 20px 40px;
    font-size: 24px;
    font-weight: normal;
  }
`;
