import React from 'react';
import { StyledContainer } from './CatalogPage.styled';
import CarList from 'components/CarList/CarList';
import SearchBar from 'components/SearchBar/SearchBar';
import PropTypes from 'prop-types';

const CatalogPage = ({ toggleModal, setCurrentCar }) => {
  return (
    <StyledContainer>
      <SearchBar />
      <CarList toggleModal={toggleModal} setCurrentCar={setCurrentCar} />
    </StyledContainer>
  );
};

export default CatalogPage;

CatalogPage.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  setCurrentCar: PropTypes.func.isRequired,
};
