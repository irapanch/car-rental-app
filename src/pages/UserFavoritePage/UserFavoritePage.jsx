import React from 'react';
import { StyledContainer } from 'pages/CatalogPage/CatalogPage.styled';
import FavorCards from 'components/FavorCards/FavorCards';
import SearchBar from 'components/SearchBar/SearchBar';
import PropTypes from 'prop-types';

const UserFavoritePage = ({ toggleModal, setCurrentCar }) => {
  return (
    <StyledContainer>
      <SearchBar />
      <FavorCards toggleModal={toggleModal} setCurrentCar={setCurrentCar} />
    </StyledContainer>
  );
};

export default UserFavoritePage;
UserFavoritePage.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  setCurrentCar: PropTypes.func.isRequired,
};
