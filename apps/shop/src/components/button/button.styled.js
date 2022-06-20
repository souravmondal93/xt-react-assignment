import styled from 'styled-components';

export const StyledButton = styled.button`
  ${(props) => props.theme.colorSchemes.light.cta.primary};
  width: 100%;
  height: 48px;
  font-size: ${(props) => props.theme.fontSizes[3]};

  ${(props) =>
    props.secondary ? props.theme.colorSchemes.light.cta.secondary : null};

  ${(props) => (props.uppercase ? `text-transform: uppercase;` : null)};
  ${(props) => (props.dsiabled ? `cursor: not-allowed;` : `cursor: pointer;`)};
`;
