import React from 'react';
import { StyledContainer } from 'pages/CatalogPage/CatalogPage.styled';
import FavorCards from 'components/FavorCards/FavorCards';

const UserFavoritePage = ({ toggleModal, setCurrentCar }) => {
  return (
    <StyledContainer>
      <FavorCards toggleModal={toggleModal} setCurrentCar={setCurrentCar} />
    </StyledContainer>
  );
};

export default UserFavoritePage;
