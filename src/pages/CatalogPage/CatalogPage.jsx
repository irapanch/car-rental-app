import React from 'react';
import { StyledContainer } from './CatalogPage.styled';
import CarList from 'components/CarList/CarList';

const CatalogPage = ({ toggleModal, setCurrentCar }) => {
  return (
    <StyledContainer>
      <CarList toggleModal={toggleModal} setCurrentCar={setCurrentCar} />
    </StyledContainer>
  );
};

export default CatalogPage;
