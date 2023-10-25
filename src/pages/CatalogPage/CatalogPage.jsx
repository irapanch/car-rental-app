import React from 'react';
import { StyledContainer } from './CatalogPage.styled';
import CarList from 'components/CarList/CarList';

const CatalogPage = () => {
  return (
    <StyledContainer>
      <CarList />
    </StyledContainer>
  );
};

export default CatalogPage;
