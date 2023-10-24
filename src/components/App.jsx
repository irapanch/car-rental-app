import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from '../pages/Home/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import UserFavoritePage from '../pages/UserFavoritePage/UserFavoritePage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<UserFavoritePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
