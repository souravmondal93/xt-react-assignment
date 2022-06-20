import * as S from './button.styled';

export const Button = ({ children, ...props }) => {
  return <S.StyledButton {...props}>{children}</S.StyledButton>;
};
