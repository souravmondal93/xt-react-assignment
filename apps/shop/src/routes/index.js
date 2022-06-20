import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartPage, HomePage, ProductListPage, NotFoundPage } from '../pages';
import { MainLayout } from '../layout';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductListPage />}>
            <Route path=':pageNumber' element={<ProductListPage />} />
          </Route>
          <Route path='cart' element={<CartPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
