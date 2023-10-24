import React from 'react';
import {
  StyledContainer,
  StyledHeader,
  StyledLogo,
  StyledNavLink,
} from './Layout.styled';
import logoImg from '../img/alert-img.png';

const Layout = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </nav>
        <StyledLogo to="/">
          <img src={logoImg} alt="logoImg" />
        </StyledLogo>
      </StyledHeader>
    </StyledContainer>
  );
};

export default Layout;
