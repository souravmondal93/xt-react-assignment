import * as S from './link.styled';

export const Link = (props) => {
  const { children, ...otherProps } = props;

  return <S.StyledLink {...otherProps}>{children}</S.StyledLink>;
};
