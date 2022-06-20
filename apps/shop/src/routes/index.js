import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainLayout } from '../layout';

const CartPage = lazy(() => import('../pages/cart'));
const HomePage = lazy(() => import('../pages/home'));
const ProductListPage = lazy(() => import('../pages/product-listing'));
const NotFoundPage = lazy(() => import('../pages/not-found'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
