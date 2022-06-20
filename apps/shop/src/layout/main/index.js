import { Outlet } from 'react-router-dom';

import { Header, Menu, Link } from '../../components';
import { CONFIG } from '../../config';
import * as S from './main.styled';

export const MainLayout = () => {
  return (
    <>
      <Header>
        <Link to='/'>
          <h2>BW</h2>
        </Link>
        <Menu.MenuList>
          {CONFIG.menuList.map((menuItem) => (
            <Menu.MenuItem key={menuItem.id}>
              <Link to={menuItem.path}>{menuItem.label}</Link>
            </Menu.MenuItem>
          ))}
        </Menu.MenuList>
      </Header>

      <S.StyledMainArea>
        <Outlet />
      </S.StyledMainArea>
    </>
  );
};
