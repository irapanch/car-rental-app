import React from 'react';
import { StyledContainer } from 'pages/CatalogPage/CatalogPage.styled';
import FavorCards from 'components/FavorCards/FavorCards';

const UserFavoritePage = () => {
  return (
    <StyledContainer>
      <FavorCards />
    </StyledContainer>
  );
};

export default UserFavoritePage;
