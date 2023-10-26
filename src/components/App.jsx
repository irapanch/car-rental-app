import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from '../pages/Home/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import UserFavoritePage from '../pages/UserFavoritePage/UserFavoritePage';
import { useState } from 'react';
import { ModalWindow } from './Modal/Modal';

export const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [currentCar, setCurrentCar] = useState({});

  const toggleModal = () => {
    setModalShow(!modalShow);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="catalog"
            element={
              <CatalogPage
                toggleModal={toggleModal}
                setCurrentCar={setCurrentCar}
              />
            }
          />
          <Route
            path="favorites"
            element={
              <UserFavoritePage
                toggleModal={toggleModal}
                setCurrentCar={setCurrentCar}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      {modalShow && (
        <ModalWindow
          toggleModal={toggleModal}
          currentCar={currentCar}
        ></ModalWindow>
      )}
    </>
  );
};
