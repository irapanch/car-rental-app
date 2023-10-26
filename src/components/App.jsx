import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from '../pages/Home/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import UserFavoritePage from '../pages/UserFavoritePage/UserFavoritePage';
import { useState } from 'react';
import { ModalWindow } from './Modal/Modal';
import ScrollToTop from 'react-scroll-up';
import { StyledUpSpan } from '../pages/Home/HomePage.styled';

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
      <ScrollToTop
        showUnder={120}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 35,
          background:
            'linear-gradient(141.22deg, #386b58 9.4%, #10395a 91.91%)',
          width: '42px',
          height: '42px',
          padding: '8px',
          borderRadius: '15%',
          boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2)',
        }}
      >
        <StyledUpSpan>&#8593;</StyledUpSpan>
      </ScrollToTop>
    </>
  );
};
