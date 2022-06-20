import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  ${(props) => props.theme.colorSchemes.light.link.primary};
  ${(props) =>
    props.secondary ? props.theme.colorSchemes.light.link.secondary : null};
  text-decoration: none;
`;
