import React from 'react';
import { StyledContainer } from './CatalogPage.styled';
import CarList from 'components/CarList/CarList';
import SearchBar from 'components/SearchBar/SearchBar';

const CatalogPage = ({ toggleModal, setCurrentCar }) => {
  return (
    <StyledContainer>
      <SearchBar />
      <CarList toggleModal={toggleModal} setCurrentCar={setCurrentCar} />
    </StyledContainer>
  );
};

export default CatalogPage;
