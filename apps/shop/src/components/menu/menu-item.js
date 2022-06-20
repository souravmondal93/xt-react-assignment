import * as S from './menu.styled';

export const MenuItem = ({ props, children }) => {
  return <S.StyledMenuItem {...props}>{children}</S.StyledMenuItem>;
};
