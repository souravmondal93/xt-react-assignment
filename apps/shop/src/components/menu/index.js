import { MenuItem } from './menu-item';
import * as S from './menu.styled';

const MenuList = ({ props, children }) => {
  return <S.StyledMenuList {...props}>{children}</S.StyledMenuList>;
};

export const Menu = {
  MenuList: MenuList,
  MenuItem: MenuItem,
};
