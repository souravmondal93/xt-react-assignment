import * as S from './header.styled';

export const Header = ({ props, children }) => {
  return <S.StyledHeader {...props}>{children}</S.StyledHeader>;
};
